import { Department } from "./department";

export class Teacher {
    id !: number;
    firstName !: string;
    lastName !: string;
    email !: string;
    department !: Department;
}
