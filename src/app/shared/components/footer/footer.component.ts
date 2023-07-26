import { Component, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @HostBinding('attr.app-version') appVersionAttr = environment.appVersion;
  today: Date = new Date();
  currentVersion: string = 'Version: ' + environment.appVersion;
}
