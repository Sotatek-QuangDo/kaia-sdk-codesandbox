import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");
import { JsonRpcProvider } from "@kaiachain/ethers-ext";
import { Wallet } from "@kaiachain/ethers-ext";

const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv =
  "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";

const provider = new JsonRpcProvider(rpcUrl);
const wallet = new Wallet(senderPriv, provider);

async function main(): Promise<any[]> {
  const result = [];
  const msg = "hello";
  const msghex = ethers.hexlify(ethers.toUtf8Bytes(msg));
  const sig = (await wallet.signMessage(msg)) as any;
  // console.log({ senderAddr, msg, msghex, sig });
  result.push({ senderAddr, msg, msghex, sig: sig.signature });

  const addr1 = ethers.verifyMessage(msg, sig);
  // console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAddr);
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
  // console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAddr);
  result.push({
    "recoveredAddr rpc": addr2,
    "addr2.toLowerCase() === senderAddr": addr2.toLowerCase() === senderAddr,
  });

  return result;
}

export default function index() {
  return <RunExample title="SignMsg AccountKeyLegacy" onRun={main} />;
}
