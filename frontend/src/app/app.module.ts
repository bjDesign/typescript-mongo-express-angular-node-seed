import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/primeng';

import 'hammerjs';

// SERVICES & PIPES
import { ProteinScoreService } from './services/protein-score.service';
import { ModalDialogService } from './services/modal-dialog.service';
import { LimitDecimal } from './services/score-limit.pipe';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbNavComponent } from './breadcrumb-nav/breadcrumb-nav.component';
import { FiltersComponent } from './filters/filters.component';
import { ScoreSliderComponent } from './score-slider/score-slider.component';
import { ProteinsListComponent } from './proteins-list/proteins-list.component';
import { ProteinsComponent } from './proteins/proteins.component';
import { ProteinItemComponent } from './protein-item/protein-item.component'
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';


const routes: Routes = [
  { path: '', redirectTo: 'proteins', pathMatch: 'full' },
  { path: 'proteins', component: ProteinsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbNavComponent,
    FiltersComponent,
    ScoreSliderComponent,
    ProteinsListComponent,
    ProteinsComponent,
    ProteinItemComponent,
    ModalDialogComponent,
    LimitDecimal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SliderModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ProteinScoreService, ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
