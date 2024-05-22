import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import MoMForm from "./components/MoMForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/MoMForm" element={<MoMForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
