import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/shared/services/application.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {

  constructor(private applicationService: ApplicationService) {}

  collapseSidebar(): void {
      this.applicationService.sidebarCollapsed
        .next(!this.applicationService.sidebarCollapsed.value);
  }

}
