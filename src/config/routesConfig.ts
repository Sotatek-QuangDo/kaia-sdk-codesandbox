import { RoutePath } from "../types/route";

export type RouteGroup = {
  title: string;
  routes: { label: string; path: RoutePath }[];
};

export const sections: { title: string; groups: RouteGroup[] }[] = [
  {
    title: "Web3jsExt",
    groups: [
      {
        title: "AccountKey",
        routes: [
          { label: "Web3jsExt_Account_Legacy", path: RoutePath.Web3jsExt_Account_Legacy },
          { label: "Web3jsExt_Account_MultiSig", path: RoutePath.Web3jsExt_Account_MultiSig },
          { label: "Web3jsExt_Account_Public", path: RoutePath.Web3jsExt_Account_Public },
          { label: "Web3jsExt_Account_Role", path: RoutePath.Web3jsExt_Account_Role },
        ],
      },
      {
        title: "SignMessage",
        routes: [
          { label: "Web3jsExt_SignMsg_Legacy", path: RoutePath.Web3jsExt_SignMsg_Legacy },
          { label: "Web3jsExt_SignMsg_MultiSig", path: RoutePath.Web3jsExt_SignMsg_MultiSig },
          { label: "Web3jsExt_SignMsg_Public", path: RoutePath.Web3jsExt_SignMsg_Public },
          { label: "Web3jsExt_SignMsg_Role", path: RoutePath.Web3jsExt_SignMsg_Role },
        ],
      },
      {
        title: "SignTransaction",
        routes: [
          { label: "Web3jsExt_SignTx_Legacy", path: RoutePath.Web3jsExt_SignTx_Legacy },
          { label: "Web3jsExt_SignTx_MultiSig", path: RoutePath.Web3jsExt_SignTx_MultiSig },
          { label: "Web3jsExt_SignTx_Public", path: RoutePath.Web3jsExt_SignTx_Public },
          { label: "Web3jsExt_SignTx_Role", path: RoutePath.Web3jsExt_SignTx_Role },
        ],
      },
      {
        title: "Gas-Abstraction",
        routes: [{ label: "Web3jsExt_Gasless", path: RoutePath.Web3jsExt_Gasless }],
      },
    ],
  },
  {
    title: "EthersExt",
    groups: [
      {
        title: "AccountKey",
        routes: [
          { label: "EthersExt_Account_Legacy", path: RoutePath.EthersExt_Account_Legacy },
          { label: "EthersExt_Account_MultiSig", path: RoutePath.EthersExt_Account_MultiSig },
          { label: "EthersExt_Account_Public", path: RoutePath.EthersExt_Account_Public },
          { label: "EthersExt_Account_Role", path: RoutePath.EthersExt_Account_Role },
        ],
      },
      {
        title: "SignMessage",
        routes: [
          { label: "EthersExt_SignMsg_Legacy", path: RoutePath.EthersExt_SignMsg_Legacy },
          { label: "EthersExt_SignMsg_MultiSig", path: RoutePath.EthersExt_SignMsg_MultiSig },
          { label: "EthersExt_SignMsg_Public", path: RoutePath.EthersExt_SignMsg_Public },
          { label: "EthersExt_SignMsg_Role", path: RoutePath.EthersExt_SignMsg_Role },
        ],
      },
      {
        title: "SignTransaction",
        routes: [
          { label: "EthersExt_SignTx_Legacy", path: RoutePath.EthersExt_SignTx_Legacy },
          { label: "EthersExt_SignTx_MultiSig", path: RoutePath.EthersExt_SignTx_MultiSig },
          { label: "EthersExt_SignTx_Public", path: RoutePath.EthersExt_SignTx_Public },
          { label: "EthersExt_SignTx_Role", path: RoutePath.EthersExt_SignTx_Role },
        ],
      },
      {
        title: "Gas-Abstraction",
        routes: [{ label: "EthersExt_Gasless", path: RoutePath.EthersExt_Gasless }],
      },
    ],
  },
  {
    title: "ViemExt",
    groups: [
      {
        title: "Basic Transaction",
        routes: [
          { label: "ViemExt_Account_Update", path: RoutePath.ViemExt_Account_Update },
          { label: "ViemExt_Cancel_Type", path: RoutePath.ViemExt_Cancel_Type },
          { label: "ViemExt_Legacy_Transaction", path: RoutePath.ViemExt_Legacy_Transaction },
          { label: "ViemExt_SmartContract_Deploy", path: RoutePath.ViemExt_SmartContract_Deploy },
          { label: "ViemExt_SmartContract_Execution", path: RoutePath.ViemExt_SmartContract_Execution },
          { label: "ViemExt_Value_Transfer", path: RoutePath.ViemExt_Value_Transfer },
          { label: "ViemExt_Value_Transfer_Memo", path: RoutePath.ViemExt_Value_Transfer_Memo },
        ],
      },
      {
        title: "Fee Delegated Transaction",
        routes: [
          { label: "ViemExt_Fee_Account_Update", path: RoutePath.ViemExt_Fee_Account_Update },
          { label: "ViemExt_Fee_Cancel_Type", path: RoutePath.ViemExt_Fee_Cancel_Type },
          { label: "ViemExt_Fee_SmartContract_Deploy", path: RoutePath.ViemExt_Fee_SmartContract_Deploy },
          { label: "ViemExt_Fee_SmartContract_Execution", path: RoutePath.ViemExt_Fee_SmartContract_Execution },
          { label: "ViemExt_Fee_Value_Transfer", path: RoutePath.ViemExt_Fee_Value_Transfer },
          { label: "ViemExt_Fee_Value_Transfer_Memo", path: RoutePath.ViemExt_Fee_Value_Transfer_Memo },
        ],
      },
      {
        title: "SmartContract",
        routes: [
          { label: "ViemExt_SmartContract_View", path: RoutePath.ViemExt_SmartContract_View },
          { label: "ViemExt_SmartContract_Write", path: RoutePath.ViemExt_SmartContract_Write },
          { label: "ViemExt_SmartContract_WriteTxType", path: RoutePath.ViemExt_SmartContract_WriteTxType },
          {
            label: "ViemExt_SmartContract_WriteWithFeeDelegation",
            path: RoutePath.ViemExt_SmartContract_WriteWithFeeDelegation,
          },
        ],
      },
    ],
  },
];
