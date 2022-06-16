/* eslint-disable @typescript-eslint/no-explicit-any */
// You can use every type with it

declare module '*.json' {
  const value: any[];
  export default value;
}
