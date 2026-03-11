import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-expo-advantage',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Expo Pass Advantage" subtitle="A Foundation Built for Connection">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Structural Foundation</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Expo Pass already has the <span class="font-bold">DNA</span> for superior matchmaking.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-2">
            @for (component of components; track component.title) {
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <mat-icon class="text-base h-4 w-4">{{ component.icon }}</mat-icon>
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-sm font-bold text-gray-900">{{ component.title }}</h4>
                  <p class="text-gray-500 text-[10px] leading-tight">{{ component.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="relative">
          <!-- Central Hub Visualization -->
          <div class="relative z-10 p-6 bg-blue-600 rounded-[32px] shadow-xl text-white overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div class="relative z-20 space-y-6">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-0.5 bg-white/30 rounded-full"></div>
                  <span class="text-[9px] font-bold uppercase tracking-widest opacity-80">The Result</span>
                </div>
                <h4 class="text-xl font-bold leading-tight">
                  Integrated Networking, Not a Separate Feature.
                </h4>
              </div>

              <div class="grid grid-cols-1 gap-3">
                @for (benefit of benefits; track benefit.label) {
                  <div class="flex items-center gap-2.5">
                    <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <mat-icon class="text-[10px] h-2.5 w-2.5">check</mat-icon>
                    </div>
                    <span class="text-base font-light tracking-wide">{{ benefit.label }}</span>
                  </div>
                }
              </div>

              <p class="pt-4 border-t border-white/20 text-blue-100 italic text-[13px] leading-tight">
                "Matchmaking becomes a natural extension of real user interactions."
              </p>
            </div>
          </div>

          <!-- Decorative background circles -->
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    .mat-icon.text-sm { font-size: 18px; width: 18px; height: 18px; }
  `]
})
export class SlideExpoAdvantageComponent {
  readonly components = [
    { title: 'Participant List', icon: 'format_list_bulleted', description: 'The upcoming directory for attendee discovery.' },
    { title: 'Attendee Profiles', icon: 'badge', description: 'Rich data for meaningful context.' },
    { title: 'Attendee Chat', icon: 'forum', description: 'Real-time channel for interaction.' }
  ];

  readonly benefits = [
    { label: 'Discovery' },
    { label: 'Interaction' },
    { label: 'Networking' }
  ];
}
