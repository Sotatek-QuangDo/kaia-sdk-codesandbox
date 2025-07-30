// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_msg_AccountKeyLegacy.js

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

const { Web3 } = require("@kaiachain/web3js-ext");

const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv =
  "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

async function main(): Promise<any[]> {
  const result = [];

  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

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
  return <RunExample title="SignMessage AccountKeyLegacy" onRun={main} />;
}
