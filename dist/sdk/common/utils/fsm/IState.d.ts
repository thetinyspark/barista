export default interface IState {
    id: string;
    data: any;
    actions: Array<{
        name: string;
        target: string;
    }>;
    startTime?: number;
    duration?: number;
    cancelable?: boolean;
}
