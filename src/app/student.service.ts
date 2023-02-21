import { Injectable } from '@angular/core';
import { Student } from './student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
// creating an array for all students  
private students: Student[]=[{
  name:'John Doe',
  balance:10000,
  reg_number:'123456789',
  image:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
}]
 public registration=''

  constructor() { 

  }
  getStudentList(){
    return this.students
  }
  
  addStudent(student:Student){
    this.students.push(student)
  }
  updateStudent(reg_number:string, student:Student){
    let x= this.students.findIndex( x=>x.reg_number===reg_number)

    this.students[x]=student;
  }
  getStudent(reg_number:string){
    let x= this.students.find( x=>x.reg_number===reg_number)
    return x;
  }
}
