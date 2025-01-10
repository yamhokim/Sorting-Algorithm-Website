import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { heapSort } from "./heapSort";

export function handleSortingAlgorithm(name: string, ...args: any[]) {
  switch (name) {
    case "Bubble Sort":
      bubbleSort(args[0], args[1], args[2], args[3], args[4]);
      break;
    case "Selection Sort":
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
      insertionSort(args[0], args[1], args[2], args[3], args[4]);
      break;
    case "Merge Sort":
      mergeSort(args[0], args[1], args[2], args[3], args[4]);
      break;
    case "Quick Sort":
      break;
    case "Heap Sort":
      heapSort(args[0], args[1], args[2], args[3], args[4], args[7]);
      break;
    default:
      console.error(`Algorithm ${name} not found.`);
  }
}
