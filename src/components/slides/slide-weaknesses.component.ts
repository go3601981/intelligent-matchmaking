import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';
import { StrategicInsightComponent } from '../ui/strategic-insight.component';

@Component({
  selector: 'app-slide-weaknesses',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent, StrategicInsightComponent],
  template: `
    <app-slide-layout title="Weaknesses in Current Systems" subtitle="The Limitations of Traditional Matchmaking">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div class="space-y-4">
          <h3 class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Key Limitations (e.g., Whova)</h3>
          
          <div class="space-y-2">
            @for (weakness of weaknesses; track weakness.text) {
              <div class="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm group hover:border-red-100 transition-colors">
                <div class="w-7 h-7 rounded bg-red-50 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <mat-icon class="text-base h-4 w-4">{{ weakness.icon }}</mat-icon>
                </div>
                <div class="space-y-0.5">
                  <p class="text-gray-900 font-bold text-[13px]">{{ weakness.text }}</p>
                  <p class="text-[10px] text-gray-500 leading-tight">{{ weakness.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="lg:sticky lg:top-4">
          <div class="p-5 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[24px] shadow-xl relative overflow-hidden">
            <!-- Decorative background pattern -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div class="relative z-10 space-y-4">
              <app-strategic-insight label="Key Insight" icon="lightbulb" type="dark" class="scale-95 origin-left">
                Matchmaking often exists <span class="text-red-400 font-bold italic">outside</span> the natural networking flow.
              </app-strategic-insight>

              <div class="space-y-2 pt-4 border-t border-white/10">
                <p class="text-gray-400 leading-tight text-[11px]">
                  When matchmaking is a separate "tab" or "feature," it requires active effort from the user to engage with it, rather than being integrated into their existing event experience.
                </p>
              </div>
            </div>
          </div>

          <!-- Visual representation of "Outside the flow" -->
          <div class="mt-4 flex justify-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <mat-icon class="text-base h-4 w-4">person</mat-icon>
            </div>
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <mat-icon class="text-base h-4 w-4">chat</mat-icon>
            </div>
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <mat-icon class="text-base h-4 w-4">event</mat-icon>
            </div>
            <div class="w-2 flex items-center justify-center text-gray-300">
              <mat-icon class="text-[10px] h-3 w-3">arrow_forward</mat-icon>
            </div>
            <div class="w-8 h-8 rounded-full bg-red-100 border-2 border-red-400 border-dashed flex items-center justify-center text-red-600">
              <mat-icon class="text-base h-4 w-4">psychology</mat-icon>
            </div>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    .mat-icon.text-sm { font-size: 16px; width: 16px; height: 16px; }
  `]
})
export class SlideWeaknessesComponent {
  readonly weaknesses = [
    { 
      text: 'Generic Recommendations', 
      icon: 'auto_awesome_motion',
      description: 'Suggestions often feel like random lists based on broad keywords.'
    },
    { 
      text: 'Disconnected from Conversations', 
      icon: 'link_off',
      description: 'Matches don\'t account for who you\'ve already met or talked to.'
    },
    { 
      text: 'Rigid Meeting Logistics', 
      icon: 'settings_suggest',
      description: 'Organizers often force specific times/places, removing spontaneity.'
    },
    { 
      text: 'Premature Pressure', 
      icon: 'speed',
      description: 'Systems push for meetings before users have even explored the event.'
    },
    { 
      text: 'Lack of Trust', 
      icon: 'gpp_maybe',
      description: 'Users ignore automated suggestions that feel like "algorithmic noise."'
    }
  ];
}
