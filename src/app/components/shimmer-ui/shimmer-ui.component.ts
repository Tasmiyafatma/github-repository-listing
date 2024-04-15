import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimmer-ui',
  templateUrl: './shimmer-ui.component.html',
  styleUrls: ['./shimmer-ui.component.css']
})
export class ShimmerUiComponent implements OnInit {

  // dummy array to display repository card shimmer effect
  cardArray:number[] = [1, 2, 3, 4, 5, 6];

  // dummy array to display topics button on the repository card shimmer effect
  topicsArray:number[] = [1, 2, 3];

  constructor() { }

  // Lifecycle hook called after the component's inputs have been initialized
  ngOnInit(): void {
  }

}
