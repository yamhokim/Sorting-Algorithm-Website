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

  for (let i = 1; i < arr.length; i++) {
    const currElement = arr[i];
    let j = i - 1;
    animations.push({ type: "compare", indices: [i, -1] });
    while (j >= 0 && arr[j] > currElement) {
      animations.push({ type: "swap", indices: [j + 1, j] });
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currElement;
  }

  animations.forEach((animation, i) => {
    setTimeout(() => {
      if (animation.type === "compare") {
        // Highlight these bars in green
        const activeIndex = [animation.indices[0]];
        setActiveIndices(activeIndex);
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

export const insertionSortCode = {
  Python: "print('Hello World!')",
  "C++": "std::cout << 'Hello, World!' << std::endl;",
  C: "printf('Hello, World!')",
  JavaScript: "console.log('Hello, World!')",
  Java: "System.out.println('Hello, World!');",
};
