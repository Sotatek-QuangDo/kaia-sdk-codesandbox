import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");

import { JsonRpcProvider } from "@kaiachain/ethers-ext";
import { Wallet } from "@kaiachain/ethers-ext";

const senderAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";
const senderPriv =
  "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv1 =
  "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 =
  "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

const provider = new JsonRpcProvider(rpcUrl);
const wallet1 = new Wallet(senderAddr, senderNewPriv1, provider);
const wallet2 = new Wallet(senderAddr, senderNewPriv2, provider);
const wallet3 = new Wallet(senderAddr, senderNewPriv3, provider);

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = ethers.hexlify(ethers.toUtf8Bytes(msg));
  const sig = (await wallet3.signMessage(msg)) as any;
  // console.log({ senderAddr, msg, msghex, sig });
  result.push({ senderAddr, msg, msghex, sig: sig.signature });

  const addr1 = ethers.verifyMessage(msg, sig);
  // console.log(
  //   "recoveredAddr lib",
  //   addr1,
  //   addr1.toLowerCase() === wallet3.address.toLowerCase()
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
  //   addr2.toLowerCase() === wallet3.address.toLowerCase()
  // );
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}
export default function index() {
  return <RunExample title="SignMsg AccountKeyWeightedMultiSig" onRun={main} />;
}
