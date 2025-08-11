import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUsers().subscribe(data => {
      this.user = data.find(u => String(u.id) === id);
    });
  }

}
