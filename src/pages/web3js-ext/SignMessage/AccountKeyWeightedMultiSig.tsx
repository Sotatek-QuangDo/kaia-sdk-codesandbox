// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/sign_msg_AccountKeyWeightedMultiSig.js
import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

const { Web3 } = require("@kaiachain/web3js-ext");

const senderAddr = "0x2bf611d14d330fd3688d10f2201321eacc8aa2ce";
const senderPriv1 =
  "0x31fadf868e68fd2e3f7a1c528023c9a86a45db850e9d6b82c1a82d4c75b469d1";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

async function main(): Promise<any[]> {
  const result = [];
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv1);

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
  return (
    <RunExample title="SignMessage AccountKeyWeightedMultiSig" onRun={main} />
  );
}
