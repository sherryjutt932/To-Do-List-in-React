import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function ReduxExp() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h1>Current Balance = {amount}</h1>
      <div className="btnbox">
        deposit(1)
        <button
          onClick={() => {
            depositMoney(1);
          }}
        >
          +
        </button>
        Withdraw(1)
        <button
          onClick={() => {
            withdrawMoney(1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ReduxExp;
