// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_msg_AccountKeyRoleBased.js

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

const { Web3 } = require("@kaiachain/web3js-ext");

const senderAddr = "0x334b4d3c775c45c59de54e9f0408cba25a1aece7";
const senderRoleTransactionPriv =
  "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const txAccount = web3.eth.accounts.privateKeyToAccount(
  senderRoleTransactionPriv
);

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = Web3.utils.utf8ToHex(msg);
  const signResult = txAccount.sign(msg);
 result.push({ senderAddr, msg, msghex, sig: signResult.signature });
 
  const { v, r, s } = signResult;
  const addr1 = web3.eth.accounts.recover(msg, v, r, s);
  result.push({
    "recoveredAddr lib": addr1,
    "addr1.toLowerCase() === senderAddr": addr1.toLowerCase() === senderAddr,
  });

  const sig = signResult.signature;
  const addr2 = await web3.klay.recoverFromMessage(
    senderAddr,
    msghex,
    sig,
    "latest"
  );
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}

export default function index() {
  return <RunExample title="SignMessage AccountKeyRoleBased" onRun={main} />;
}
