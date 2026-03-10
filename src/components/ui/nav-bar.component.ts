import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from '../../services/presentation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-[#E5E7EB] px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Progress Info -->
        <div class="flex flex-col gap-1 w-1/3">
          <span class="text-[11px] font-semibold text-[#6B7280] tracking-widest uppercase">
            Slide {{ presentation.currentSlideIndex() + 1 }} of {{ presentation.totalSlides }}
          </span>
          <div class="h-[4px] w-full bg-[#EEF2F7] rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-[#FACC15] to-[#F97316] transition-all duration-500 ease-out"
              [style.width.%]="presentation.progress()"
            ></div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <button 
            (click)="presentation.prevSlide()"
            [disabled]="presentation.isFirstSlide()"
            class="p-2 rounded-full hover:bg-[#F1F5F9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#3B5BDB]"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            (click)="presentation.nextSlide()"
            [disabled]="presentation.isLastSlide()"
            class="p-2 rounded-full hover:bg-[#F1F5F9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#3B5BDB]"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </div>
  `
})
export class NavBarComponent {
  presentation = inject(PresentationService);
}