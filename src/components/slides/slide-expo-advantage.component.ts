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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Structural Foundation</h3>
            <p class="text-3xl font-light text-gray-900 leading-tight">
              Expo Pass already has the <span class="font-bold">DNA</span> for superior matchmaking.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-3">
            @for (component of components; track component.title) {
              <div class="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <mat-icon class="text-lg h-5 w-5">{{ component.icon }}</mat-icon>
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-base font-bold text-gray-900">{{ component.title }}</h4>
                  <p class="text-gray-500 text-[11px]">{{ component.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="relative">
          <!-- Central Hub Visualization -->
          <div class="relative z-10 p-8 bg-blue-600 rounded-[40px] shadow-2xl text-white overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
            
            <div class="relative z-20 space-y-8">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-0.5 bg-white/30 rounded-full"></div>
                  <span class="text-[10px] font-bold uppercase tracking-widest opacity-80">The Result</span>
                </div>
                <h4 class="text-2xl font-bold leading-tight">
                  Integrated Networking, Not a Separate Feature.
                </h4>
              </div>

              <div class="grid grid-cols-1 gap-4">
                @for (benefit of benefits; track benefit.label) {
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <mat-icon class="text-xs h-3 w-3">check</mat-icon>
                    </div>
                    <span class="text-lg font-light tracking-wide">{{ benefit.label }}</span>
                  </div>
                }
              </div>

              <p class="pt-6 border-t border-white/20 text-blue-100 italic text-sm">
                "Matchmaking becomes a natural extension of real user interactions."
              </p>
            </div>
          </div>

          <!-- Decorative background circles -->
          <div class="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
          <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 rounded-full -z-10"></div>
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
