import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router)

  protected loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.valid);
      this.authService.login(this.loginForm.value)
      .subscribe((data:any) => {
        if(this.authService.isLoggedIn()){
          this.router.navigate(['/user']);
        }
        
        console.log(data);
      })
    }
  }
}
