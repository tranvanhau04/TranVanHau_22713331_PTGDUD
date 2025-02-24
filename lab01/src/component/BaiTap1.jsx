import { useState } from "react"
import('./BaiTap1.css')
export default function BaiTap1 (){
    const[name, setName]= useState('')
    const[result, setResult]=useState('')
    function hanldChange(e){
            setName(e.target.value);
    }
    function hanldClick(){
        setResult(`Hello ${name}`);
    }
    return(
        <>
        <div>
        <input type="text" placeholder="Nhap ten" value={name} onChange={hanldChange}/>
        <br />
        <button onClick={hanldClick}>Click</button>
        <br />
        <span>{result}</span>
        </div>
        
        </>
    )
}