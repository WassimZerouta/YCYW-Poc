import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-select',
  standalone: true,
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.css']
})
export class RoleSelectComponent {
  constructor(private router: Router) {}

  select(role: string) {
    this.router.navigate(['/chat', role]);
  }
}