import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student/student';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  @Output() sentData=new  EventEmitter<{reg_number:string}>()
  students:Student[] = [];
  constructor( private studentService: StudentService){
this.students=this.studentService.getStudentList();
      }
      ngOnInit(){

      }
      OnUpdate(reg_number:string){
this.sentData.emit({reg_number})
      }
  }


