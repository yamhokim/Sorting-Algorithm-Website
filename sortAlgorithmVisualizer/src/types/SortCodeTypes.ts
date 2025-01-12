import { ComplexityProps } from "../types/ComplexityTypes";

export interface SortCodeProps {
  Python: string;
  CPP: string;
  C: string;
  JavaScript: string;
  Java: string;
}

export interface SortPageProp {
  name: string;
  code: SortCodeProps;
  text: string;
  complexities: ComplexityProps;
}
