import { useState } from "react";
import {Btap07} from "./components/Btap07"
import Bai01 from "./components/Btap01";
import Bai02 from "./components/Baitap02";
import Bai03 from "./components/Btap03";
import Bai04 from "./components/Btap04";
import Bai05 from "./components/Btap05";
import Bai06 from "./components/Btap06";
import Layout from "./Layout"


function App() {
  const [theme, setTheme] = useState("light")

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark": "light")
  }
  return (
    <>
      {/* <Bai01/> */}
      {/* <Bai02 /> */}
      {/* <Bai03 /> */}
      {/* <Bai04 /> */}
      {/* <Bai05/> */}
      {/* <Bai06/> */}
      <Btap07.Provider value={{theme,toggleTheme: handleToggle}}>
        <Layout/>
        </Btap07.Provider>
    </>
  );
}

export default App;
