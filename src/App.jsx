import { NotFound, Home } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route path="/" exact element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
