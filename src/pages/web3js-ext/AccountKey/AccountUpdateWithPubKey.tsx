// https://github.com/kaiachain/kaia-sdk/blob/dev/web3js-ext/example/accountKey/update_AccountKeyPublic.js

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
const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function main(): Promise<any[]> {
  const result = [];
  const senderNewPub = getPublicKeyFromPrivate(senderNewPriv);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    },
  };

  const signResult = await senderAccount.signTransaction(tx);

  result.push({ signedTx: signResult.transactionHash });

  const receipt = await web3.eth.sendSignedTransaction(
    signResult.rawTransaction
  );

  result.push({ receipt });

  return result;
}

export default function index() {
  return <RunExample title="AccountUpdateWithPubKey" onRun={main} />;
}
