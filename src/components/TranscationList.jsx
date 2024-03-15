
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { Transcation } from "./Transcation"

export const TranscationList=()=>{
    const {transcations}=useContext(GlobalContext)
    return(
        <>
        <h3>History</h3>
        <ul className="list" id="list">
            {transcations.map(transcation =>(<Transcation transcation={transcation}/>))}
            
        </ul>
        </>
    )
}