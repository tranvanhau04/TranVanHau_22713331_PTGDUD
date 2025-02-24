import { useState } from "react"
import ('./BaiTap2.css')
export default function BaiTap2(){
    const[a, setA]=useState(0)
    const[b, setB]=useState(0)
    const[result, setResult]=useState(0)

    function hanldChangeA (event){
        setA(event.target.value);
    }
    function hanldChangeB (event){
        setB(event.target.value);
    }
    function hanldClick(){
        setResult(parseInt(a)+parseInt(b));
    }
    return(
        <>
        <h1>Cong Hai So Nguyen</h1>
        <span>Nhap so nguyen thu nhat: </span>
        <input type="text" placeholder="Nhap a" value={a} onChange={hanldChangeA}/>
        <br />
        <span>Nhap so nguyen thu hai: </span>
        <input type="text" placeholder="Nhap b" value={b} onChange={hanldChangeB}/>
        <br />

        <button onClick={hanldClick}>Cong</button>
        <br />
        <span id="kq">{result}</span>

        </>
    )
}