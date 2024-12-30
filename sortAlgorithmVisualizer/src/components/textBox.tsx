import "../index.css";

interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({text}) => {
  return (
    <div className="textbox">
      {text}
    </div>
  );
};

export default TextBox;