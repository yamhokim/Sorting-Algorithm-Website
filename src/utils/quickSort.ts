import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";

/**
 * Quick Sort Visualization
 *
 * @param numArray - initial array of numbers
 * @param setNumArray - React state setter for updating the array
 * @param setActiveIndices - React state setter for highlighting compared indices
 * @param setSwappedIndices - React state setter for highlighting swapped indices
 * @param stepDuration - delay (ms) between each animation step
 */
export function quickSort(
  numArray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number,
  timeoutRefs: ReturnType<typeof setTimeout>[]
): void {
  const animations: {
    type: "compare" | "swap";
    indices: [number, number];
  }[] = [];

  const arr = [...numArray];

  function quickSortAlg(start: number, end: number): void {
    if (start >= end) return;

    const pivotIndex = end;
    const pivotValue = arr[pivotIndex];

    let boundary = start;

    for (let i = start; i < end; i++) {
      animations.push({ type: "compare", indices: [i, pivotIndex] });
      if (arr[i] < pivotValue) {
        animations.push({ type: "swap", indices: [i, boundary] });
        [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
        boundary++;
      }
    }
    animations.push({ type: "swap", indices: [boundary, pivotIndex] });
    [arr[boundary], arr[pivotIndex]] = [arr[pivotIndex], arr[boundary]];
    quickSortAlg(start, boundary - 1);
    quickSortAlg(boundary + 1, end);
  }

  quickSortAlg(0, arr.length - 1);

  animations.forEach((animation, i) => {
    const timeoutId = setTimeout(() => {
      if (animation.type === "compare") {
        setActiveIndices(animation.indices);
        setSwappedIndices([]);
      } else if (animation.type === "swap") {
        setNumArray((prevArray) => {
          const newArr = [...prevArray];
          const [indexA, indexB] = animation.indices;
          [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
          return newArr;
        });
        setActiveIndices([]);
        setSwappedIndices(animation.indices);
      }
    }, i * stepDuration);

    timeoutRefs.current.push(timeoutId);
  });

  setTimeout(() => {
    setActiveIndices([]);
    setSwappedIndices([]);
  }, animations.length * stepDuration + stepDuration);
}

export const quickSortDescription: string = `Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.

This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.

This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.`;

export const quickSortComplexities: ComplexityProps = {
  "Average Case": "O(nlogn)",
  "Best Case": "O(nlogn)",
  "Worst Case": "O(n²)",
  "Space Complexity": "O(n)",
};

export const quickSortCode: SortCodeProps = {
  Python: `
  def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            swap(arr, i, j)

    swap(arr, i + 1, high)
    return i + 1

def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)`,
  CPP: `
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);  
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
  
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
  C: `
void swap(int* a, int* b);

int partition(int arr[], int low, int high) {    
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }

    swap(&arr[i + 1], &arr[high]);  
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {        
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}`,
  JavaScript: `
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
  Java: `
  static int partition(int[] arr, int low, int high) {    
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);  
    return i + 1;
}

static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
};
