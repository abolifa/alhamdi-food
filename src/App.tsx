import { Route, Routes } from "react-router-dom";
import HomeLayout from "./screens/Layout";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
