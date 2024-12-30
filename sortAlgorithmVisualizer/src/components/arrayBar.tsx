import "../index.css";

function arrayBar() {
  //create an array of random numbers
  const numarray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div className="array-bar flex items-end justify-center h-full">
      {numarray.map((heightnum, index) => (
        <div
          key={index}
          className="w-4 border border-cyan-500 bg-gray-50"
          style={{ height: `${heightnum}px` }}
        ></div>
      ))}
    </div>
  );
}

export default arrayBar;
