import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { HomeComponent } from './pages/home/home.component';
import { ShareComponent } from './components/share/share.component';
import { CopyClipboardComponent } from './components/copy-clipboard/copy-clipboard.component';
import { TimeToDiscoverComponent } from './pages/time-to-discover/time-to-discover.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { TxtV1Component } from './components/txt-v1/txt-v1.component';
import { ShareIconComponent } from './components/share-icon/share-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    HomeComponent,
    ShareComponent,
    CopyClipboardComponent,
    TimeToDiscoverComponent,
    FlipCardComponent,
    TxtV1Component,
    ShareIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
