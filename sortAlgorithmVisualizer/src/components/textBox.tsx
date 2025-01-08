import "../index.css";
import FlipCard from "./flipCard";

interface TextBoxProps {
  text: string;
}

const TextBox = ({ text }: TextBoxProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-4 px-4 items-center">
          <div className="w-[70%]">
            <h1 className="text-4xl font-bold text-white-800 text-left mb-4">
              Description
            </h1>
            <p className="text-left text-white-800 self-start mb-4">{text}</p>
          </div>

          <FlipCard />
        </div>
      </div>
    </>
  );
};

export default TextBox;
