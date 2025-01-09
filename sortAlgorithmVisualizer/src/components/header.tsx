import "../index.css";

type HeaderProp = {
  title: string;
};

function Header({ title }: HeaderProp) {
  return (
    <div className="bg-[#1a2d5f] w-4/5 shadow-inner-lg rounded-t-xl mt-10 font-bold text-5xl font-mono neontext text-cyan-100 py-4">
      {title}
    </div>
  );
}

export default Header;
