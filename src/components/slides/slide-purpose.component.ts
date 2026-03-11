import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-purpose',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Why Matchmaking Matters in Events" subtitle="The Networking Dilemma">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-[9px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1.5">
              <mat-icon class="text-xs h-3.5 w-3.5">warning</mat-icon>
              The Core Problem
            </h3>
            <p class="text-lg text-[#4B5563] leading-tight font-light">
              Attendees rarely know who they should meet. Networking in large events is often <span class="text-gray-900 font-medium italic">random and inefficient</span>.
            </p>
          </div>

          <div class="space-y-2">
            <div class="grid grid-cols-1 gap-2">
              @for (item of problems; track item.text) {
                <div class="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div class="w-7 h-7 rounded bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                    <mat-icon class="text-base h-4 w-4">{{ item.icon }}</mat-icon>
                  </div>
                  <div>
                    <p class="text-gray-700 font-bold leading-tight mb-0.5 text-[13px]">{{ item.text }}</p>
                    <p class="text-[10px] text-gray-500 leading-tight">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="p-5 md:p-6 bg-[#1F2937] rounded-[24px] shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div class="relative z-10">
              <h4 class="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">The Solution</h4>
              <p class="text-lg md:text-xl text-white font-light leading-snug mb-4">
                Matchmaking helps attendees discover <span class="text-blue-400 font-bold">high-value connections</span> faster.
              </p>
              
              <div class="p-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                <p class="text-sm text-gray-300 leading-relaxed italic">
                  "Matchmaking reduces networking friction by highlighting relevant people."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlidePurposeComponent {
  readonly problems = [
    { 
      text: 'Discovery Paralysis', 
      icon: 'search_off',
      description: 'With thousands of participants, finding the right person is like finding a needle in a haystack.' 
    },
    { 
      text: 'Missed Opportunities', 
      icon: 'person_remove',
      description: 'High-value connections often pass each other in the hallway without ever knowing it.' 
    },
    { 
      text: 'Random Networking', 
      icon: 'shuffle',
      description: 'Relying on luck leads to poor ROI for attendees and exhibitors alike.' 
    }
  ];
}
