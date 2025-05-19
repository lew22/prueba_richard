import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { LibeyUserService } from "src/app/core/service/libeyuser/libeyuser.service";
import { LibeyUser } from "src/app/entities/libeyuser";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  searchTerm: string = '';
  users: LibeyUser[] = [];

  filteredUsers(): LibeyUser[] {
    if (!this.searchTerm) return this.users;
    const term = this.searchTerm.toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.documentNumber.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
      // Agrega más campos si deseas filtrar por otros
    );
  }

  constructor(private libeyUserService: LibeyUserService) { }
  ngOnInit(): void {
    this.libeyUserService.getList().subscribe(response => {
			console.log(response, "UserList");
      this.users = response;
		});
  }

}