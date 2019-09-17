export interface ReadonlyObjectArray {
  readonly [index: number]: object
}

export interface AreaShape {
  name: string
  width: number
  height: number
  count: number
  id?: string
  color?: string
}
