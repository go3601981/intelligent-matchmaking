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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div class="space-y-4">
          <div class="p-3 bg-white rounded-xl border border-gray-100 shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h3 class="text-base font-bold text-gray-900">Standard Implementation</h3>
            </div>
            
            <div class="grid grid-cols-1 gap-2">
              @for (feature of features; track feature.text) {
                <div class="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg transition-all hover:bg-blue-50 group">
                  <div class="w-7 h-7 rounded bg-white flex items-center justify-center text-gray-400 group-hover:text-blue-600 shadow-sm shrink-0">
                    <mat-icon class="text-base h-4 w-4">{{ feature.icon }}</mat-icon>
                  </div>
                  <span class="text-gray-700 font-medium text-[13px]">{{ feature.text }}</span>
                </div>
              }
            </div>
          </div>

          <div class="flex items-start gap-2.5 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <mat-icon class="text-blue-600 shrink-0 text-base h-4 w-4">info</mat-icon>
            <p class="text-blue-900 leading-tight text-[11px]">
              Platforms like <span class="font-bold">Whova</span> and others rely heavily on static profile data to generate these automated lists.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="relative p-5 bg-white rounded-[24px] border-2 border-dashed border-gray-200">
            <div class="absolute -top-2.5 left-4 px-2 py-0.5 bg-red-100 text-red-600 text-[8px] font-bold uppercase tracking-widest rounded-full">
              The Disconnect
            </div>
            
            <div class="space-y-3">
              <p class="text-lg font-light text-gray-600 leading-tight">
                Matchmaking is often implemented as a <span class="text-gray-900 font-bold underline decoration-red-400 underline-offset-4">separate feature</span>, disconnected from real interactions.
              </p>

              <div class="pt-3 border-t border-gray-100">
                <div class="flex items-center gap-2 text-red-500 mb-1">
                  <mat-icon class="text-base h-4 w-4">block</mat-icon>
                  <span class="font-bold uppercase tracking-wider text-[8px]">The Reality</span>
                </div>
                <p class="text-sm text-gray-500 italic leading-tight">
                  "Users often ignore these recommendations because they feel like 'spam' or lack context."
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2 opacity-40 grayscale">
             <div class="h-1 bg-gray-200 rounded-full"></div>
             <div class="h-1 bg-gray-200 rounded-full"></div>
             <div class="h-1 bg-gray-200 rounded-full w-1/2"></div>
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
