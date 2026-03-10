import { Component } from '@angular/core';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-title',
  standalone: true,
  imports: [SlideLayoutComponent],
  template: `
    <app-slide-layout title="Expo Pass Intelligent Matchmaking" subtitle="Strategic Product Proposal">
      <div class="max-w-4xl mb-12">
        <p class="text-2xl md:text-3xl text-[#1F2937] font-bold leading-tight mb-6">
          Turning Event Networking into Sales Opportunities
        </p>
        <p class="text-lg md:text-xl text-[#4B5563] font-light leading-relaxed max-w-3xl">
          A recommendation system layered on top of attendee discovery, chat, and meeting coordination.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-200">
        <div class="space-y-4">
          <h4 class="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">The Objective</h4>
          <p class="text-lg text-[#374151] leading-relaxed">
            To propose how Expo Pass can implement intelligent matchmaking that improves networking outcomes while remaining fully attendee-driven.
          </p>
        </div>

        <div class="space-y-4">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Status</h4>
          <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p class="text-lg text-[#374151] leading-relaxed italic">
              "Evolving from a logistics tool into a strategic networking engine."
            </p>
          </div>
        </div>
      </div>

      <div class="mt-16 flex items-center justify-between text-sm text-[#9CA3AF]">
        <div>
          <p class="font-bold text-[#374151] mb-1 uppercase tracking-wider">Expo Pass Product Team</p>
          <p>March 10, 2026</p>
        </div>
      </div>
    </app-slide-layout>
  `
})
export class SlideTitleComponent {}
