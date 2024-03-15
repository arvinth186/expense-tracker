import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
export const Transcation=({transcation})=>{
    const {deleteTranscations} =useContext(GlobalContext)
    const sign=transcation.amount <0 ? "-":"+"
    return(
        <li className={transcation.amount < 0 ? 'minus':'plus'}>
             {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span>
             <button className="delete-btn" onClick={()=>deleteTranscations(transcation.id)}>X</button>
        </li>
    )
}