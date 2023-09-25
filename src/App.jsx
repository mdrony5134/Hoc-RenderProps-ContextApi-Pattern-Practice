import Count from "./components/Count"
import HoverCount from "./components/HoverCount"
import RenderProps from "./components/RenderProps/RenderProps"
function App() {
   
  return (
    <div>
      {/* <Count/> */}
      {/* <HoverCount/> */}
      <RenderProps>
        {(count, handelCount)=>(
            <Count {...{count, handelCount}}/>
        )}
      </RenderProps>

      <RenderProps>
        {(count, handelCount)=>(
            <HoverCount {...{count, handelCount}}/>
        )}
      </RenderProps>
      
    </div>
  )
}

export default App
