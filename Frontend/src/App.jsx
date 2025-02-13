import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [name,setName] = useState("Vikraam");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h1>{name}</h1>
      <button onClick={()=>setName(name==="vikraam"?"viky":"vikraam")}> CLick me to see my NickName</button>
    </>
  );
}

export default App;
