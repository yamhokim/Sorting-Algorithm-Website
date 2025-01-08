import { useEffect, useState } from "react";
import { ComplexityProps } from "../types/ComplexityTypes";
import "../index.css";

interface FlipCardProps {
  complexities: ComplexityProps;
}

const FlipCard = ({ complexities }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      setFlipped(true);
    }, 500);

    return () => clearTimeout(flipTimeout);
  }, []);

  return (
    <div className={`w-[30%] ${flipped ? "flipped" : ""}`}>
      <div className="card">
        <div className="card-back">
          <div className="flipbox text-white p-4 rounded-xl">
            <h2 className="neontext text-2xl font-bold mb-1">Complexity</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <tbody>
                {Object.entries(complexities).map(([key, value]) => (
                  <tr className="border-t" key={key}>
                    <td className="py-2 font-bold">{key}</td>
                    <td className="py-2 text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
