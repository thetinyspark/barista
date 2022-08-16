
export default interface IState{
    id:string,
    data:any,
    actions:Array<{name:string, target:string}>;
    startTime?:number;
    lockDuration?:number;
    duration?:number; 
    onCompleteAction?:string|null;
}