import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VerifyCertificate from "./pages/VerifyCertificate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/verify/:certificateId"
          element={<VerifyCertificate />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;