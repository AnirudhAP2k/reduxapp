
export const amountDeposit = (amount) => {
    return (dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const amountWithdraw = (amount) => {
    return (dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}