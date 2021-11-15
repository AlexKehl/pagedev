export type ValueOf<T> = T[keyof T]

export type nil = undefined | null

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any

export type Fn = (...args: any[]) => any
