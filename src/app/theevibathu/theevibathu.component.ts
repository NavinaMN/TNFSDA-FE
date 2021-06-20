import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-theevibathu',
  templateUrl: './theevibathu.component.html',
  styleUrls: ['./theevibathu.component.css']
})
export class TheevibathuComponent implements OnInit {
  public WithoutHelp: Array<any> = [];
  public WithoutHelpATTR: any = {};
  public WithoutTools: Array<any> = [];
  public WithoutToolsAttr: any = {};
  public WithTools: Array<any> = [];
  public WithToolsAttr: any = {};
  public ArriveACt: Array<any> = [];
  public ArriveActAttr: any = {};
  public FireTeam: Array<any> = [];
  public FireTeamAttr: any = {};
  public DeadFireMan: Array<any> = [];
  public DeadFireManAttr: any = {};
  public InjuredFireMan: Array<any> = [];
  public InjuredFireManAttr: any = {};
  public DeadOthers: Array<any> = [];
  public DeadOthersAttr: any = {};
  public InjuredOthers: Array<any> = [];
  public InjuredOthersAttr: any = {};
  Kottam: any = 0;
  Station: any;
  FireOfficerName: any;
  ArikkaiNumber: any;
  AccidentDate: any;
  CallerName: any
  TelephoneNumber: any;
  AccidentAddress: any;
  OwnerName: any;
  Job: any;
  OwnerNameAddress: any;
  CallingTime: any;
  VehicleStartTime: any;
  VehicleReachedTime: any;
  BetweenDistance: any;
  IncidentTime: any;
  DetailAbtFire: any;
  ReasonForFire: any;
  RescueWork: any;
  LastReturnOfficer: any;
  ReturnDateTimeFromFireAcc: any;
  FireControllingTime: any;
  Type: any;
  RescuedMembers: boolean = false;
  Adipaadugal: boolean = false;
  FireStationName: any;
  ModelName: any;
  RegisterNumber: any;
  SStartedTime: any;
  SReachedTime: any;
  SReturnTime: any;
  ReachedStationTime: any;
  TravelHours: any
  WaterPumbingTime: any;
  Rank: any;
  Number: any;
  Name: any;
  Others: any;
  Sign: any;
  AllInOnePerson: boolean = true;
  Name_TK: any;
  Sex: any;
  Address: any;
  Mobile: any;
  Age: any;
  EscapedorRescued: any = [];
  AdipadugalFire:any=[];
  AdipadugalOthers:any=[];
  FireType: any;
  AreaOfFire: any;
  DestructionDetails: any;
  Accidental_possession: any;
  DestructionOfSite: any;
  AnyRisk: any;
  ValueOfProperty: any;
  DestructionForThoseWhoWithin: any;

  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router,private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }
  WithoutHelpAdd() {
    debugger
    this.WithoutHelp.push(this.WithoutHelpATTR)
    this.WithoutHelpATTR = {};
  }

  WithoutHelpDelete(index: any) {
    this.WithoutHelp.splice(index, 1);
  }
  WithoutToolsAdd() {
    debugger
    this.WithoutTools.push(this.WithoutToolsAttr)
    this.WithoutToolsAttr = {};
  }

  WithoutToolsDelete(index: any) {
    this.WithoutTools.splice(index, 1);
  }
  WithToolsAdd() {
    debugger
    this.WithTools.push(this.WithToolsAttr)
    this.WithToolsAttr = {};
  }

  WithToolsDelete(index: any) {
    this.WithTools.splice(index, 1);
  }
  ArriveActAdd() {
    debugger
    this.ArriveACt.push(this.ArriveActAttr)
    this.ArriveActAttr = {};
  }

  ArriveActDelete(index: any) {
    this.ArriveACt.splice(index, 1);
  }
  FireTeamAdd() {
    debugger
    this.FireTeam.push(this.FireTeamAttr)
    this.FireTeamAttr = {};
  }

  FireTeamDelete(index: any) {
    this.FireTeam.splice(index, 1);
  }
  DeadFireManAdd() {
    debugger
    this.DeadFireMan.push(this.DeadFireManAttr)
    this.DeadFireManAttr = {};
  }

  DeadFireManDelete(index: any) {
    this.DeadFireMan.splice(index, 1);
  }
  InjuredFireManAdd() {
    debugger
    this.InjuredFireMan.push(this.InjuredFireManAttr)
    this.InjuredFireManAttr = {};
  }

  InjuredFireManDelete(index: any) {
    this.InjuredFireMan.splice(index, 1);
  }
  DeadOthersAdd() {
    debugger
    this.DeadOthers.push(this.DeadOthersAttr)
    this.DeadOthersAttr = {};
  }

  DeadOthersDelete(index: any) {
    this.DeadOthers.splice(index, 1);
  }
  InjuredOthersAdd() {
    debugger
    this.InjuredOthers.push(this.InjuredOthersAttr)
    this.InjuredOthersAttr = {};
  }

  InjuredOthersDelete(index: any) {
    this.InjuredOthers.splice(index, 1);
  }

  Submit()
  {

    this.ngxService.start();
    this.EscapedorRescued = [];
    this.EscapedorRescued.push(
      {
        'without_help': this.WithoutHelp,
        'without_tools': this.WithoutTools,
        'with_tools': this.WithTools
      });
    this.AdipadugalFire.push(
      {
        'dead': this.DeadFireMan,
        'injured': this.InjuredFireMan
      })

    this.AdipadugalOthers.push(
      {
        'dead': this.DeadOthers,
        'injured': this.InjuredOthers
      })
    let data = {

      'kottam': this.Kottam,
      'station': this.Station,
      'fire_officer_name': this.FireOfficerName,
      'arikkai_number': this.ArikkaiNumber,
      'accident_date': this.AccidentDate,
      'caller_name': this.CallerName,
      'telephone_number': this.TelephoneNumber,
      'accident_address': this.AccidentAddress,
      'AllInOnePerson': this.AllInOnePerson == true ? '1' : '0',
      'owner_name': this.AllInOnePerson == true ? this.CallerName : this.OwnerName,
      'occupation': this.Job,
      'owner_name_address': this.AllInOnePerson == true ? this.CallerName : this.OwnerNameAddress,
      'calling_time': this.CallingTime,
      'vehicle_start_time': this.VehicleStartTime,
      'vehicle_reached_time': this.VehicleReachedTime,
      'between_distance': this.BetweenDistance + 'kms',
      'incident_time': this.IncidentTime,
      'detail_about_incident': this.DetailAbtFire,
      'reason_fortheincident': this.ReasonForFire,
      'rescue_work': this.RescueWork,
      'last_return_officer': this.LastReturnOfficer,
      'return_date_time_from_fire_acc': this.ReturnDateTimeFromFireAcc,
      'fire_controlling_time': this.FireControllingTime,
      'type': 'theevibathu',
      'escaped_or_rescued_active': this.RescuedMembers == true ? '1' : '0',
      'escaped_or_rescued': this.EscapedorRescued,
      'arrive_and_act': this.ArriveACt,
      'adipaadugal_active': this.Adipaadugal == true ? '1' : '0',
      'adipadugal_fire': this.AdipadugalFire,
      'adipadugal_others': this.AdipadugalOthers,
      'fire_officer_and_team': this.FireTeam,
      'Others': this.Others,
      'Sign': this.Sign,
      'type_of_fire': this.FireType,
      'area_of_fire': this.AreaOfFire,
      'destruction_details': this.DestructionDetails,      
      'accidental_possession': this.Accidental_possession,      
      'any_risk_at_surroundings': this.AnyRisk,    
      'destruction_of_the_site': this.DestructionOfSite,
      'value_of_property_protected_by_fire': this.ValueOfProperty,     
      'dstrctn_for_those_who_within': this.DestructionForThoseWhoWithin,
       'approval': 0,
    }
    this.Service.sendPostRequest(this.Service.URL + '/fire_call', data).subscribe(
      result => {
        this.ngxService.stop();
        let alert = result.more_info
        this.Service.ToastSuccess(alert);
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
