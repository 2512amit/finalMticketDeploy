export interface IPaymentDetails{
    amount: number;
    currency: string;
    description: string;
    source: string;
    bookingId: string;
    name:string;
    email:string;
    createdAt:Date;
    userId:string;
}