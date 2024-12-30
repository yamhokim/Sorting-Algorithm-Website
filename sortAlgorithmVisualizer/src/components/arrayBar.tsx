import "../index.css";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

type ArrayBarProps = {
  numElements?: number; // Make numElements optional
};

function arrayBar({ numElements = 20 }: ArrayBarProps) {
  //create an array of random numbers
  console.log(`numElements is: ${numElements}`);
  const numarray = shuffleArray(
    Array.from({ length: numElements }, (_, index) => index + 1)
  );

  for (let i = 0; i < numarray.length; ++i) {
    console.log(numarray[i]);
  }

  return (
    <div className="array-bar flex items-end justify-center h-full">
      {numarray.map((heightnum, index) => (
        <div
          key={index}
          className="w-4 border border-cyan-500 bg-gray-50"
          style={{ height: `${heightnum * 8}px` }}
        ></div>
      ))}
    </div>
  );
}

export default arrayBar;
