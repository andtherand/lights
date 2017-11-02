import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home';

export const routes: Route[] = [
  { path: '', component: AppHomeComponent, pathMatch: 'full'},
  { path: 'lazy', loadChildren: './components/+lazy/lazy.module#LazyModule' }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  declarations: [ AppComponent, AppHomeComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
