// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_msg_AccountKeyPublic.js

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

const { Web3 } = require("@kaiachain/web3js-ext");

const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = Web3.utils.utf8ToHex(msg);
  const signResult = senderAccount.sign(msg);
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
  return <RunExample title="SignMessage AccountKeyPublic" onRun={main} />;
}
