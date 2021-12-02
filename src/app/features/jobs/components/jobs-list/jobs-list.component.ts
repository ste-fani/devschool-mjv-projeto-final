import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {
  title = 'Serviços Disponíveis';

  mockJobs$!: Observable<Job[]>;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.mockJobs$ = this.jobsService.getAllJobs();
  }
}
