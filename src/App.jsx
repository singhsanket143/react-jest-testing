import { useState } from "react";
import Button from "./componments/Button";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
    </div>
  )
}

export default App;
