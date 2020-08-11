declare const u: {
    judgingPasteCompatibility(cbd: any): boolean;
    doCbFnByType(opt: any, cbFn: any): void;
    packageTextInfo(arr?: any[]): any[];
    packageImageInfo(arr?: any[]): any;
    cbGetAsStringRealFunc(s: string, o: any, opt: any, cbFn: any): void;
    getAllInfoFromPasteConent(opt: any, cbFn: any): void;
    getInfoFromItem(item: any, opt: any, cbFn: any): void;
    getStringInfo(item: any, o: any, opt: any, cbFn: any): void;
    getFileInfo(item: any, o: any, opt: any, cbFn: any): void;
};
export default u;
