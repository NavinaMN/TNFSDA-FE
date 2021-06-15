import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
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
  RescuedMembers:boolean = false;
  Adipaadugal :boolean=false;
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
  AllInOnePerson:boolean = true;
  EscapedorRescued: any=[];
  WithoutHelp: any=[];
  WithoutTools: any=[];
  WithTools: any=[];
  constructor(public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void 
  {
    debugger
    this.Kottam = this.Service.PreviewData.Kottam;
    this.Station = this.Service.PreviewData.Station;
    this.FireOfficerName = this.Service.PreviewData.FireOfficerName; 
    this.ArikkaiNumber = this.Service.PreviewData.ArikkaiNumber;
    this.AccidentDate = this.Service.PreviewData.AccidentDate;
    this.CallerName = this.Service.PreviewData.CallerName;
    this.TelephoneNumber = this.Service.PreviewData.TelephoneNumber;
    this.AccidentAddress = this.Service.PreviewData.AccidentAddress;
    this.OwnerName = this.Service.PreviewData.OwnerName;
    this.Job = this.Service.PreviewData.Job;
    this.OwnerNameAddress = this.Service.PreviewData.OwnerNameAddress;
    this.CallingTime = this.Service.PreviewData.CallingTime;      
    this.VehicleStartTime = this.Service.PreviewData.VehicleStartTime;  
    this.VehicleReachedTime = this.Service.PreviewData.VehicleReachedTime;
    this.BetweenDistance = this.Service.PreviewData.BetweenDistance;
    this.IncidentTime = this.Service.PreviewData.IncidentTime;
    this.DetailAbtFire = this.Service.PreviewData.DetailAbtFire;
    this.ReasonForFire = this.Service.PreviewData.ReasonForFire;
    this.RescueWork = this.Service.PreviewData.RescueWork;
    this.LastReturnOfficer = this.Service.PreviewData.LastReturnOfficer;
    this.ReturnDateTimeFromFireAcc = this.Service.PreviewData.ReturnDateTimeFromFireAcc;
    this.FireControllingTime = this.Service.PreviewData.FireControllingTime;
    this.Type = this.Service.PreviewData.Type;
    this.RescuedMembers = this.Service.PreviewData.RescuedMembers;
    this.EscapedorRescued = this.Service.PreviewData.EscapedorRescued;
    this.WithoutHelp = this.EscapedorRescued[0].without_help;
    this.WithoutTools = this.EscapedorRescued[0].without_tools;
    this.WithTools = this.EscapedorRescued[0].with_tools;
    this.Adipaadugal =  this.Service.PreviewData.Adipaadugal;
    // this.FireStationName =  this.Service.PreviewData.FireStationName;
    // this.ModelName = this.Service.PreviewData.ModelName;
    // this.RegisterNumber = this.Service.PreviewData.RegisterNumber;
    // this.SStartedTime = this.Service.PreviewData.SStartedTime;
    // this.SReachedTime = this.Service.PreviewData.SReachedTime; 
    // this.SReturnTime = this.Service.PreviewData.SReturnTime;
    // this.ReachedStationTime = this.Service.PreviewData.ReachedStationTime;
    // this.TravelHours = this.Service.PreviewData.TravelHours;
    // this.WaterPumbingTime= this.Service.PreviewData.WaterPumbingTime;
    // this.Rank = this.Service.PreviewData.Rank;
    // this.Number = this.Service.PreviewData.Number;
    // this.Name = this.Service.PreviewData.Name;
    this.Others= this.Service.PreviewData.Others;
    this.Sign= this.Service.PreviewData.Sign;
    this.AllInOnePerson= this.Service.PreviewData.AllInOnePerson;
  }


}
