import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { JobsModule } from './features/jobs/jobs.module';
import { LoginModule } from './features/login/login.module';
import { SignUpModule } from './features/sign-up/sign-up.module';
import { JobsService } from './features/jobs/services/jobs.service';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JobsModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    JobsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
