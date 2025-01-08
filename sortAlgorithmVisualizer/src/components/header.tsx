import "../index.css";

type HeaderProp = {
  title: string;
};

function Header({ title }: HeaderProp) {
  return <div className="title font-bold text-6xl text-cyan-100">{title}</div>;
}

export default Header;
