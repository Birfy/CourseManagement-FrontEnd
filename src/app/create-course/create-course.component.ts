import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { LocationService } from '../location.service';
import { Teacher } from '../teacher';
import { Weekday } from '../weekday';

import { TeacherService } from '../teacher.service';
import { Location } from '../location';
import { Timeslot } from '../timeslot';
import { TimeslotService } from '../timeslot.service';
import { CourseTime } from '../course-time';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  weekday: any = Weekday;
  coursetime: any = CourseTime;

  course: Course = new Course();
  departments!: Department[];
  teachers!: Teacher[];
  locations!: Location[];
  timeslots!: Timeslot[];
  isDataAvailable = false;

  constructor(private courseService: CourseService,
    private departmentService: DepartmentService,
    private teacherService: TeacherService,
    private locationService: LocationService,
    private timeslotService: TimeslotService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData().then(() => this.isDataAvailable = true);
    
  }

  onSubmit() {
    this.saveCourse();
    
  }

  async saveCourse() {
    this.course = await this.courseService.createCourse(this.course);
    this.goToCourseList();
  }

  goToCourseList() {
    this.router.navigate(["/courses"]);
  }

  async getData() {
    this.departments = await this.departmentService.getDepartmentList();
    this.locations = await this.locationService.getLocationList();
    this.teachers = await this.teacherService.getTeacherList();
    this.timeslots = await this.timeslotService.getTimeslotList();
  }
}
