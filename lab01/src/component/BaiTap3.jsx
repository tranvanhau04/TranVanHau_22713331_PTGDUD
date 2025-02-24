import { useState } from "react"
import ('./BaiTap3.css')
export default function BaiTap3(){
    const[a, setA]= useState(0)
    const[b, setB] = useState(0)
    const[result, setResult]= useState(0)
    const[operation, setOperation]= useState("")

    function hanldChangeA(e){
        setA(e.target.value)
    }
    function hanldChangeB(e){
        setB(e.target.value)
    }
    function hanldChangeOperation(e){
        setOperation(e.target.value)
    }
    function hanldClick(){
        if(operation === "cong"){
            setResult(parseInt(a)+parseInt(b))
        }else if(operation === "tru"){
            setResult(parseInt(a)-parseInt(b))
        }else if(operation === "nhan"){
            setResult(parseInt(a)*parseInt(b))
        } else if(operation === "chia"){
            setResult(parseInt(a)/parseInt(b))
        }
    }
    return( 
        <>
        <h1>Cong Tru Nhan Chia Hai So Nguyen</h1>
        <span>Nhap so thu nhat: </span>
        <input id="number1" type="text" value={a} onChange={hanldChangeA}/>
        <br />
        <span>Nhap so thu hai: </span>
        <input id="number2" type="text" value={b} onChange={hanldChangeB}/>
        <br />
        <input type="radio" name="group" value="cong"  onChange={hanldChangeOperation}/> <span>Cong</span>
        <input type="radio" name="group" value="tru"  onChange={hanldChangeOperation}/> <span>Tru</span>
        <input type="radio" name="group" value="nhan"  onChange={hanldChangeOperation}/> <span>Nhan</span>
        <input type="radio" name="group" value="chia"  onChange={hanldChangeOperation}/> <span>Chia</span>
        <br />
        <button onClick={hanldClick}>Tinh toan</button>
        <br />
        <span id="kq">{result}</span>
        </>
        
    )
}