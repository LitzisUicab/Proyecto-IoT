//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Http handlers
import { HttpClientModule } from '@angular/common/http';
//Forms
import { FormsModule } from '@angular/forms';
//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Main component
import { AppComponent } from './app.component';
//Custome services
import { DispServices } from './dispositivos/disp.service';
//custome components
import { LiauDispComponent } from './dispositivos/liau-disp/liau-disp.component';
import { DispDetalleComponent} from './dispositivos/lu-detalle/lu-detalle.component';
import { LiauIotComponent } from './dispositivos/liau-iot/liau-iot.component';



@NgModule({
  declarations: [
    AppComponent,
    LiauDispComponent,
    DispDetalleComponent,
    LiauIotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [DispServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
