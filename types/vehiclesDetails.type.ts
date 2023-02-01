export interface IVehicleDetails{
    vehicleID:string;
    vehicleClassType:string;
    vehicleType:string;
    vehicleNumber:string;
    station: ISourceStation[];
    seatDetails:ISeatDetails[];
    dayOnWhichItRuns:[object];
    TotalAvailableSeat:string;
    vehicleName:string;
    routeStartDate:Date;
    routeEndDate:Date;
    operatorName:string;
    amenities:string[];
}

export interface ICityName{
    stationName:string;
    stationId:number
}

export interface ISourceStation{
    sourceName:string,
    // destinationName?:string,
    stationId:number,
    sourceDepartureTime:string[],
    sourceArrivalTime:string[],
    sourceDistance:number,
    sourceDuration:number,
    BoardingPoint:IPickUpPoint[]
    destinationDepartureTime:string[],
    destinationArrivalTime:string[],
    destinationDistance:number,
    destinationDuration:number, 
}

export interface ISeatDetails{
    seatNo:string,
    seatFare:number,
    status:boolean,
    bookedGender:string,
}

export interface IPickUpPoint{
   pickUpTime:string,
   pickUpPoint:string
}





