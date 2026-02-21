import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";
import CounterApp from "./components/CounterApp";
import FormInput from "./components/FormInput";
function App() {
  const sinhvien = {
    ten: "Nguyen Phan Minh Man",
    mssv: "22679171",
    lop: "DHKTPM18B",
  };
  return (
    // <CounterApp />
    <FormInput />
    /*<div>
      <Header />
      <StudentInfo ten={sinhvien.ten} mssv={sinhvien.mssv} lop={sinhvien.lop} />
      <Footer />
    </div>*/
  );
}

export default App;
