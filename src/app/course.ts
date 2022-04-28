import { Department } from "./department";
import { Location } from "./location";
import { Teacher } from "./teacher";
import { Timeslot } from "./timeslot";

export class Course {
    id !: number;
    name !: string;
    department !: Department;
    location !: Location;
    teacher !: Teacher;
    timeslots !: Timeslot[];
}
