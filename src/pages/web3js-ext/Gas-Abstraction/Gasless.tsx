import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { Web3 } = require("@kaiachain/web3js-ext");
const tokenAddr = "0xcB00BA2cAb67A3771f9ca1Fa48FDa8881B457750";
const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv =
  "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

const ERC20_ABI = JSON.parse(
  '[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'
);

async function main() {
  const result = [];

  const appTxFee = web3.utils.toWei("0.01", "ether");
  const token = new web3.eth.Contract(ERC20_ABI, tokenAddr);
  const tokenSymbol = await token.methods.symbol().call();
  const tokenDecimals = parseInt(await token.methods.decimals().call());
  const tokenBalance = await token.methods.balanceOf(senderAddr).call();

  const router = await web3.gasless.getGaslessSwapRouter();
  const routerAddr = await router.options.address;
  const isTokenSupported = await router.methods
    .isTokenSupported(tokenAddr)
    .call();
  const commissionRate = await router.methods.commissionRate().call();
  const gasPrice = await web3.eth.getGasPrice();
  const allowance = await token.methods
    .allowance(senderAddr, routerAddr)
    .call();
  const approveRequired = allowance == BigInt(0);
  const txs = [];
  if (approveRequired) {
    console.log("\nAdding ApproveTx because allowance is 0");
    const approveTx = await web3.gasless.getApproveTx(
      senderAddr,
      tokenAddr,
      routerAddr,
      gasPrice
    );
    txs.push(approveTx);
  } else {
    console.log("\nNo ApproveTx needed");
  }

  const amountRepay = web3.gasless.getAmountRepay(approveRequired, gasPrice);
  const minAmountOut = web3.gasless.getMinAmountOut(
    amountRepay,
    appTxFee,
    commissionRate
  );
  const slippageBps = 50;
  const amountIn = await web3.gasless.getAmountIn(
    router,
    tokenAddr,
    minAmountOut,
    slippageBps
  );
  if (tokenBalance < amountIn) {
    console.log(
      `\nInsufficient balance of the token: ${web3.utils.fromWei(
        tokenBalance,
        tokenDecimals
      )} ${tokenSymbol}`
    );
    console.log(
      `- Please transfer more ${tokenSymbol} to the sender ${senderAddr}`
    );
    return [];
  }
  const swapTx = await web3.gasless.getSwapTx(
    senderAddr,
    tokenAddr,
    routerAddr,
    amountIn,
    minAmountOut,
    amountRepay,
    gasPrice,
    approveRequired
  );
  txs.push(swapTx);

  const signedTxs = [];
  const txHashes = [];
  for (const tx of txs) {
    const signResult = await senderAccount.signTransaction(tx);
    signedTxs.push(signResult.rawTransaction);
    txHashes.push(signResult.transactionHash);
    console.log(
      `- Tx signed: (nonce: ${tx.nonce}) ${signResult.transactionHash} ${signResult.rawTransaction}`
    );
  }
  const receipts = await web3.eth.sendSignedTransactions(signedTxs);
  const block = await web3.eth.getBlock(receipts[0].blockNumber);
  const names = {
    [senderAddr.toLowerCase()]: "sender",
    [tokenAddr.toLowerCase()]: "token",
    [routerAddr.toLowerCase()]: "router",
  };
  for (const txhash of block.transactions) {
    const tx = await web3.eth.getTransaction(txhash);
    const fromName = names[tx.from.toLowerCase()] || tx.from;
    const toName = names[tx.to.toLowerCase()] || tx.to;
    if (fromName != tx.from || toName != tx.to) {
      console.log(`- Tx ${tx.hash}: ${fromName} => ${toName}`);
    }
  }

  result.push({ txs, signedTxs, txHashes });

  return result;
}

export default function index() {
  return <RunExample title="Gasless-Web3" onRun={main} />;
}
