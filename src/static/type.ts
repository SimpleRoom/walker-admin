export interface ReadonlyObjectArray {
  readonly [index: number]: object
}

export interface AreaShape {
  name: string;
  width: number;
  height: number;
  color?: string;
}