import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ShareComponent } from './components/share/share.component';
import { CopyClipboardComponent } from './components/copy-clipboard/copy-clipboard.component';
import { TimeToDiscoverComponent } from './pages/time-to-discover/time-to-discover.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    HomeComponent,
    CardComponent,
    ShareComponent,
    CopyClipboardComponent,
    TimeToDiscoverComponent,
    FlipCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
