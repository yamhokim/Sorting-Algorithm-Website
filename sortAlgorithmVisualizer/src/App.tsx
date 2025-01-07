import "./index.css";
import SideBar from "./components/sideBar";
import Home from "./pages";
import SortPage from "./pages/sortPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { bubbleSortCode, bubbleSortDescription } from "./utils/bubbleSort";
import {
  insertionSortCode,
  insertionSort,
  insertionSortDescription,
} from "./utils/insertionSort";
import {
  selectionSortCode,
  selectionSortDescription,
} from "./utils/selectionSort";
import { mergeSortCode, mergeSortDescription } from "./utils/mergeSort";
import { quickSortCode, quickSortDescription } from "./utils/quickSort";
import { heapSortCode, heapSortDescription } from "./utils/heapSort";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

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
            element={
              <SortPage
                key="bubble-sort"
                name="Bubble Sort"
                code={bubbleSortCode}
                text={bubbleSortDescription}
              />
            }
          />
          <Route
            path="/insertion-sort"
            element={
              <SortPage
                key="insertion-sort"
                name="Insertion Sort"
                code={insertionSortCode}
                text={insertionSortDescription}
              />
            }
          />
          <Route
            path="/selection-sort"
            element={
              <SortPage
                key="selection-sort"
                name="Selection Sort"
                code={selectionSortCode}
                text={selectionSortDescription}
              />
            }
          />
          <Route
            path="/merge-sort"
            element={
              <SortPage
                key="merge-sort"
                name="Merge Sort"
                code={mergeSortCode}
                text={mergeSortDescription}
              />
            }
          />
          <Route
            path="/quick-sort"
            element={
              <SortPage
                key="quick-sort"
                name="Quick Sort"
                code={quickSortCode}
                text={quickSortDescription}
              />
            }
          />
          <Route
            path="/heap-sort"
            element={
              <SortPage
                key="heap-sort"
                name="Heap Sort"
                code={heapSortCode}
                text={heapSortDescription}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
