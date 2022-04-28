import { Course } from "./course";
import { Grade } from "./grade";
import { Student } from "./student";

export class CourseStudent {
    id!: number;
    courseStatus!: string;
    course!: Course;
    student!: Student;
    courseGrade!: Grade;

}
