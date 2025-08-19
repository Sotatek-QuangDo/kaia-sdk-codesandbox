import { RouteObject } from "react-router";
import { RoutePath } from "../types/route";

// ================= Basic Transaction =================
import AccountUpdate from "../pages/viem-ext/basic-transaction/AccountUpdate";
import CancelType from "../pages/viem-ext/basic-transaction/CancelType";
import LegacyTransaction from "../pages/viem-ext/basic-transaction/LegacyTransaction";
import SmartContractDeploy from "../pages/viem-ext/basic-transaction/SmartContractDeploy";
import ValueTransfer from "../pages/viem-ext/basic-transaction/ValueTransfer";
import ValueTransferMemo from "../pages/viem-ext/basic-transaction/ValueTransferMemo";
import SmartContractExecutions from "../pages/viem-ext/basic-transaction/SmartContractExecutions";

// ================= Smart Contract =================
import smartContractView from "../pages/viem-ext/smart-contract/smartContractView";
import smartContractWrite from "../pages/viem-ext/smart-contract/smartContractWrite";
import writeTxType from "../pages/viem-ext/smart-contract/writeTxType";
import writeWithFeeDelegation from "../pages/viem-ext/smart-contract/writeWithFeeDelegation";

// ================= Fee Delegated Transaction =================
import FeeDelegatedSmartContractExecution from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedSmartContractExecution";
import FeeDelegatedAccountUpdate from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedAccountUpdate";
import FeeDelegatedCancelType from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedCancelType";
import FeeDelegatedSmartContractDeploy from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedSmartContractDeploy";
import FeeDelegatedValueTransfer from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedValueTransfer";
import FeeDelegatedValueTransferMemo from "../pages/viem-ext/fee-delegated-transaction/FeeDelegatedValueTransferMemo";

export const viemExtRoutes: RouteObject[] = [
  // ---- Basic Transaction ----
  { path: RoutePath.ViemExt_Account_Update, Component: AccountUpdate },
  { path: RoutePath.ViemExt_Cancel_Type, Component: CancelType },
  { path: RoutePath.ViemExt_Legacy_Transaction, Component: LegacyTransaction },
  { path: RoutePath.ViemExt_SmartContract_Deploy, Component: SmartContractDeploy },
  { path: RoutePath.ViemExt_SmartContract_Execution, Component: SmartContractExecutions },
  { path: RoutePath.ViemExt_Value_Transfer, Component: ValueTransfer },
  { path: RoutePath.ViemExt_Value_Transfer_Memo, Component: ValueTransferMemo },

  // ---- Fee Delegated Transaction ----
  { path: RoutePath.ViemExt_Fee_Account_Update, Component: FeeDelegatedAccountUpdate },
  { path: RoutePath.ViemExt_Fee_Cancel_Type, Component: FeeDelegatedCancelType },
  { path: RoutePath.ViemExt_Fee_SmartContract_Deploy, Component: FeeDelegatedSmartContractDeploy },
  { path: RoutePath.ViemExt_Fee_SmartContract_Execution, Component: FeeDelegatedSmartContractExecution },
  { path: RoutePath.ViemExt_Fee_Value_Transfer, Component: FeeDelegatedValueTransfer },
  { path: RoutePath.ViemExt_Fee_Value_Transfer_Memo, Component: FeeDelegatedValueTransferMemo },

  // ---- Smart Contract ----
  { path: RoutePath.ViemExt_SmartContract_View, Component: smartContractView },
  { path: RoutePath.ViemExt_SmartContract_Write, Component: smartContractWrite },
  { path: RoutePath.ViemExt_SmartContract_WriteTxType, Component: writeTxType },
  { path: RoutePath.ViemExt_SmartContract_WriteWithFeeDelegation, Component: writeWithFeeDelegation },
];
