import { IClaim } from "./claim";

export interface User {
    id: string; // Primary key
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    date_joined: string;
    last_login: string | null;
}

export interface ICustomClaim extends IClaim {
    user: User
}