

export interface IEmployee {
    email: string;
    surname: string;
    name: string;
    patronymic: string;
    position: string;
    day: number;
    month: string;
    year: string;
    telephone?: any;
    gender: string;
    id: number;
}

export interface IEmployees {
    employees: IEmployee[]
}