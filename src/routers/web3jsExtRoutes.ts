import { RouteObject } from "react-router";
import { RoutePath } from "../types/route";

import AccountKeyLegacy from "../pages/web3js-ext/AccountKey/AccountKeyLegacy";
import AccountUpdateWithMultiSig from "../pages/web3js-ext/AccountKey/AccountUpdateWithMultiSig";
import AccountUpdateWithPubKey from "../pages/web3js-ext/AccountKey/AccountUpdateWithPubKey";
import AccountUpdateWithRoleBased from "../pages/web3js-ext/AccountKey/AccountUpdateWithRoleBased";

import SignMsgLegacy from "../pages/web3js-ext/SignMessage/AccountKeyLegacy";
import SignMsgMultiSig from "../pages/web3js-ext/SignMessage/AccountKeyWeightedMultiSig";
import SignMsgPublic from "../pages/web3js-ext/SignMessage/AccountKeyPublic";
import SignMsgRole from "../pages/web3js-ext/SignMessage/AccountKeyRoleBased";

import SignTxLegacy from "../pages/web3js-ext/SignTransaction/AccountKeyLegacy";
import SignTxMultiSig from "../pages/web3js-ext/SignTransaction/AccountKeyWeightedMultiSig";
import SignTxPublic from "../pages/web3js-ext/SignTransaction/AccountKeyPublic";
import SignTxRole from "../pages/web3js-ext/SignTransaction/AccountKeyRoleBased";

import Gasless from "../pages/web3js-ext/Gas-Abstraction/Gasless";

export const web3jsExtRoutes: RouteObject[] = [
  { path: RoutePath.Web3jsExt_Account_Legacy, Component: AccountKeyLegacy },
  { path: RoutePath.Web3jsExt_Account_MultiSig, Component: AccountUpdateWithMultiSig },
  { path: RoutePath.Web3jsExt_Account_Public, Component: AccountUpdateWithPubKey },
  { path: RoutePath.Web3jsExt_Account_Role, Component: AccountUpdateWithRoleBased },

  { path: RoutePath.Web3jsExt_SignMsg_Legacy, Component: SignMsgLegacy },
  { path: RoutePath.Web3jsExt_SignMsg_MultiSig, Component: SignMsgMultiSig },
  { path: RoutePath.Web3jsExt_SignMsg_Public, Component: SignMsgPublic },
  { path: RoutePath.Web3jsExt_SignMsg_Role, Component: SignMsgRole },

  { path: RoutePath.Web3jsExt_SignTx_Legacy, Component: SignTxLegacy },
  { path: RoutePath.Web3jsExt_SignTx_MultiSig, Component: SignTxMultiSig },
  { path: RoutePath.Web3jsExt_SignTx_Public, Component: SignTxPublic },
  { path: RoutePath.Web3jsExt_SignTx_Role, Component: SignTxRole },

  { path: RoutePath.Web3jsExt_Gasless, Component: Gasless },
];
