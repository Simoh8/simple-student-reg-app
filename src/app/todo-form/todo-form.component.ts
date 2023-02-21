import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student/student';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  form!: FormGroup;
constructor( private formBuilder: FormBuilder, private studentService: StudentService){

}  
ngOnInit(): void {
  this.form= this.formBuilder.group({
    name:[null,[Validators.required]],
    balance :[null,[Validators.required]],
    reg_number:[null,[Validators.required]],

    image:[null,[Validators.required]]
  });
}
SubmitData() {
 
  let student: Student={...this.form.value, balance:0}
  this.studentService.addStudent(student)

}
}
