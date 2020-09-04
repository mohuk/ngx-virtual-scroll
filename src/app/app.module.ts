import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxVScrollComponent } from './scroller/ngx-vscroll.component';
import { NgxVScrollService } from './scroller/ngx-vscroll.service';

@NgModule({
  declarations: [
    AppComponent,
    NgxVScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    NgxVScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
