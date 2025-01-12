import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";

const animations: {
  type: "compare" | "swap" | "max";
  indices: [number, number];
}[] = [];

function swap(
  array: number[],
  index1: number,
  index2: number,
  type: "swap" | "max"
) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  if (type === "swap") {
    animations.push({ type: "swap", indices: [index1, index2] });
  } else {
    animations.push({ type: "max", indices: [index1, index2] });
  }
}

function heapify(array: number[], index: number, length = array.length) {
  let largest = index;
  const left = index * 2 + 1;
  const right = index * 2 + 2;

  // compare element to its left and right child
  if (left < length && array[left] > array[largest]) {
    animations.push({ type: "compare", indices: [left, largest] });
    largest = left;
  }
  if (right < length && array[right] > array[largest]) {
    animations.push({ type: "compare", indices: [right, largest] });
    largest = right;
  }

  // if the parent node isn't the largest element, swap it with the largest child
  if (largest !== index) {
    swap(array, index, largest, "swap");

    // continue to heapify down the heap
    heapify(array, largest, length);
  }

  return array;
}

function heapSortAlgorithm(array: number[]) {
  // max heapify the array
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i);
  }

  // work backwards, moving max elements to the end of the array
  for (let i = array.length - 1; i > 0; i--) {
    // max element of unsorted section of array is at index 0, swap with element at last index in unsorted array
    swap(array, 0, i, "max");

    // re-heapify array, from beginning to the end of the unsorted section
    heapify(array, 0, i);
  }
}

export function heapSort(
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number,
  setMaxIndices: React.Dispatch<React.SetStateAction<number[]>>,
  timeoutRefs: ReturnType<typeof setTimeout>[]
): void {
  const arr = [...numarray];

  heapSortAlgorithm(arr);

  animations.forEach((animation, i) => {
    const timeoutId = setTimeout(() => {
      if (animation.type === "compare") {
        // Highlight these bars in green
        setActiveIndices(animation.indices);
        setSwappedIndices([]);
        setMaxIndices([]);
      } else if (animation.type === "swap") {
        // Perform the swap in state, highlight in red
        setNumArray((prevArray) => {
          const newArr = [...prevArray];
          const [indexA, indexB] = animation.indices;
          [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
          return newArr;
        });
        setActiveIndices([]);
        setMaxIndices([]);
        setSwappedIndices(animation.indices);
      } else if (animation.type === "max") {
        // Perform the swap in state, highlight in red
        setNumArray((prevArray) => {
          const newArr = [...prevArray];
          const [indexA, indexB] = animation.indices;
          [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
          return newArr;
        });
        setActiveIndices([]);
        setSwappedIndices([]);
        setMaxIndices(animation.indices);
      }
    }, i * stepDuration);
    timeoutRefs.current.push(timeoutId);
  });

  // After all animations, clear highlights
  setTimeout(() => {
    setActiveIndices([]);
    setSwappedIndices([]);
    setMaxIndices([]);
  }, animations.length * stepDuration + stepDuration);
}

export const heapSortDescription: string = `Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements.

The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.

The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.`;

export const heapSortComplexities: ComplexityProps = {
  "Average Case": "O(nlogn)",
  "Best Case": "O(nlogn)",
  "Worst Case": "O(nlogn)",
  "Space Complexity": "O(1)",
};

export const heapSortCode: SortCodeProps = {
  Python: `
  def heapify(arr, n, i):    
    largest = i 
    l = 2 * i + 1 
    r = 2 * i + 2  

    if l < n and arr[l] > arr[largest]:
        largest = l

    if r < n and arr[r] > arr[largest]:
        largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heapSort(arr):
    n = len(arr) 

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0] 
        heapify(arr, i, 0)`,
  CPP: `
void heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,
  C: `
void heapify(int arr[], int n, int i) {
    int largest = i; 
    int l = 2 * i + 1; 
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0]; 
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
  JavaScript: `
  function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
  Java: `
  static void heapify(int arr[], int n, int i) {
    int largest = i; 
    int l = 2 * i + 1; 
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

static void heapSort(int arr[]) {
    int n = arr.length;

    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0]; 
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
};
