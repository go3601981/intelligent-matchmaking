import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-typical-matchmaking',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Typical Matchmaking" subtitle="How Event Platforms Implement It Today">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-1.5 h-6 bg-blue-600 rounded-full"></div>
              <h3 class="text-lg font-bold text-gray-900">Standard Implementation</h3>
            </div>
            
            <div class="grid grid-cols-1 gap-3">
              @for (feature of features; track feature.text) {
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl transition-all hover:bg-blue-50 group">
                  <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 group-hover:text-blue-600 shadow-sm shrink-0">
                    <mat-icon class="text-lg h-5 w-5">{{ feature.icon }}</mat-icon>
                  </div>
                  <span class="text-gray-700 font-medium text-sm">{{ feature.text }}</span>
                </div>
              }
            </div>
          </div>

          <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <mat-icon class="text-blue-600 shrink-0 text-lg h-5 w-5">info</mat-icon>
            <p class="text-blue-900 leading-relaxed text-sm">
              Platforms like <span class="font-bold">Whova</span> and others rely heavily on static profile data to generate these automated lists.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="relative p-6 bg-white rounded-[32px] border-2 border-dashed border-gray-200">
            <div class="absolute -top-3 left-6 px-3 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
              The Disconnect
            </div>
            
            <div class="space-y-4">
              <p class="text-xl font-light text-gray-600 leading-tight">
                Matchmaking is often implemented as a <span class="text-gray-900 font-bold underline decoration-red-400 underline-offset-4">separate feature</span>, disconnected from real interactions.
              </p>

              <div class="pt-4 border-t border-gray-100">
                <div class="flex items-center gap-3 text-red-500 mb-1.5">
                  <mat-icon class="text-lg h-5 w-5">block</mat-icon>
                  <span class="font-bold uppercase tracking-wider text-[10px]">The Reality</span>
                </div>
                <p class="text-base text-gray-500 italic leading-snug">
                  "Users often ignore these recommendations because they feel like 'spam' or lack context."
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 opacity-40 grayscale">
             <div class="h-1.5 bg-gray-200 rounded-full"></div>
             <div class="h-1.5 bg-gray-200 rounded-full"></div>
             <div class="h-1.5 bg-gray-200 rounded-full w-1/2"></div>
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
export class SlideTypicalMatchmakingComponent {
  readonly features = [
    { text: 'Profile-based matching', icon: 'account_circle' },
    { text: 'AI recommendations', icon: 'psychology' },
    { text: 'Meeting suggestions', icon: 'groups' },
    { text: 'Suggested connections', icon: 'person_add' }
  ];
}
