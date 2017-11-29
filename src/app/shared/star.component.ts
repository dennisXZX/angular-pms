import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starContainerWidth: number;
  starWidth: number = 86;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter();

  ngOnChanges(): void {
    // dynamically calculate width of the star container based on rating
    // star container is set to 'overflow: hidden' so stars beyond its width
    // would not be displayed
    this.starContainerWidth = (this.rating * this.starWidth) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(this.rating);
  }
}
