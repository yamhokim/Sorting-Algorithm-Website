import "../index.css";

type HeaderProp = {
  title: string;
};

function Header({ title }: HeaderProp) {
  return <div className="title text-4xl font-mono text-cyan-100">{title}</div>;
}

export default Header;
