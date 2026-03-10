import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private _currentSlideIndex = signal(0);
  
  readonly totalSlides = 15;
  
  readonly currentSlideIndex = this._currentSlideIndex.asReadonly();
  
  readonly isFirstSlide = computed(() => this._currentSlideIndex() === 0);
  readonly isLastSlide = computed(() => this._currentSlideIndex() === this.totalSlides - 1);
  readonly progress = computed(() => ((this._currentSlideIndex() + 1) / this.totalSlides) * 100);

  nextSlide() {
    if (!this.isLastSlide()) {
      this._currentSlideIndex.update(i => i + 1);
    }
  }

  prevSlide() {
    if (!this.isFirstSlide()) {
      this._currentSlideIndex.update(i => i - 1);
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalSlides) {
      this._currentSlideIndex.set(index);
    }
  }
}