export class Appointment{
  [x: string]: any;
    description: string;
    start: Date;
    end: Date;
    notes: Array<string> = [];
    party: Array<number> = []; 
    id: number;
    providerEmail: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}