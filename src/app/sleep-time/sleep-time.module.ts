import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'app/shared/shared.module';
import { SleepTimeChartComponent } from 'app/sleep-time/sleep-time-chart/sleep-time-chart.component';
import { SleepTimeComponent } from 'app/sleep-time/sleep-time.component';
import { SleepTimeFormComponent } from 'app/sleep-time/sleep-time-form/sleep-time-form.component';
import { SleepTimeService } from 'app/sleep-time/shared/sleep-time.service';
import { SleepTimeTableComponent } from 'app/sleep-time/sleep-time-table/sleep-time-table.component';
import { SleepTimeRoutingModule } from 'app/sleep-time/sleep-time-routing.module';
import { SleepTimeStatisticsComponent } from 'app/sleep-time/sleep-time-statistics/sleep-time-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    SleepTimeRoutingModule
  ],
  providers: [SleepTimeService],
  declarations: [
    SleepTimeComponent,
    SleepTimeChartComponent,
    SleepTimeFormComponent,
    SleepTimeTableComponent,
    SleepTimeStatisticsComponent
  ]
})
export class SleepTimeModule { }
