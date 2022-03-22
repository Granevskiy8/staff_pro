export interface IUser {
    email: string;
    password: string;
    surname: string;
    name: string;
    patronymic: string;
    day: number;
    month: string;
    year: string;
    telephone?: any;
    gender: string;
}

export interface IUsers {
    users: IUser[]
}
