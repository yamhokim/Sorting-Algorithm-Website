function animateAlgorithm(
  animations: { type: "compare" | "swap"; indices: [number, number] }[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number
): void {
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

export function bubbleSort(
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
  animateAlgorithm(
    animations,
    setNumArray,
    setActiveIndices,
    setSwappedIndices,
    stepDuration
  );
}

export function selectionSort(
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

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: "compare", indices: [minIndex, j] });
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push({ type: "swap", indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  animateAlgorithm(
    animations,
    setNumArray,
    setActiveIndices,
    setSwappedIndices,
    stepDuration
  );
}

export function insertionSort(
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

export function mergeSort(
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

export function quickSort(
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
