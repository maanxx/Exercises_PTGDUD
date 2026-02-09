import { useState } from "react";
import ProductCard from "./component/productCard.jsx";
import Button from "./component/Button.jsx";
import Alert from "./component/Alert.jsx";
import SignIn from "./component/SignIn.jsx";
import ProductList from "./component/ProductList.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
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
    /*<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <button onClick={() => setShowLogin(true)}>Open Login</button>

      <SignIn
        show={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>*/
    <div>
      <ProductList />
    </div>
  );
}

export default App;
