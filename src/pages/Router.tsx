import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./Bar";
import CirclePacking from "./CirclePacking";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar />} />
        <Route path="/circle" element={<CirclePacking />} />
      </Routes>
    </BrowserRouter>
  );
}
