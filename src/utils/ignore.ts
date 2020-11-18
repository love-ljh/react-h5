/* eslint-disable no-unused-vars */
export default {}
// ts test
// typeof
const options = {
    name: 'crray'
}
type Options = typeof options

// literal type
interface Iprops {
    color: 'red' | 'bule' | 'yellow',
    code: 200 | 400 | 404
}

// Partial
type Partial<T> = { [P in keyof T]?: T[P] }

// Required
type Required<T> = { [P in keyof T]-?: T[P] }

// T extends U ? X : Y
interface Id {
    id: number
}
interface Name {
    name: string
}
declare function createLabel(id: number): Id
declare function createLabel(name: string): Name
declare function createLabel(v: string | number): Id | Name
// next
type IdName<T extends number | string> = T extends number ? Id : Name
declare function createLabel<T extends number | string>(IdName: T): T extends number ? Id : Name 

// Exclude<T, U>
type Exclude<T, U> = T extends U ? never : T
type IExclude = Exclude<1|2|3|4|5, 3|4>
// output 1 | 2 | 5

// Extract<T, U>
type Extract<T, U> = T extends U ? T : never
type IExtract = Extract<1|2|3|4|5, 3|4>
// output 3 | 4

// Pick<T, K>
type Pick<T, K extends keyof T> = { [P in K]: T[P] }
type IPick = Extract<1|2|3|4|5, 3|4>

// Record<K, T>
type Record<K extends keyof any, T> = { [P in K]: T }

// Omit<T, K>
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

// NonNullable<T>
type NonNullable<T> = T extends null | undefined ? never : T
type T = NonNullable<string | string[] | null | undefined>; 
// output string | string[]

// ReturnType<T>
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any
type T1 = ReturnType<() => string>; // string
type T2 = ReturnType<(s: string) => void>; // void