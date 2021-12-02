import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsCardComponent } from './components/jobs-card/jobs-card.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobsListComponent,
    JobsCardComponent,
    JobsComponent,
    CreateJobComponent,
  ],
  imports: [CommonModule, SharedModule, HttpClientModule, ReactiveFormsModule],
  exports: [JobsListComponent, JobsCardComponent],
})
export class JobsModule {}
