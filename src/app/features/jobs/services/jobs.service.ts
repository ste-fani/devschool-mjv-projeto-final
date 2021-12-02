import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../models/job.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  mockJobs: Array<Job> = [];

  private readonly BASE_URL = `${environment.BASE_URL}jobs`;

  constructor(private http: HttpClient) {}

  getAllJobs() {
    return this.http.get<Job[]>(this.BASE_URL);
  }

  createJob(job: any) {
    return this.http.post(this.BASE_URL, job).pipe(take(1));
  }
}
