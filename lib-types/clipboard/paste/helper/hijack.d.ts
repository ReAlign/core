declare const hijack: {
    hijackPasteBase(e: any, type?: String, cbFn?: Function): boolean;
    hijackPaste4All(e: any, cbFn: any): void;
    hijackPaste4Text(e: any, cbFn: any): void;
    hijackPaste4Image(e: any, cbFn: any): void;
};
export default hijack;
