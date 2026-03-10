import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-reality',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Networking Reality" subtitle="Common Attendee Behavior">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">What Attendees Do</h3>
            <div class="grid grid-cols-1 gap-3">
              @for (behavior of behaviors; track behavior.text) {
                <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <mat-icon class="text-lg h-5 w-5">{{ behavior.icon }}</mat-icon>
                  </div>
                  <span class="text-gray-700 font-medium text-sm">{{ behavior.text }}</span>
                </div>
              }
            </div>
          </div>

          <div class="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p class="text-base text-amber-900 font-light leading-relaxed">
              But very few attendees <span class="font-bold italic">systematically identify</span> the most valuable people to meet.
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="p-6 md:p-8 bg-[#1F2937] rounded-[32px] shadow-2xl relative overflow-hidden">
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
            <div class="relative z-10">
              <h4 class="text-red-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">The Cost of Inefficiency</h4>
              <p class="text-xl text-white font-light leading-snug mb-6">
                This creates a <span class="text-red-400 font-bold">missed opportunity</span> for:
              </p>
              
              <div class="grid grid-cols-2 gap-3">
                @for (opp of opportunities; track opp.text) {
                  <div class="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                    <mat-icon class="text-red-400 text-lg h-5 w-5">{{ opp.icon }}</mat-icon>
                    <span class="text-gray-200 font-medium text-xs">{{ opp.text }}</span>
                  </div>
                }
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
export class SlideRealityComponent {
  readonly behaviors = [
    { text: 'Browse participant lists', icon: 'list_alt' },
    { text: 'Attend sessions', icon: 'event_seat' },
    { text: 'Visit exhibitors', icon: 'storefront' },
    { text: 'Chat with people they already know', icon: 'forum' }
  ];

  readonly opportunities = [
    { text: 'Sales', icon: 'trending_up' },
    { text: 'Partnerships', icon: 'handshake' },
    { text: 'Investment', icon: 'payments' },
    { text: 'Recruiting', icon: 'person_search' }
  ];
}
