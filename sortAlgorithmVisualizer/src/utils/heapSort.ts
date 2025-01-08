import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";

export function heapSort(
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number
): void {
  const animations: {
    type: "compare" | "swap";
    indices: [number, number];
  }[] = [];
  const arr = [...numarray];
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
        arr[i], arr[largest] = arr[largest], arr[i]  # Swap
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
        let temp = arr[i]; // Swap
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
