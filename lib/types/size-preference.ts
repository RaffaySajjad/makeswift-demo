export interface Preference {
  title: string
  title_substitute: string
  show_unit: boolean
}

export interface Reference {
  title: string
  value: string
  unit: string
  key: string
}

export interface ReferencePosition {
  title: string
  positions: number[]
}

export interface SizeReference {
  size: string
  references: Reference[]
}
