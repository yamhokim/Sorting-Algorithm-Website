import { SortCodeProps } from "../types/SortCodeTypes";

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

export const selectionSortCode: SortCodeProps = {
  Python: "print('Hello World!')",
  "C++": "std::cout << 'Hello, World!' << std::endl;",
  C: "printf('Hello, World!')",
  JavaScript: "console.log('Hello, World!')",
  Java: "System.out.println('Hello, World!');",
};
