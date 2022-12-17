import { Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import About from "./pages/about/About";
import { ContextWrapper } from "./context/Context";

export const App = () => {
  return (
    <ContextWrapper>
      <Routes>
        <Route key="Main" path="/" element={<Main />}></Route>
        <Route key="About" path="/about" element={<About />}></Route>
      </Routes>
    </ContextWrapper>
  );
};

export default App;
