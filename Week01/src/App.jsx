import { useState } from "react";
import ProductCard from "./component/productCard.jsx";
import Button from "./component/Button.jsx";
import Alert from "./component/Alert.jsx";
import SignIn from "./component/SignIn.jsx";
import ProductList from "./component/ProductList.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  let markMass = 78;
  let markHeight = 1.69;

  let johnMass = 92;
  let johnHeight = 1.95;

  let markBMI = markMass / markHeight ** 2;
  let johnBMI = johnMass / johnHeight ** 2;

  // let markHigherBMI = markBMI > johnBMI;
 

  if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!")
  //   console.log(`Marks weights ${markMass} kg and is ${markHeight} m tall. John weights ${johnMass} kg and is ${johnHeight}
  //         m tall.`);
  //   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
  }
  else if (johnBMI < markBMI) {
    console.log("John's BMI is higher than Mark's!")
  } else {
    console.log("Both are equal!")
  }

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
    /*<div>
      <ProductList />
    </div>*/
    <div>
      <h1>Open F12 to see solutions</h1>
    </div>
  );
}

export default App;
