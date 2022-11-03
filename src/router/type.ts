export interface RouterOptions {
  path: string
  label?: string
  icon?: string
  component: any
  redirect?: string
  children?: RouterOptions[]
}
