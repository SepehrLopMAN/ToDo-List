import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { FiltrationComponent } from './components/filtration/filtration.component';
import { TaskAdderComponent } from './components/task-adder/task-adder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Filter } from './services/filter-pipes/filtration.pipe';
import { Sort } from './services/filter-pipes/sort-items.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    FiltrationComponent,
    TaskAdderComponent,
    Filter,
    Sort,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
