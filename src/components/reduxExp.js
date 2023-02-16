import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
// import { useEffect } from "react";
import { toast } from 'wc-toast'
import * as toastAlert from "./ToastAlert"


function ReduxExp() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state) => state.amount);
  const handleCloseToast = () => {
    toast('What!', { closeable: true });
  };

  return (
    <div>
      <h1>Current Balance = {amount}</h1>
      <div className="btnbox">
        deposit(1)
        <button
          className="toast"
          onClick={() => {
            depositMoney(1);
            toastAlert.handleSuccessToast("Money Deposit!");
          }}
        >
          +
        </button>
        Withdraw(1)
        <button
          className="toast"
          onClick={() => {
            withdrawMoney(1);
            toastAlert.handleErrorToast("Money Withdraw!");;
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ReduxExp;
