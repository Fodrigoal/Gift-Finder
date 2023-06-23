import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus, faPlusCircle, faMinusCircle, faCheck, faSearch, faGift } from '@fortawesome/free-solid-svg-icons';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path: '', component: FinderComponent },
      { path: 'results', component: ResultsComponent },
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faPlusCircle, faMinusCircle, faCheck, faSearch, faGift);
  }
}
