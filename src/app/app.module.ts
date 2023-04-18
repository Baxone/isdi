//libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskComponent } from './components/task/task.component';
import { FiltersComponent } from './components/filters/filters.component';
import { AlertsComponent } from './components/alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TasklistComponent,
    TaskComponent,
    FiltersComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
