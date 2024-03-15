import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';


const initialState={
    transcations:[
        { id:1,text:'Flower',amount:-20},
        { id:2,text:'Salary',amount:300},
        { id:3,text:'Books',amount:-10},
        { id:4,text:'House',amount:150}
    ]
}

//Context creation

export const GlobalContext=createContext(initialState)

//Provider component 
// it should be used when we need to allow all other components to have an access over the global state

export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState)

    function deleteTranscations(id){
        dispatch({
            type:'DELETE_TRANSCATION',
            payload:id
        });
    }

    function addTranscation(transcation){
        dispatch({
            type:'ADD_TRANSCATION',
            payload:transcation
        })
    }

    return(<GlobalContext.Provider value={{transcations:state.transcations,deleteTranscations,addTranscation}}>
        {children}
    </GlobalContext.Provider>)
}

