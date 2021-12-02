import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrls: ['./jobs-card.component.scss'],
})
export class JobsCardComponent implements OnInit {
  @Input()
  job?: Job;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    alert('Parábens, contratou.');
  }
}
