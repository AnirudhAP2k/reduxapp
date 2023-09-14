import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../states';
import { bindActionCreators } from 'redux';

const Shop = () => {
  const dispatch = useDispatch();
  const { amountDeposit, amountWithdraw } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <div className="d-flex justify-content-start ">
            <button className="btn btn-primary mx-3" onClick={()=>{amountWithdraw(100)}}>-</button>
            <h3>Add to cart</h3>
            <button className="btn btn-primary mx-3" onClick={()=>{amountDeposit(100)}}>+</button>
          </div>
    </div>
  )
}

export default Shop
