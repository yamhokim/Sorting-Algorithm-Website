import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";

let animations: {
  type: "compare";
  newArray: number[];
  indices: number[];
}[] = [];

function createIndicesArray(start: number, count: number): number[] {
  const indices = [];
  for (let i = 0; i < count; i++) {
    indices.push(start + i);
  }
  return indices;
}

function merge(
  left: number[],
  right: number[],
  origArr: number[],
  startIndex: number
): number[] {
  const sortedArr: number[] = [];
  let originalIndex = startIndex; // Start at the beginning of the subarray

  // Merge and sort the subarray
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const value = left.shift()!;
      sortedArr.push(value);
      origArr[originalIndex++] = value; // Update the original array with the sorted value
    } else if (left[0] > right[0]) {
      const value = right.shift()!;
      sortedArr.push(value);
      origArr[originalIndex++] = value; // Update the original array with the sorted value
    }
  }

  // Handle remaining elements in `left` and `right`
  while (left.length) {
    const value = left.shift()!;
    sortedArr.push(value);
    origArr[originalIndex++] = value; // Update the original array with the sorted value
  }

  while (right.length) {
    const value = right.shift()!;
    sortedArr.push(value);
    origArr[originalIndex++] = value; // Update the original array with the sorted value
  }

  const arrCopy = [...origArr];
  const highlightedIndices = createIndicesArray(startIndex, sortedArr.length);

  animations.push({
    type: "compare",
    newArray: arrCopy,
    indices: highlightedIndices,
  });
  return sortedArr;
}

function mergeSortAlgorithm(
  origArr: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  startIndex: number = 0,
  endIndex: number = origArr.length
): number[] {
  if (endIndex - startIndex <= 1) {
    return origArr.slice(startIndex, endIndex);
  }

  // Find the midpoint
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  // Recursively sort left and right halves
  const left = mergeSortAlgorithm(origArr, setNumArray, startIndex, midIndex);
  const right = mergeSortAlgorithm(origArr, setNumArray, midIndex, endIndex);

  // Merge the two sorted halves and update the original array
  return merge(left, right, origArr, startIndex);
}

export function mergeSort(
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number
): void {
  const arr = [...numarray];

  const sortedArr = mergeSortAlgorithm(arr, setNumArray);
  const highlightedIndices = createIndicesArray(0, sortedArr.length);
  animations.push({
    type: "compare",
    newArray: sortedArr,
    indices: highlightedIndices,
  });

  animations.forEach((animation, i) => {
    console.log(animation.indices);
    setTimeout(() => {
      setNumArray(() => {
        const newArr = [...animation.newArray];
        return newArr;
      });
      setActiveIndices(animation.indices);
    }, i * stepDuration);
  });

  // After all animations, clear highlights
  setTimeout(() => {
    setActiveIndices([]);
    setSwappedIndices([]);
  }, animations.length * stepDuration + stepDuration);

  // Clear the animations array to avoid buildup
  animations = [];
}

export const mergeSortDescription: string = `Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.

The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.`;

export const mergeSortComplexities: ComplexityProps = {
  "Average Case": "O(nlogn)",
  "Best Case": "O(nlogn)",
  "Worst Case": "O(nlogn)",
  "Space Complexity": "O(n)",
};

export const mergeSortCode: SortCodeProps = {
  Python: `
  def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    L = [0] * n1
    R = [0] * n2

    for i in range(n1):
        L[i] = arr[left + i]
    for j in range(n2):
        R[j] = arr[mid + 1 + j]

    i = 0 
    j = 0
    k = left

    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    if left < right:
        mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        merge(arr, left, mid, right)`,
  CPP: `
void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0;
    int k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}`,
  C: `
void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
`,
  JavaScript: `
  function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
`,
  Java: `
  static void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[] = new int[n1];
    int R[] = new int[n2];

    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0;

    int k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

static void sort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;

        sort(arr, l, m);
        sort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}`,
};
