import { Component } from '@angular/core';
import { ApplicationService } from './shared/services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarCollapsed: boolean;

  constructor(private applicationService: ApplicationService) {
      this.sidebarCollapsed = this.applicationService.sidebarCollapsed.value;
      this.applicationService.sidebarCollapsed.asObservable()
        .subscribe(state => this.sidebarCollapsed = state);
  }
  
}
