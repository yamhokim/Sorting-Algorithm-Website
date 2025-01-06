import "../index.css";

interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox = ({ text }) => {
  return <div className="textbox">{text}</div>;
};

export default TextBox;
