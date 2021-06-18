import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-station-login',
  templateUrl: './station-login.component.html',
  styleUrls: ['./station-login.component.css']
})
export class StationLoginComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.GetTableResults();
  }

  Thanipani()
  {
    this.route.navigate(['/stationlogin']);
  }
  GetTableResults() {
    debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_call/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
        let data=[];
        data = result.data.id;
        
        console.log(result);
      }
      , (error) => {
        debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }

}
