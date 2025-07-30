import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");

import { JsonRpcProvider } from "@kaiachain/ethers-ext";
import { Wallet } from "@kaiachain/ethers-ext";

const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

const provider = new JsonRpcProvider(rpcUrl);
const wallet = new Wallet(senderAddr, senderPriv, provider); // decoupled account

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = ethers.hexlify(ethers.toUtf8Bytes(msg));
  const sig = (await wallet.signMessage(msg)) as any;
  // console.log({ senderAddr, msg, msghex, sig });
  result.push({ senderAddr, msg, msghex, sig: sig.signature });

  const addr1 = ethers.verifyMessage(msg, sig);
  // console.log(
  //   "recoveredAddr lib",
  //   addr1,
  //   addr1.toLowerCase() === wallet.address.toLowerCase()
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
  //   addr2.toLowerCase() === wallet.address.toLowerCase()
  // );
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}

export default function index() {
  return <RunExample title="SignMsg AccountKeyPublic" onRun={main} />;
}
