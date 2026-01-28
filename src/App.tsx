import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Wishes from "./pages/Wishes";
import Note from "./pages/Note";
import About from "./pages/About";
import Finale from "./pages/Final"; // file name can be Final.tsx

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/note" element={<Note />} />
          <Route path="/about" element={<About />} />
          <Route path="/final" element={<Finale />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
