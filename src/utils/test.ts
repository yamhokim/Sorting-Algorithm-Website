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
    } else {
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

  console.log(`Updated original array: ${origArr}`);
  return sortedArr;
}

function mergeSort(
  origArr: number[],
  startIndex: number = 0,
  endIndex: number = origArr.length
): number[] {
  if (endIndex - startIndex <= 1) {
    // Base case: single element or empty subarray
    return origArr.slice(startIndex, endIndex);
  }

  // Find the midpoint
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  // Recursively sort left and right halves
  const left = mergeSort(origArr, startIndex, midIndex);
  const right = mergeSort(origArr, midIndex, endIndex);

  // Merge the two sorted halves and update the original array
  return merge(left, right, origArr, startIndex);
}

// Example Usage
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", originalArray);

mergeSort(originalArray);
console.log("Final sorted array:", originalArray);
