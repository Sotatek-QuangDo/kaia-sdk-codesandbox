// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/update_AccountKeyLegacy.js

import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

// AccountKeyLegacy
// https://docs.kaia.io/docs/learn/accounts/

const {
  Web3,
  TxType,
  AccountKeyType,
  getPublicKeyFromPrivate,
} = require("@kaiachain/web3js-ext");

// Using legacy AccountKey to execute this example repeatedly.
// But you might want to register a different Accountkey.
const senderAddr = "0x2e88be91721702cfdd0bac0946e069a142250e32";
const senderPriv =
  "0xa89e75b3a54a1878e4a9428daf069fb20dac375bef70b8727fe7956469660c6e";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

async function main(): Promise<any[]> {
  const result = [];
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Legacy,
    },
  };

  const signResult = await senderAccount.signTransaction(tx);
  // console.log("signedTx", signResult.transactionHash);
  result.push({ signedTx: signResult.transactionHash });

  const receipt = await web3.eth.sendSignedTransaction(
    signResult.rawTransaction
  );
  // console.log("receipt", receipt);
  result.push({ receipt });

  return result;
}

export default function index() {
  return <RunExample title="AccountKeyLegacy" onRun={main} />;
}
