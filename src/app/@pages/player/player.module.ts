import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AccessLinksModule } from 'src/app/shared/components/access-links/access-links.module';
import { ToolbarWithSearchModule } from 'src/app/shared/components/toolbars/toolbar-with-search/toolbar-with-search.module';


@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MatSidenavModule,
    AccessLinksModule,
    ToolbarWithSearchModule,
  ]
})
export class PlayerModule { }
