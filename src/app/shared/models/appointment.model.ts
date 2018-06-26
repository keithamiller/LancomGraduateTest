export class Appointment{
    description: string;
    start: Date;
    end: Date;
    notes: Array<string> = [];
    party: Array<number> = []; 
    id: number;
    providerEmail: string;
}