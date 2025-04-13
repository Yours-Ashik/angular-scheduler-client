import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

userForm: FormGroup = new FormGroup ({
  title: new FormControl(""),
  startDate: new FormControl(""),
  endDate: new FormControl(""),
  startTime: new FormControl(""),
  endTime: new FormControl(""),
})

onUserSubmit () {
  const formValue = this.userForm.value
  console.log(formValue)
  this.http.post("http://localhost:5000/schedule",formValue).subscribe((res:any) => {
  if(res.result){
    console.log("Schedule Created Successfully")
    
  }
  else{
    console.log(res.message)
  }
  })
  
}

constructor(private http: HttpClient) {

}



}
