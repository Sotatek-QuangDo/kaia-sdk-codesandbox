const {
  http,
  encodeFunctionData,
  createWalletClient,
  createPublicClient,
  kairos,
  TxType,
  privateKeyToAccount,
} = require("@kaiachain/viem-ext");

import { RunExample } from "../../../components/RunExample";

const publicClient = createPublicClient({
  chain: kairos,
  transport: http(),
});
const senderWallet = createWalletClient({
  chain: kairos,
  transport: http(),
  account: privateKeyToAccount(
    "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"
  ),
});
const feePayerWallet = createWalletClient({
  chain: kairos,
  transport: http(),
  account: privateKeyToAccount(
    "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4"
  ),
});

async function main() {
  const result = [];
  const contractAddr = "0x95Be48607498109030592C08aDC9577c7C2dD505";
  const abi = [
    {
      inputs: [
        { internalType: "uint256", name: "initNumber", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "number",
          type: "uint256",
        },
      ],
      name: "SetNumber",
      type: "event",
    },
    {
      inputs: [],
      name: "increment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "number",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "newNumber", type: "uint256" }],
      name: "setNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const data = encodeFunctionData({
    abi,
    args: [BigInt(123)],
    functionName: "setNumber",
  });
  // non fee payer
  const tx = await senderWallet.prepareTransactionRequest({
    type: TxType.SmartContractExecution,
    account: senderWallet.account,
    to: contractAddr,
    value: 0,
    data,
  });

  const signedTx = await senderWallet.signTransaction(tx);

  const sentTx = await senderWallet.request({
    method: "klay_sendRawTransaction",
    params: [signedTx],
  });

  // fee payer
  const tx2 = await senderWallet.prepareTransactionRequest({
    type: TxType.FeeDelegatedSmartContractExecution,
    account: senderWallet.account,
    to: contractAddr,
    value: 0,
    data,
  });
  const signedTx2 = await senderWallet.signTransaction(tx2);

  const feePayerSignedTx = await feePayerWallet.signTransactionAsFeePayer(
    signedTx2
  );
  const sentFeePayerTx = await feePayerWallet.request({
    method: "klay_sendRawTransaction",
    params: [feePayerSignedTx],
  });

  const resultRead = await publicClient.readContract({
    address: contractAddr,
    abi,
    functionName: "number",
  });
  result.push({ tx, sentTx, sentFeePayerTx, resultRead });

  const serializedResult = JSON.stringify(
    result,
    (_, v) => (typeof v === "bigint" ? v.toString() : v),
    2
  );
  return JSON.parse(serializedResult);
}

export default function index() {
  return <RunExample title="writeWithFeeDelegation" onRun={main} />;
}
