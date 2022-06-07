import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
function App() {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
