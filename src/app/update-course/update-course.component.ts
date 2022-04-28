import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { LocationService } from '../location.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Timeslot } from '../timeslot';
import { TimeslotService } from '../timeslot.service';
import { Location } from '../location';
import { Weekday } from '../weekday';
import { CourseTime } from '../course-time';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  weekday: any = Weekday;
  coursetime: any = CourseTime;

  id!: number;
  course: Course = new Course();
  departments!: Department[];
  teachers!: Teacher[];
  locations!: Location[];
  timeslots!: Timeslot[];
  isDataAvailable = false;
  
  constructor(private courseService: CourseService,
    private departmentService: DepartmentService,
    private locationService: LocationService,
    private teacherService: TeacherService,
    private timeslotService: TimeslotService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData().then(() => this.isDataAvailable = true);
  }

  onSubmit() {
    // console.log(this.student);
    this.updateCourse();
    
  }

  async getData() {
    this.course = await this.courseService.getCourseById(this.id);
    console.log(this.course);
    this.departments = await this.departmentService.getDepartmentList();
    this.locations = await this.locationService.getLocationList();
    this.teachers = await this.teacherService.getTeacherList();
    this.timeslots = await this.timeslotService.getTimeslotList();
  }

  async updateCourse() {
    // console.log(this.student);
    this.course = await this.courseService.updateCourse(this.course);
    this.goToCourseList();
  }

  goToCourseList() {
    this.router.navigate(["/courses"]);
  }

}
