import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
function App() {
  return (
    <Routes>
      <Route path="/react-blog-app/" element={<Navigation />}>
        <Route path="/react-blog-app/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
