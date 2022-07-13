import { Component, OnInit } from '@angular/core';
import { IpDetect } from 'src/app/models/ip-detect';
import { IpDetectService } from 'src/app/service/ip-detect.service';

@Component({
  selector: 'app-ip-detect',
  templateUrl: './ip-detect.component.html',
  styleUrls: ['./ip-detect.component.scss']
})
export class IpDetectComponent implements OnInit {

  ipDetect?: IpDetect 

  constructor(private ipDetectSevice : IpDetectService) { 

  }

  ngOnInit(): void {
 this.ipDetectSevice.GetIpDetect().subscribe((result : IpDetect) => this.ipDetect = result);

  }

}
