import { useEffect, useState } from "react";
import "../index.css"; // Import the CSS for styling

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      setFlipped(true);
    }, 500); // Flip after 1 second on load

    return () => clearTimeout(flipTimeout); // Cleanup on unmount
  }, []);

  return (
    <div className={`w-[30%] ${flipped ? "flipped" : ""}`}>
      <div className="card">
        <div className="card-back">
          <div
            className={`h-[60%] bg-blue-600 text-white p-4 rounded-xl border-4 border-blue-800`}
          >
            <h2 className="text-xl font-bold mb-4">Complexities</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <tbody>
                <tr className="border-t">
                  <td className="py-2 font-bold">Average Case</td>
                  <td className="text-right">O(n²)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-bold">Best Case</td>
                  <td className="py-2 text-right">O(n)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-bold">Worst Case</td>
                  <td className="text-right">O(n²)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
