import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

export const AddTranscation=()=>{
    const[text,setText]=useState("")
    const[amount,setAmount]=useState(0)
    const {addTranscation}=useContext(GlobalContext)
    const onSubmit=e=>{
        e.preventDefault()
        const newTranscation={
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+amount
        }
        addTranscation(newTranscation)
    }
    return(
        <>
        <h3>Add new transcation</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" placeholder="Enter-Text..." 
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount
                <br />
                (negative - expenses, positive - income)
                </label>
                <input type="number" id="amount" placeholder="Enter-Amount..." 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <button className="btn">Add Transcation</button>
        </form>
        </>
    )
}