import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  authService = inject(AuthService);
  router = inject(Router);

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  navigateToQuiz(quizName: string) {
    this.router.navigate(['/quiz', quizName]);
  }
}
