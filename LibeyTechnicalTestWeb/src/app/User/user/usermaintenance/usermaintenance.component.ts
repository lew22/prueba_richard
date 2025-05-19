import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { LibeyUserService } from "src/app/core/service/libeyuser/libeyuser.service";
import { LibeyUser } from "src/app/entities/libeyuser";

@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {
  user = {
    documentNumber:'',
    documentTypeId: 0,
    name:'',
    fathersLastName:'',
    mothersLastName:'',
    address:'',
    regionCode: '',
    provinceCode: '',
    districtCode: '',
    phone: '',
    email:'',
    password:'',
  }

  documentTypes = [
    { id: 1, name: 'Lima' },
  ];

  department = [
    { id: 1, name: 'Lima' },
  ];

  province = [
    { id: 1, name: 'Lima' },
  ];

  district = [
    { id: 1, name: 'Villa el Salvador' },
  ];

  constructor(private libeyUserService: LibeyUserService) { }
  ngOnInit(): void {}
  
  Submit(){
    // swal.fire("Oops!", 
    // `documentNumber: ${this.user.documentNumber}
    // documentTypeId: ${this.user.documentTypeId}
    // regionCode: ${this.user.regionCode}
    // `,
    //  "success");

    var userToSend = {
      documentNumber: this.user.documentNumber,
      documentTypeId: this.user.documentTypeId,
      name: this.user.name,
      fathersLastName: this.user.fathersLastName,
      mothersLastName: this.user.mothersLastName,
      address: this.user.address,
      ubigeoCode: '123',
      phone: this.user.phone,
      email: this.user.email,
      password: this.user.password,
    }
    
     this.libeyUserService.create(userToSend).subscribe(response => {
			console.log(response, "User");
		});

  }
}