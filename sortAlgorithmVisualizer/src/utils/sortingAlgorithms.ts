import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { heapSort } from "./heapSort";

export function handleSortingAlgorithm(name: string, ...args: any[]) {
  switch (name) {
    case "Bubble Sort":
      bubbleSort(args[0], args[1], args[2], args[3], args[4], args[8]);
      break;
    case "Selection Sort":
      selectionSort(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[8]
      );
      break;
    case "Insertion Sort":
      insertionSort(args[0], args[1], args[2], args[3], args[4], args[8]);
      break;
    case "Merge Sort":
      mergeSort(args[0], args[1], args[2], args[3], args[4], args[8]);
      break;
    case "Quick Sort":
      console.log("Quick Sort");
      quickSort(args[0], args[1], args[2], args[3], args[4], args[8]);
      break;
    case "Heap Sort":
      heapSort(args[0], args[1], args[2], args[3], args[4], args[7], args[8]);
      break;
    default:
      console.error(`Algorithm ${name} not found.`);
  }
}
