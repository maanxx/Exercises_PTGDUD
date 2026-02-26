import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";
import CounterApp from "./components/CounterApp";
import FormInput from "./components/FormInput";
import StatusBadge from "./components/StatusBadge";
import TodoApp from "./components/TodoApp";
function App() {
  const sinhvien = {
    ten: "Nguyen Phan Minh Man",
    mssv: "22679171",
    lop: "DHKTPM18B",
  };
  return (
    // <CounterApp />
    // <FormInput />
    // <StatusBadge status="online" />
    <TodoApp />
    /*<div>
      <Header />
      <StudentInfo ten={sinhvien.ten} mssv={sinhvien.mssv} lop={sinhvien.lop} />
      <Footer />
    </div>*/
  );
}

export default App;
