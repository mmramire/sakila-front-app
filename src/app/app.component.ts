import { Component, HostBinding } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('attr.app-version') appVersionAttr = environment.appVersion;
  today: Date = new Date();
  currentVersion: string = 'Version: ' + environment.appVersion;
  title = 'Sakila';

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
