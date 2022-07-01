import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LoginSingup from "./components/pages/auth/LoginReg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginSingup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
