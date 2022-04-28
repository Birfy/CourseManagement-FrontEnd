import { CourseTime } from "./course-time";
import { Weekday } from "./weekday";

export class Timeslot {
    id!: number;
    weekday!: Weekday;
    courseTime!: CourseTime;
}
