import { RouteObject } from "react-router";
import { RoutePath } from "../types/route";

import AccountLegacy from "../pages/ethers-ext-v6/AccountKey/AccountKeyLegacy";
import AccountMultiSig from "../pages/ethers-ext-v6/AccountKey/AccountKeyWeightedMultiSig";
import AccountPubKey from "../pages/ethers-ext-v6/AccountKey/AccountUpdateWithPubKey";
import AccountRole from "../pages/ethers-ext-v6/AccountKey/AccountUpdateWithRoleBased";

import SignMsgLegacy from "../pages/ethers-ext-v6/SignMessage/AccountKeyLegacy";
import SignMsgMultiSig from "../pages/ethers-ext-v6/SignMessage/AccountKeyWeightedMultiSig";
import SignMsgPublic from "../pages/ethers-ext-v6/SignMessage/AccountKeyPublic";
import SignMsgRole from "../pages/ethers-ext-v6/SignMessage/AccountKeyRoleBased";

import SignTxLegacy from "../pages/ethers-ext-v6/SignTransaction/AccountKeyLegacy";
import SignTxMultiSig from "../pages/ethers-ext-v6/SignTransaction/AccountKeyWeightedMultiSig";
import SignTxPublic from "../pages/ethers-ext-v6/SignTransaction/AccountKeyPublic";
import SignTxRole from "../pages/ethers-ext-v6/SignTransaction/AccountKeyRoleBased";

import Gasless from "../pages/ethers-ext-v6/Gas-Abstraction/Gasless";

export const ethersExtRoutes: RouteObject[] = [
  { path: RoutePath.EthersExt_Account_Legacy, Component: AccountLegacy },
  { path: RoutePath.EthersExt_Account_MultiSig, Component: AccountMultiSig },
  { path: RoutePath.EthersExt_Account_Public, Component: AccountPubKey },
  { path: RoutePath.EthersExt_Account_Role, Component: AccountRole },

  { path: RoutePath.EthersExt_SignMsg_Legacy, Component: SignMsgLegacy },
  { path: RoutePath.EthersExt_SignMsg_MultiSig, Component: SignMsgMultiSig },
  { path: RoutePath.EthersExt_SignMsg_Public, Component: SignMsgPublic },
  { path: RoutePath.EthersExt_SignMsg_Role, Component: SignMsgRole },

  { path: RoutePath.EthersExt_SignTx_Legacy, Component: SignTxLegacy },
  { path: RoutePath.EthersExt_SignTx_MultiSig, Component: SignTxMultiSig },
  { path: RoutePath.EthersExt_SignTx_Public, Component: SignTxPublic },
  { path: RoutePath.EthersExt_SignTx_Role, Component: SignTxRole },

  { path: RoutePath.EthersExt_Gasless, Component: Gasless },
];
