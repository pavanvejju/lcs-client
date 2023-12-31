import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LcsService} from './services/lcs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,                                                           
    FormsModule,                                                    
    HttpClientModule
  ],
  providers: [LcsService                                                                                                                                                                                                                                            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
