const { createPublicClient, kairos, http } = require("@kaiachain/viem-ext");

import { RunExample } from "../../../components/RunExample";

const publicClient = createPublicClient({
  chain: kairos,
  transport: http(),
});

async function main() {
  const result = [];
  const abi = [
    {
      inputs: [
        { internalType: "uint256", name: "initNumber", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "number",
          type: "uint256",
        },
      ],
      name: "SetNumber",
      type: "event",
    },
    {
      inputs: [],
      name: "increment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "number",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "newNumber", type: "uint256" }],
      name: "setNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const address = "0x95Be48607498109030592C08aDC9577c7C2dD505";
  const resultRead = await publicClient.readContract({
    address,
    abi,
    functionName: "number",
  });

  result.push({ resultRead });

  const serializedResult = JSON.stringify(
    result,
    (_, v) => (typeof v === "bigint" ? v.toString() : v),
    2
  );
  return JSON.parse(serializedResult);
}

export default function index() {
  return <RunExample title="SmartContractView" onRun={main} />;
}
