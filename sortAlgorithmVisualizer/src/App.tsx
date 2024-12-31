import "./index.css";
import SideBar from "./components/sideBar";
import Home from "./pages";
import SortPage from "./pages/sortPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  
  return (
    <div className="container">
      <BrowserRouter>
        <SideBar selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bubble-sort" element={<SortPage name="Bubble Sort" />} />
          <Route path="/insertion-sort" element={<SortPage name="Insertion Sort" />} />
          <Route path="/selection-sort" element={<SortPage name="Selection Sort" />} />
          <Route path="/merge-sort" element={<SortPage name="Merge Sort" />} />
          <Route path="/quick-sort" element={<SortPage name="Quick Sort" />} />
          <Route path="/heap-sort" element={<SortPage name="Heap Sort" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
