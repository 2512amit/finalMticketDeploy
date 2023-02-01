export interface IvehicleBooking {
  busNumber: string;
  busName: string;
  sourceStation: string;
  destinationStation: string;
  class: string;
  date: Date;
  status: string;
  fare: string;
  arrivalTime: Date;
  depatureTime: Date;
}
