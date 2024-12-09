import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { MessageComponent } from './message/message.component';
import { DependencyService } from './dependency.service';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [
    FullLayoutComponent,
    AppComponent,
    MainComponent,
    ActionButtonComponent,
    ErrorMessageComponent,
    ErrorPageComponent,
  ],
  providers: [DependencyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
