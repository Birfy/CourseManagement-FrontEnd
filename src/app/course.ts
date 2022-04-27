import { Department } from "./department";
import { Location } from "./location";

export class Course {
    id !: number;
    name !: string;
    department !: Department;
    location !: Location;
}
