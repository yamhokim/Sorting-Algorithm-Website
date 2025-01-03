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

function bubbleSort(
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

  // Capture the bubble sort steps
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare
      animations.push({ type: "compare", indices: [j, j + 1] });
      if (arr[j] > arr[j + 1]) {
        // Swap
        animations.push({ type: "swap", indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // Replay each step, scaled by stepDuration
  animations.forEach((animation, i) => {
    setTimeout(() => {
      if (animation.type === "compare") {
        // Highlight these bars in green
        setActiveIndices(animation.indices);
        setSwappedIndices([]);
      } else if (animation.type === "swap") {
        // Perform the swap in state, highlight in red
        setNumArray((prevArray) => {
          const newArr = [...prevArray];
          const [indexA, indexB] = animation.indices;
          [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
          return newArr;
        });
        setSwappedIndices(animation.indices);
      }
    }, i * stepDuration);
  });

  // After all animations, clear highlights
  setTimeout(() => {
    setActiveIndices([]);
    setSwappedIndices([]);
  }, animations.length * stepDuration + stepDuration);
}

function selectionSort(
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number,
  setMinimumIndex: React.Dispatch<React.SetStateAction<number[]>>,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number[]>>
): void {
  const animations: {
    type: "currentIndex" | "swap" | "minimum" | "active";
    indices: [number, number];
  }[] = [];
  const arr = [...numarray];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    animations.push({ type: "currentIndex", indices: [i, -1] });
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
      } else if (animation.type === "currentIndex") {
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

function insertionSort(
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

function mergeSort(
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

function quickSort(
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

function heapSort(
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
