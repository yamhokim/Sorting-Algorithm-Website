import "../index.css";
import { ComplexityProps } from "../types/ComplexityTypes";
import FlipCard from "./flipCard";

interface TextBoxProps {
  text: string;
  complexities: ComplexityProps;
}

function formatText(text: string) {
  const formattedText = text.replace(/\n/g, "<br />");
  return { __html: formattedText };
}

const TextBox = ({ text, complexities }: TextBoxProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-4 px-4">
          <div className="w-[70%]">
            <h1 className="neontext text-4xl font-mono font-medium text-grey-300 text-left mb-4 ml-20">
              Description
            </h1>
            <p
              className="text-left text-2xl font-bold text-grey-300 self-start mb-4 ml-20 font-mono"
              dangerouslySetInnerHTML={formatText(text)}
            />
          </div>

          <FlipCard complexities={complexities} />
        </div>
      </div>
    </>
  );
};

export default TextBox;
