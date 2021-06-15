import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';

@Component({
  selector: 'app-station-login',
  templateUrl: './station-login.component.html',
  styleUrls: ['./station-login.component.css']
})
export class StationLoginComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router) { }

  ngOnInit(): void {
  }

  Thanipani()
  {
    this.route.navigate(['/stationlogin']);
  }

}
