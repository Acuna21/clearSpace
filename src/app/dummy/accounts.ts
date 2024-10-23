import { Account } from "@models/accounts";
import { Roles } from "@utils/enums";
import { v4 as uuidv4 } from 'uuid';

export const accounts:Account[] = [
    {
        id: uuidv4(),
        email: 'citizien@example.com',
        password: 'password',
        role: Roles.citizen
    },
    {
        id: uuidv4(),
        email: 'admin@example.com',
        password: 'password',
        role: Roles.admin
    },
    {
        id: uuidv4(),
        email: 'governmental@example.com',
        password: 'password',
        role: Roles.governmental
    },
    {
        id: uuidv4(),
        email: 'operative@example.com',
        password: 'password',
        role: Roles.operative
    },
];