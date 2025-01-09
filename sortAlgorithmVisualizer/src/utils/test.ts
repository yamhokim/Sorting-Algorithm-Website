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
      console.log(`Updated original array: ${origArr}`);
    } else {
      const value = right.shift()!;
      sortedArr.push(value);
      origArr[originalIndex++] = value; // Update the original array with the sorted value
      console.log(`Updated original array: ${origArr}`);
    }
  }

  // Handle remaining elements in `left` and `right`
  while (left.length) {
    const value = left.shift()!;
    sortedArr.push(value);
    origArr[originalIndex++] = value; // Update the original array with the sorted value
    console.log(`Updated original array: ${origArr}`);
  }

  while (right.length) {
    const value = right.shift()!;
    sortedArr.push(value);
    origArr[originalIndex++] = value; // Update the original array with the sorted value
    console.log(`Updated original array: ${origArr}`);
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
const originalArray = [7, 2, 8, 10, 5, 3, 1, 9, 4, 6];
console.log("Original array:", originalArray);

mergeSort(originalArray);
console.log("Final sorted array:", originalArray);
