export interface Totals{
    phones: number;
    webs: number;
    companies: number;
    emails: string;
}

export enum OrderStatus {
    PENDING = 'pending',
    FAILED = 'rejected',
    COMPLETED = 'completed',
}

export interface Order{
    id: string;
    batchSize: number;
    price: number;
    totals: Totals;
    status: OrderStatus;
}

export interface OrderUpdate extends Partial<Order>{}