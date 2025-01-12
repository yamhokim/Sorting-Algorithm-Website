import "../../index.css";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import { FaArrowsDownToLine } from "react-icons/fa6";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Bubble Sort",
    path: "/bubble-sort",
    icon: <TbIcons.TbChartBubbleFilled />,
    cName: "nav-text",
  },
  {
    title: "Selection Sort",
    path: "/selection-sort",
    icon: <FaArrowsDownToLine />,
    cName: "nav-text",
  },
  {
    title: "Insertion Sort",
    path: "/insertion-sort",
    icon: <TbIcons.TbCards />,
    cName: "nav-text",
  },
  {
    title: "Merge Sort",
    path: "/merge-sort",
    icon: <MdIcons.MdCallMerge />,
    cName: "nav-text",
  },
  {
    title: "Heap Sort",
    path: "/heap-sort",
    icon: <TbIcons.TbBinaryTreeFilled />,
    cName: "nav-text",
  },
  {
    title: "Quick Sort",
    path: "/quick-sort",
    icon: <MdIcons.MdPivotTableChart />,
    cName: "nav-text",
  },
];
