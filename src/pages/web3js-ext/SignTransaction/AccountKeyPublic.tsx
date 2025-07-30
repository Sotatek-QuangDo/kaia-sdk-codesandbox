// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_tx_AccountKeyPublic.js

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { Web3, TxType, toPeb } = require("@kaiachain/web3js-ext");

const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function main(): Promise<any[]> {
  const result = [];
  let tx = {
    type: TxType.ValueTransfer,
    to: receiverAddr,
    value: toPeb("0.01", "KLAY"),
    from: senderAddr,
  };

  const signResult = await senderAccount.signTransaction(tx);
  result.push({ signedTx: signResult.transactionHash, signResult });

  const receipt = await web3.eth.sendSignedTransaction(
    signResult.rawTransaction
  );
  result.push({ receipt });

  const addr2 = await web3.klay.recoverFromTransaction(
    signResult.rawTransaction,
    "latest"
  );
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}

export default function index() {
  return <RunExample title="SignTransaction AccountKeyPublic" onRun={main} />;
}
