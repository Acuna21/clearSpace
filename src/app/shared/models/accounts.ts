import { Roles } from "@utils/enums";

export interface Account{
    id: string;
    email: string;
    password: string;
    role: Roles
};

export type User = Omit<Account, 'password'>