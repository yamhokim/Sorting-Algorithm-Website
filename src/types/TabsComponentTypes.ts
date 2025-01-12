import c_icon from "../assets/images/c_icon.png";
import python_icon from "../assets/images/python_icon.png";
import cpp_icon from "../assets/images/cpp_icon.png";
import javascript_icon from "../assets/images/javascript_icon.png";
import java_icon from "../assets/images/java_icon.png";

export const iconMap: {
  [key in "Python" | "CPP" | "C" | "JavaScript" | "Java"]: string;
} = {
  Python: python_icon,
  CPP: cpp_icon,
  C: c_icon,
  JavaScript: javascript_icon,
  Java: java_icon,
};

type TabItem = {
  title: keyof typeof iconMap;
  content: JSX.Element;
};

export interface TabsComponentProps {
  items: TabItem[];
}
