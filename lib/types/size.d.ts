export interface Cell {
  value: string
  colspan: number
  rowspan: number
  group?: number
  header?: boolean
}
