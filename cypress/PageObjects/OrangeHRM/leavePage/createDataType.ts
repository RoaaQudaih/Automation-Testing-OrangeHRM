export interface Entitlements{
    "empNumber":string,    
    "entitlement":string,    
    "fromDate":string,    
    "leaveTypeId":number
     "toDate":string
    
}

export interface Leave{
    "leaveTypeId": number,
    "fromDate": string,
    "toDate": string,
    "comment": any
}