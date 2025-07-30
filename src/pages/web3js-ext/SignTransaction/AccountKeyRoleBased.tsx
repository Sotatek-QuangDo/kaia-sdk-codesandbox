// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_tx_AccountKeyRoleBased.js

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { Web3, TxType, toPeb } = require("@kaiachain/web3js-ext");

const senderAddr = "0x334b4d3c775c45c59de54e9f0408cba25a1aece7";
const senderRoleTransactionPriv =
  "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const txAccount = web3.eth.accounts.privateKeyToAccount(
  senderRoleTransactionPriv
);

async function main(): Promise<any[]> {
  const result = [];
  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: receiverAddr,
    value: toPeb("0.01", "KLAY"),
    gasLimit: 100000,
  };

  const signResult = await txAccount.signTransaction(tx);
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
  return (
    <RunExample title="SignTransaction AccountKeyRoleBased" onRun={main} />
  );
}
