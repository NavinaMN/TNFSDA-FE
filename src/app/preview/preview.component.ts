import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

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
  AdipadugalFire: any=[];
  DeadFire: any=[];
  InjuredFire: any=[];
  DeadOthers: any=[];
  InjuredOthers: any=[];
  FireTeam: any=[];
  ArriveACt: any=[];
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
    this.Adipaadugal = this.Service.PreviewData.Adipaadugal;
    this.EscapedorRescued = this.Service.PreviewData.EscapedorRescued;
    this.WithoutHelp = this.EscapedorRescued[0].without_help;
    this.WithoutTools = this.EscapedorRescued[0].without_tools;
    this.WithTools = this.EscapedorRescued[0].with_tools;
    this.AdipadugalFire =  this.Service.PreviewData.AdipadugalFire;
    this.DeadFire = this.AdipadugalFire[0].dead;
    this.InjuredFire = this.AdipadugalFire[0].injured;
    this.DeadOthers = this.AdipadugalFire[0].dead;
    this.InjuredOthers = this.AdipadugalFire[0].injured;
    this.Others= this.Service.PreviewData.Others;
    this.Sign= this.Service.PreviewData.Sign;
    this.AllInOnePerson= this.Service.PreviewData.AllInOnePerson;
    this.FireTeam = this.Service.PreviewData.FireTeam;
    this.ArriveACt = this.Service.PreviewData.ArriveACt;

  }
  captureScreen(): void 
  {  
    debugger
    this.ngxService.start();
    let data = document.getElementById('downloadpdf');  //Id of the table
    if(data)
    {
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      // let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      // const doc = new jspdf.jsPDF();
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); 
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
      this.ngxService.stop();
    });  
  }
  }  

}
