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

export interface ApplicationStatus {
    applicationNumber: string;
    degreeLength: string;
    enrollmentNo: string;
    numberOfCopies: number | string;
    date: string;
    displayDate?: string;
    semesters: number | string;
    status: string;
}
