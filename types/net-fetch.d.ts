// export function myMethod(a: string): string;
// export as namespace fetch;

// export function fetcher(url: string, options: any): Promise<Object>;
// export function  get(url: string, data: any): Promise<Object>;
// export function  post(url: string, data: any): Promise<Object>

declare module 'pinyin-so' {
    export function so(targetStr: string, keyword: string): [number, number] | boolean;
  }