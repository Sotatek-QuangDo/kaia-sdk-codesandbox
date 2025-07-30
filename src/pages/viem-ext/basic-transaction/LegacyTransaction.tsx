const {
  createWalletClient,
  kairos,
  http,
  privateKeyToAccount,
} = require("@kaiachain/viem-ext");

import { RunExample } from "../../../components/RunExample";

const privateKey =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

const legacyWallet = createWalletClient({
  chain: kairos,
  transport: http(),
  account: privateKeyToAccount(privateKey),
});

async function main() {
  const result = [];
  const legacyRequest = await legacyWallet.prepareTransactionRequest({
    to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    value: 0,
  });
  const sentLegacyTx = await legacyWallet.sendTransaction(legacyRequest);

  result.push({ legacyRequest, sentLegacyTx });

  const serializedResult = JSON.stringify(
    result,
    (_, v) => (typeof v === "bigint" ? v.toString() : v),
    2
  );
  return JSON.parse(serializedResult);
}

export default function index() {
  return <RunExample title="LegacyTransaction" onRun={main} />;
}
