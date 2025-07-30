const {
  createWalletClient,
  kairos,
  http,
  privateKeyToAccount,
  TxType,
  AccountKeyType,
} = require("@kaiachain/viem-ext");

const { ethers } = require("ethers");

import { RunExample } from "../../../components/RunExample";

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
  const txRequest = await senderWallet.prepareTransactionRequest({
    account: senderWallet.account,
    type: TxType.FeeDelegatedCancel,
  });
  const signedTx = await senderWallet.signTransaction(txRequest);

  const feePayerSignedTx = await feePayerWallet.signTransactionAsFeePayer(
    signedTx
  );
  const res = await feePayerWallet.request({
    method: "kaia_sendRawTransaction",
    params: [feePayerSignedTx],
  });

  result.push({ signedTx, res });

  const serializedResult = JSON.stringify(
    result,
    (_, v) => (typeof v === "bigint" ? v.toString() : v),
    2
  );
  return JSON.parse(serializedResult);
}

export default function index() {
  return <RunExample title="FeeDelegatedAccountUpdate" onRun={main} />;
}
