import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnInit() {
    this.calculateStars();
  }

  calculateStars() {
    const full = Math.floor(this.rating);
    const remainder = this.rating - full;
    const empty = 5 - full;

    this.fullStars = Array(full).fill(0);
    if (remainder >= 0.1) {
      this.halfStar = remainder >= 0.1;
      this.emptyStars = Array(empty-1).fill(0);
    }
    else {
      this.emptyStars = Array(empty).fill(0);
    }
  }
}
