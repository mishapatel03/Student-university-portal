export interface User {
    address?: string;
    category?: string;
    dob?: string;
    email?: string;
    enrollment?: string;
    gender?: string;
    isLoggedIn?: boolean;
    mobile?: string;
    name?: string;
    parentsEmail?: string;
    parentsMobile?: string;
    result?: Result[]
    role?: string;
    userId?: number
    userType?: string;
}

export interface Result {
    [key: string]: ResultSubject[];
}

export interface ResultSubject {
    subject?: string;
    grade?: string;
}
