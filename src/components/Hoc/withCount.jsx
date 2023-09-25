import { useState } from "react";
  const withCount = (ChildrenComponent) => {
    const NewComponent = () =>{
        const [count, setCount] = useState(0)
        const handelCount = () =>{
            setCount((pre)=>pre+1)
        }
    return (
        <div>
            <ChildrenComponent {...{count, handelCount}}/>
        </div>
    )
    }

    return NewComponent
};

export default withCount;