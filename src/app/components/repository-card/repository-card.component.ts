import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.css']
})
export class RepositoryCardComponent implements OnInit {

  // Input property to receive repository information
  @Input() repo!: any;

  constructor() { }

  // Lifecycle hook called after the component's inputs have been initialized
  ngOnInit(): void {
  }

}
