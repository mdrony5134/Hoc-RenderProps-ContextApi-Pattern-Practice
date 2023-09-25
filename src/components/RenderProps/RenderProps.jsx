import { useState } from "react"


const RenderProps = (props) => {
    const [count, setCount] = useState(0)
        const handelCount = () =>{
            setCount((pre)=>pre+1)
        }
  return props.children(count, handelCount);
}

export default RenderProps