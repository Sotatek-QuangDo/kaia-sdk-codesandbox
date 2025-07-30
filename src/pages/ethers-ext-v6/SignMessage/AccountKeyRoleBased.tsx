import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");

import { JsonRpcProvider } from "@kaiachain/ethers-ext";
import { Wallet } from "@kaiachain/ethers-ext";

const senderAddr = "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea";
const senderPriv =
  "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";

const provider = new JsonRpcProvider(rpcUrl);
const txWallet = new Wallet(senderAddr, senderPriv, provider);

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = ethers.hexlify(ethers.toUtf8Bytes(msg));
  const sig = (await txWallet.signMessage(msg)) as any;
  // console.log({ senderAddr, msg, msghex, sig });
  result.push({ senderAddr, msg, msghex, sig: sig.signature });

  const addr1 = ethers.verifyMessage(msg, sig);
  // console.log(
  //   "recoveredAddr lib",
  //   addr1,
  //   addr1.toLowerCase() === senderAddr.toLowerCase()
  // );
  result.push({
    "recoveredAddr lib": addr1,
    "addr1.toLowerCase() === senderAddr": addr1.toLowerCase() === senderAddr,
  });

  const addr2 = await provider.send("klay_recoverFromMessage", [
    senderAddr,
    msghex,
    sig,
    "latest",
  ]);
  // console.log(
  //   "recoveredAddr rpc",
  //   addr2,
  //   addr2.toLowerCase() === senderAddr.toLowerCase()
  // );
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}

export default function index() {
  return <RunExample title="SignMsg AccountKeyRoleBased" onRun={main} />;
}
