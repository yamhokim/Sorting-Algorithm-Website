import "../index.css";

interface TextBoxProps {
  text: string;
}

const TextBox = ({ text }: TextBoxProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold text-white-800 self-start ml-4 mb-4">
          Description
        </h1>

        <div className="flex w-full gap-4 px-4">
          <div className="w-[70%]">
            <p className="text-left text-white-800 self-start mb-4">{text}</p>
          </div>

          <div className="w-[30%] bg-blue-600 text-white p-4 rounded-xl border-4 border-blue-800">
            <h2 className="text-xl font-bold mb-4">Runtime Complexities</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <tbody>
                <tr className="border-t border-orange-500">
                  <td className="py-2 font-bold">Best Case</td>
                  <td className="py-2 text-right">O(n)</td>
                </tr>
                <tr className="border-t border-orange-500">
                  <td className="py-2 font-bold">Average Case</td>
                  <td className="text-right">O(n²)</td>
                </tr>
                <tr className="border-t border-orange-500">
                  <td className="py-2 font-bold">Worst Case</td>
                  <td className="text-right">O(n²)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
