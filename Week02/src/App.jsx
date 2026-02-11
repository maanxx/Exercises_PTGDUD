import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";

function App() {
  const sinhvien = {
    ten: "Nguyen Phan Minh Man",
    mssv: "22679171",
    lop: "DHKTPM18B",
  };
  return (
    <div>
      <h1>Hello, World!</h1>
      <Header />
      <StudentInfo ten={sinhvien.ten} mssv={sinhvien.mssv} lop={sinhvien.lop} />
      <Footer />
    </div>
  );
}

export default App;
