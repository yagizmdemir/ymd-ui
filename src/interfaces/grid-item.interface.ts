import { IDefault } from "./default.interface";

export interface IGridItem extends IDefault {
    col: number;
    sm?: number;
    md?: number;
    lg?: number;
}
