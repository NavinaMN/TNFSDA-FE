import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';

@Component({
  selector: 'app-theevibathu',
  templateUrl: './theevibathu.component.html',
  styleUrls: ['./theevibathu.component.css']
})
export class TheevibathuComponent implements OnInit {
  Kottam            :any;
  Station           :any;
  FireOfficerName   :any;
  ArikkaiNumber     :any;
  AccidentDate      :any;
  CallerName        :any
  TelephoneNumber   :any;
  AccidentAddress   :any;
  OwnerName         :any;
  Job               :any;
  OwnerNameAddress  :any;
  CallingTime       :any;
  VehicleStartTime  :any;
  VehicleReachedTime:any;
  BetweenDistance   :any;
  IncidentTime      :any;
  DetailAbtFire     :any;
  ReasonForFire     :any;
  RescueWork        :any;
  LastReturnOfficer :any;
  ReturnDateTimeFromFireAcc :any;
  FireControllingTime :any;
  Type:any;
  RescuedMembers:any;
  Adipaadugal :any;
  FireStationName :any;
  ModelName :any;
  RegisterNumber :any;
  SStartedTime :any;
  SReachedTime : any;
  SReturnTime :any;
  ReachedStationTime :any;
  TravelHours :any
  WaterPumbingTime :any;
  Rank :any;
  Number :any;
  Name :any;
  Others :any;
  Sign:any;

  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router) { }

  ngOnInit(): void {
  }

  Submit()
  {

    let data=[{
        'Kottam': this.Kottam,
        'Station':this.Station,
        'FireOfficerName': this.FireOfficerName,
        'ArikkaiNumber': this.ArikkaiNumber,
        'AccidentDate': this.AccidentDate,
        'CallerName':this.CallerName,
        'TelephoneNumber':this.TelephoneNumber,
        'AccidentAddress': this.AccidentAddress,
        'OwnerName':this.OwnerName,
        'Job':this.Job,
        'OwnerNameAddress':this.OwnerNameAddress,
        'CallingTime':this.CallingTime,
        'VehicleStartTime':this.VehicleStartTime,
        'VehicleReachedTime':this.VehicleReachedTime,
        'BetweenDistance':this.BetweenDistance,
        'IncidentTime':this.IncidentTime,
        'DetailAbtFire':this.DetailAbtFire,
        'ReasonForFire':this.ReasonForFire,
        'RescueWork':this.RescueWork,
        'LastReturnOfficer':this.LastReturnOfficer,
        'ReturnDateTimeFromFireAcc':this.ReturnDateTimeFromFireAcc,
        'FireControllingTime':this.FireControllingTime,
        'Type':this.Type,
        'RescuedMembers':this.RescuedMembers,
        'Adipaadugal':this.Adipaadugal,
        'FireStationName':this.FireStationName,
        'ModelName':this.ModelName,
        'RegisterNumber':this.RegisterNumber,
        'SStartedTime':this.SStartedTime,
        'SReachedTime':this.SReachedTime,
        'SReturnTime':this.SReturnTime,
        'ReachedStationTime':this.ReachedStationTime,
        'TravelHours':this.TravelHours,
        'WaterPumbingTime':this.WaterPumbingTime,
        'Rank':this.Rank,
        'Number':this.Number,
        'Name':this.Name,
        'Others':this.Others,
        'Sign':this.Sign

            }]
  this.Service.sendPostRequest('dummy',data).subscribe(
    res => {
      console.log(res);
    }
);
  }

}
