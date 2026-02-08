import { useState } from "react";
import ProductCard from "./component/productCard.jsx";
import Button from "./component/Button.jsx";
import Alert from "./component/Alert.jsx";
import SignIn from "./component/SignIn.jsx";
function App() {
  const [show, setShow] = useState(false);
  return (
    /*
    <div style={{ padding: "40px" }}>
      <ProductCard />
    </div>
    */

    /*<div style={{ padding: "40px" }}>
      <Button type={"primary"}>Add to cart</Button>
      <br />
      <Button type={"danger"}>Delete</Button>
      <br />
      <Button type={"success"}>Confirm</Button>
    </div>
    */

    /*<div>
      <Alert/>
    </div>*/
    <div>
      <button onClick={() => setShow(true)}>Open Login</button>

      <SignIn show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default App;
