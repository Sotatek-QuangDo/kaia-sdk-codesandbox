import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

import { JsonRpcProvider } from "@kaiachain/ethers-ext";
import { Wallet, TxType, AccountKeyType } from "@kaiachain/ethers-ext";

// Using legacy AccountKey to execute this example repeatedly.
// But you might want to register a different Accountkey.
const senderAddr = "0x2e88be91721702cfdd0bac0946e069a142250e32";
const senderPriv =
  "0xa89e75b3a54a1878e4a9428daf069fb20dac375bef70b8727fe7956469660c6e";
const provider = new JsonRpcProvider(rpcUrl);
const wallet = new Wallet(senderPriv, provider);

async function main(): Promise<any[]> {
  const result = [];
  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Legacy,
    },
  };

  const sentTx = await wallet.sendTransaction(tx);
  // console.log("sentTx", sentTx.hash);
  result.push({ signedTx: sentTx.hash });

  const receipt = await sentTx.wait();
  // console.log("receipt", receipt);
  result.push({ receipt });

  return result;
}

export default function index() {
  return <RunExample title="AccountKeyLegacy" onRun={main} />;
}
