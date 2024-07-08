import { useState } from "react"
function Light() {

const [color, setColor] = useState("")
const [isON, setIsON] = useState(false)
//update on
    const handleON = () =>{
        setColor("blue")
        setIsON(true)
        

    }

    //update off
    const handleOFF = () => {
        setColor("white")
        setIsON(false)
    
    }
    return <div className="flex justify-center mt-10">

        <div>
            <div style={{backgroundColor: color}}  className="w-[300px] h-[300px] border-2 border-black rounded-full mb-5"></div>

            <button style={{backgroundColor: isON == true ? "red" : ""}} onClick={handleON} className="bg-yellow-500 ml-20 px-3 py-3 text-3xl m-1">ON</button>
            <button style={{backgroundColor: isON == false ? "red" : ""}} onClick={handleOFF} className="bg-yellow-500 py-3 px-3 text-3xl m-1">OF</button>
        </div>
    </div>
}

export default Light