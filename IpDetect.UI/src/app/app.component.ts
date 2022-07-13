import { Component } from '@angular/core';
import { IpDetect } from './models/ip-detect';
import { IpDetectService } from './service/ip-detect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ip.ui';


  ipDetect?: IpDetect 

  constructor(private ipDetectSevice : IpDetectService) { 

  }

  ngOnInit(): void {
 this.ipDetectSevice.GetIpDetect().subscribe((result : IpDetect) => this.ipDetect = result);

  }
}
