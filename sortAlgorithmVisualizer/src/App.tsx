import "./index.css";
import SideBar from "./components/SideBar/sideBar";
import Home from "./pages";
import SortPage from "./pages/sortPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  bubbleSortCode,
  bubbleSortDescription,
  bubbleSortComplexities,
} from "./utils/bubbleSort";
import {
  insertionSortCode,
  insertionSortDescription,
  insertionSortComplexities,
} from "./utils/insertionSort";
import {
  selectionSortCode,
  selectionSortDescription,
  selectionSortComplexities,
} from "./utils/selectionSort";
import {
  mergeSortCode,
  mergeSortDescription,
  mergeSortComplexities,
} from "./utils/mergeSort";
import {
  quickSortCode,
  quickSortDescription,
  quickSortComplexities,
} from "./utils/quickSort";
import {
  heapSortCode,
  heapSortDescription,
  heapSortComplexities,
} from "./utils/heapSort";

function App() {
  return (
    <div className="flex flex-row">
      <BrowserRouter>
        <SideBar />
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
                complexities={bubbleSortComplexities}
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
                complexities={insertionSortComplexities}
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
                complexities={selectionSortComplexities}
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
                complexities={mergeSortComplexities}
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
                complexities={quickSortComplexities}
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
                complexities={heapSortComplexities}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
