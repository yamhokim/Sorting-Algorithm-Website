import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="button-container">
            <button>Generate New Array</button>
            <button>Bubble Sort</button>
            <button>Selection Sort</button>
            <button>Insertion Sort</button>
            <button>Quick Sort</button>
            <button>Merge Sort</button>
          </div>
        </div>
        <div className="main-content">
          <div className="title"></div>
          <div className="array-container">
            <div className="array-bar"></div>
          </div>
          <div className="textbox"></div>
          <div className="sliders"></div>
        </div>
      </div>
    </>
  );
}

export default App;
