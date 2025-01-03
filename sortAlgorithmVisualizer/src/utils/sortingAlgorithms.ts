import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { heapSort } from "./heapSort";

export function handleSortingAlgorithm(name: string, ...args: any[]) {
  switch (name) {
    case "Bubble Sort":
      console.log("Bubble Sort");
      bubbleSort(args[0], args[1], args[2], args[3], args[4]);
      break;
    case "Selection Sort":
      console.log("Selection Sort");
      selectionSort(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6]
      );
      break;
    case "Insertion Sort":
      console.log("Insertion Sort");
      insertionSort(args[0], args[1], args[2], args[3], args[4]);
      break;
    case "Merge Sort":
      console.log("Merge Sort");
      break;
    case "Quick Sort":
      console.log("Quick Sort");
      break;
    case "Heap Sort":
      console.log("Heap Sort");
      break;
    default:
      console.error(`Algorithm ${name} not found.`);
  }
}
