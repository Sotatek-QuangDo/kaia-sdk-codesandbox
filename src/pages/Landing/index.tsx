import { ReactElement } from "react";
import { RoutePath } from "../../types/route";
import { Link } from "react-router";

const index = (): ReactElement => {
  return (
    <div className="box-router">
      {/* Web3jsExt Routes */}
      <h2>Web3jsExt</h2>
      <div className="box-container">
        <div className="box-button-router">
          <h3>AccountKey</h3>
          <div>
            <Link to={RoutePath.Web3jsExt_Account_Legacy}>
              Web3jsExt_Account_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_Account_MultiSig}>
              Web3jsExt_Account_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_Account_Public}>
              Web3jsExt_Account_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_Account_Role}>
              Web3jsExt_Account_Role
            </Link>
          </div>
        </div>
        <div className="box-button-router">
          <h3>SignMessage</h3>
          <div>
            <Link to={RoutePath.Web3jsExt_SignMsg_Legacy}>
              Web3jsExt_SignMsg_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignMsg_MultiSig}>
              Web3jsExt_SignMsg_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignMsg_Public}>
              Web3jsExt_SignMsg_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignMsg_Role}>
              Web3jsExt_SignMsg_Role
            </Link>
          </div>
        </div>
        <div className="box-button-router">
          <h3>SignTransaction</h3>
          <div>
            <Link to={RoutePath.Web3jsExt_SignTx_Legacy}>
              Web3jsExt_SignTx_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignTx_MultiSig}>
              Web3jsExt_SignTx_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignTx_Public}>
              Web3jsExt_SignTx_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.Web3jsExt_SignTx_Role}>
              Web3jsExt_SignTx_Role
            </Link>
          </div>
        </div>
      </div>

      {/* EthersExt Routes */}
      <h2>EthersExt</h2>
      <div className="box-container">
        <div className="box-button-router">
          <h3>AccountKey</h3>
          <div>
            <Link to={RoutePath.EthersExt_Account_Legacy}>
              EthersExt_Account_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_Account_MultiSig}>
              EthersExt_Account_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_Account_Public}>
              EthersExt_Account_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_Account_Role}>
              EthersExt_Account_Role
            </Link>
          </div>
        </div>
        <div className="box-button-router">
          <h3>SignMessage</h3>
          <div>
            <Link to={RoutePath.EthersExt_SignMsg_Legacy}>
              EthersExt_SignMsg_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignMsg_MultiSig}>
              EthersExt_SignMsg_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignMsg_Public}>
              EthersExt_SignMsg_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignMsg_Role}>
              EthersExt_SignMsg_Role
            </Link>
          </div>
        </div>
        <div className="box-button-router">
          <h3>SignTransaction</h3>
          <div>
            <Link to={RoutePath.EthersExt_SignTx_Legacy}>
              EthersExt_SignTx_Legacy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignTx_MultiSig}>
              EthersExt_SignTx_MultiSig
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignTx_Public}>
              EthersExt_SignTx_Public
            </Link>
          </div>
          <div>
            <Link to={RoutePath.EthersExt_SignTx_Role}>
              EthersExt_SignTx_Role
            </Link>
          </div>
        </div>
      </div>
      {/* ViemExt Routes */}
      <h2>ViemExt</h2>
      <div className="box-container">
        <div className="box-button-router">
          <h3>Basic Transaction</h3>
          <div>
            <Link to={RoutePath.ViemExt_Account_Update}>
              ViemExt_Account_Update
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Cancel_Type}>ViemExt_Cancel_Type</Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Legacy_Transaction}>
              ViemExt_Legacy_Transaction
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_Deploy}>
              ViemExt_SmartContract_Deploy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_Execution}>
              ViemExt_SmartContract_Execution
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Value_Transfer}>
              ViemExt_Value_Transfer
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Value_Transfer_Memo}>
              ViemExt_Value_Transfer_Memo
            </Link>
          </div>
        </div>
        {/* fee-delegated-transaction */}
        <div className="box-button-router">
          <h3>Fee Delegated Transaction</h3>
          <div>
            <Link to={RoutePath.ViemExt_Fee_Account_Update}>
              ViemExt_Fee_Account_Update
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Fee_Cancel_Type}>
              ViemExt_Fee_Cancel_Type
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Fee_SmartContract_Deploy}>
              ViemExt_Fee_SmartContract_Deploy
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Fee_SmartContract_Execution}>
              ViemExt_Fee_SmartContract_Execution
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Fee_Value_Transfer}>
              ViemExt_Fee_Value_Transfer
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_Fee_Value_Transfer_Memo}>
              ViemExt_Fee_Value_Transfer_Memo
            </Link>
          </div>
        </div>
        {/* smart contract */}
        <div className="box-button-router">
          <h3>SmartContract</h3>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_View}>
              ViemExt_SmartContract_View
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_Write}>
              ViemExt_SmartContract_Write
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_WriteTxType}>
              ViemExt_SmartContract_WriteTxType
            </Link>
          </div>
          <div>
            <Link to={RoutePath.ViemExt_SmartContract_WriteWithFeeDelegation}>
              ViemExt_SmartContract_WriteWithFeeDelegation
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default index;
