const reducer = (state=0, action)=>{
    if(action.type === "deposit"){
        return state + action.payload;
    }
    else if(action.type === "withdraw" && (state-action.payload >= 0)){
        return state - action.payload;
    }
    else {
        return state;
    }
    
}

export default reducer;