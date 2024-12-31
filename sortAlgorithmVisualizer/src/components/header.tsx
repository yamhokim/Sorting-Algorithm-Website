import "../index.css";

type HeaderProp = {
  title: string;
}

function Header({title}: HeaderProp) {
  return (
    <div className="title">
      {title}
    </div>
  );
}

export default Header;
