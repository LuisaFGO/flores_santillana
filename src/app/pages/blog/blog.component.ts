import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  showMoreContent = false;

  img = 'assets/imgProducts/birdP.jpg';

  toggleMoreContent() {
    this.showMoreContent = !this.showMoreContent;
  }
}
