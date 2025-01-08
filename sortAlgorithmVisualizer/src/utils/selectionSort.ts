import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";

export function selectionSort(
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number,
  setMinimumIndex: React.Dispatch<React.SetStateAction<number[]>>,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number[]>>
): void {
  const animations: {
    type: "current" | "swap" | "minimum" | "active";
    indices: [number, number];
  }[] = [];
  const arr = [...numarray];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    animations.push({ type: "current", indices: [i, -1] });
    animations.push({ type: "minimum", indices: [minIndex, -1] });

    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: "active", indices: [j, -1] });
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        animations.push({ type: "minimum", indices: [minIndex, -1] });
      }
    }

    if (minIndex !== i) {
      animations.push({ type: "swap", indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Replay each step, scaled by stepDuration
  animations.forEach((animation, i) => {
    setTimeout(() => {
      if (animation.type === "active") {
        // Highlight these bars in green
        const activeIndex = [animation.indices[0]];
        setActiveIndices(activeIndex);
        setSwappedIndices([]);
      } else if (animation.type === "current") {
        const currIndex = [animation.indices[0]];
        setCurrentIndex(currIndex);
        setSwappedIndices([]);
      } else if (animation.type === "minimum") {
        const minIndex = [animation.indices[0]];
        setMinimumIndex(minIndex);
        setSwappedIndices([]);
      } else if (animation.type === "swap") {
        // Perform the swap in state, highlight in red
        setNumArray((prevArray) => {
          const newArr = [...prevArray];
          const [indexA, indexB] = animation.indices;
          [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
          return newArr;
        });
        setActiveIndices([]);
        setCurrentIndex([]);
        setMinimumIndex([]);
        setSwappedIndices(animation.indices);
      }
    }, i * stepDuration);
  });

  // After all animations, clear highlights
  setTimeout(() => {
    setActiveIndices([]);
    setSwappedIndices([]);
    setCurrentIndex([]);
    setMinimumIndex([]);
  }, animations.length * stepDuration + stepDuration);
}

export const selectionSortDescription: string = `
Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.

It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.

This algorithm has been upgraded and enhanced in several variants such as Heap Sort.
`;

export const selectionSortComplexities: ComplexityProps = {
  "Average Case": "O(n²)",
  "Best Case": "O(n²)",
  "Worst Case": "O(n²)",
  "Space Complexity": "O(1)",
};

export const selectionSortCode: SortCodeProps = {
  Python: `
  def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
  `,
  CPP: `

void selectionSort(vector<int> &arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; ++i) {
        int min_idx = i;

        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j; 
            }
        }

        swap(arr[i], arr[min_idx]);
    }
}`,
  C: `
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {              
                min_idx = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}`,
  JavaScript: `
  function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {            
                min_idx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}`,
  Java: `
  static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;           
    }
}`,
};
