import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: any[] = [];
  headers: string[] = [];
 
  editingCell: { row: number; header: string } | null = null;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      if (data.length > 0) {
        this.headers = Object.keys(data[0]);
        // this.headers.push('View/Edit');
      }
    });
  }

  
enableEdit(rowIndex: number, header: string) {
  console.log("index",rowIndex);
  this.editingCell = { row: rowIndex, header };
}

disableEdit() {
  this.editingCell = null;
}

  goToDetails(user: any) {
    this.router.navigate(['/user', user.id]);
  }

}
