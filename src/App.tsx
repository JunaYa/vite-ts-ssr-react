import { Route, Routes } from "react-router-dom";
import Main from "~/pages/home/Main";
import About from "~/pages/about/About";

export const App = () => {
  return (
    <Routes>
      <Route key="Main" path="/" element={<Main />}></Route>
      <Route key="About" path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default App;
