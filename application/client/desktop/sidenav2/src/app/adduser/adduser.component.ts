import { Component, OnInit } from '@angular/core';
import { AdduserService } from './adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})

export class AdduserComponent implements OnInit {
    public users = {
        name: '',
    }

    constructor (
        private adduserService: AdduserService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.adduserService.GpCreate(this.users).subscribe(data => {
            this.users.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}