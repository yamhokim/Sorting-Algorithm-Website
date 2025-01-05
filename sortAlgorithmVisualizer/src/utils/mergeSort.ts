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

  const midpoint = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }
}

export const mergSortCode = {
  Python: "print('Hello World!')",
  "C++": "std::cout << 'Hello, World!' << std::endl;",
  C: "printf('Hello, World!')",
  JavaScript: "console.log('Hello, World!')",
  Java: "System.out.println('Hello, World!');",
};
