import "./index.css";
import SideBar from "./components/sideBar";
import Home from "./pages";
import SortPage from "./pages/sortPage";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [speedValue, setSpeedValue] = useState<number | number>(1);

  return (
    <div className="container">
      <BrowserRouter>
        <SideBar
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bubble-sort"
            element={<SortPage key="bubble-sort" name="Bubble Sort" />}
          />
          <Route
            path="/insertion-sort"
            element={<SortPage key="insertion-sort" name="Insertion Sort" />}
          />
          <Route
            path="/selection-sort"
            element={<SortPage key="selection-sort" name="Selection Sort" />}
          />
          <Route
            path="/merge-sort"
            element={<SortPage key="merge-sort" name="Merge Sort" />}
          />
          <Route
            path="/quick-sort"
            element={<SortPage key="quick-sort" name="Quick Sort" />}
          />
          <Route
            path="/heap-sort"
            element={<SortPage key="heap-sort" name="Heap Sort" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
