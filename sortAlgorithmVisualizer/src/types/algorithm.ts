export type SortingAlgorithm = (
  numarray: number[],
  setNumArray: React.Dispatch<React.SetStateAction<number[]>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  stepDuration: number
) => void;