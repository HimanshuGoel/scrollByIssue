import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollUp(offset: number) {
    this.scroll(-offset);
  }

  scrollDown(offset: number) {
    this.scroll(offset);
  }

  private scroll(top: number = 0, left: number = 0) {
    window.scrollBy({ top, left, behavior: 'smooth' });
  }
}
