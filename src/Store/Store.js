import { combineReducers, createStore } from "redux";

let login=false;
let myCart=[];


function loginUser(state=login,action){

    if(sessionStorage.getItem('token'))
    {
        
        state=true
    }
    if(action.type==='logout')
    {
        sessionStorage.removeItem('token')
        state=false;
    }
    return state;
}

function cart(state=myCart,action){
    if(action.type==='cart')
    {
        if(localStorage.getItem("Cart"))
        {
            state=JSON.parse(localStorage.getItem("Cart"))
            state=[...state,action.val]
        localStorage.setItem('Cart',JSON.stringify(state))
        }
        else{
            state=[...state,action.val]
            localStorage.setItem('Cart',JSON.stringify(state))
        }
        
    }
    return state;
}

let combine=combineReducers({loginUser,cart});

export let store=createStore(combine);