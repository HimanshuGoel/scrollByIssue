import { ScrollService } from './scroll.service';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    spyOn(window, 'scrollBy');
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should scroll down by 10 units', fakeAsync(() => {
    service.scrollDown(10);
    expect(window.scrollBy).toHaveBeenCalledWith({
      top: 10,
      left: 0,
      behavior: 'smooth',
    });
  }));
});
