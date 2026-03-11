import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-participant-list-integration',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Inside the Participant List" subtitle="Intelligence Where Discovery Happens">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Natural Integration</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Recommendations should appear <span class="font-bold">where discovery already happens</span>.
            </p>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed max-w-lg">
            By embedding intelligence directly into the <span class="font-bold">Participant List</span>, we eliminate the friction of a separate section.
          </p>

          <div class="space-y-2">
            @for (feature of features; track feature.title) {
              <div class="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div class="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <mat-icon class="text-base h-4 w-4">{{ feature.icon }}</mat-icon>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-gray-900">{{ feature.title }}</h4>
                  <p class="text-[9px] text-gray-500 leading-tight">{{ feature.description }}</p>
                </div>
              </div>
            }
          </div>

          <div class="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
            <p class="text-amber-800 text-[9px] italic flex items-center gap-2">
              <mat-icon class="text-amber-600 text-base h-4 w-4">info</mat-icon>
              Integrated into the One-on-One Meeting Scheduling suite.
            </p>
          </div>
        </div>

        <div class="relative">
          <!-- UI Mockup Visualization -->
          <div class="bg-white rounded-[20px] shadow-2xl border border-gray-100 overflow-hidden scale-[0.9] origin-top max-w-sm mx-auto">
            <div class="p-2 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
              <div class="flex items-center gap-1">
                <div class="w-1 h-1 rounded-full bg-red-400"></div>
                <div class="w-1 h-1 rounded-full bg-amber-400"></div>
                <div class="w-1 h-1 rounded-full bg-emerald-400"></div>
              </div>
              <div class="px-2 py-0.5 bg-white rounded-full border border-gray-200 text-[6px] font-mono text-gray-400">
                expopass.app/participants
              </div>
            </div>

            <div class="p-3 space-y-3">
              <!-- Search Bar Mockup -->
              <div class="h-7 bg-gray-100 rounded-lg flex items-center px-2 gap-2 text-gray-400">
                <mat-icon class="text-[10px] h-2.5 w-2.5">search</mat-icon>
                <span class="text-[9px]">Search participants...</span>
              </div>

              <!-- Integration Highlight -->
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-[8px] font-bold text-blue-600 uppercase tracking-wider">Suggested for You</h5>
                </div>
                
                <div class="flex gap-2 overflow-hidden">
                  @for (match of matches; track match.name) {
                    <div class="w-32 shrink-0 p-2 bg-blue-600 rounded-xl text-white space-y-1 shadow-lg shadow-blue-200">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-[8px]">
                          {{ match.initials }}
                        </div>
                        <div class="overflow-hidden">
                          <p class="text-[8px] font-bold truncate">{{ match.name }}</p>
                          <p class="text-[6px] opacity-70 truncate">{{ match.role }}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-0.5 bg-white/10 rounded-full w-fit">
                        <mat-icon class="text-[6px] h-2 w-2">star</mat-icon>
                        <span class="text-[6px] font-bold">{{ match.score }}% Match</span>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Regular List Mockup -->
              <div class="space-y-2 opacity-30">
                @for (i of [1,2]; track i) {
                  <div class="flex items-center gap-2 p-1.5 border border-gray-100 rounded-lg">
                    <div class="w-6 h-6 rounded-full bg-gray-100"></div>
                    <div class="space-y-1 flex-1">
                      <div class="h-1.5 bg-gray-100 rounded w-1/3"></div>
                      <div class="h-1 bg-gray-50 rounded w-1/4"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Annotation -->
          <div class="absolute -bottom-1 -right-1 p-2.5 bg-emerald-500 text-white rounded-xl shadow-xl max-w-[120px] rotate-3 hidden md:block">
            <p class="text-[9px] font-bold leading-tight">
              Integrated directly into the natural experience.
            </p>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 20px; width: 20px; height: 20px; }
  `]
})
export class SlideParticipantListIntegrationComponent {
  readonly features = [
    { 
      title: 'Suggested Connections', 
      icon: 'auto_awesome', 
      description: 'AI-driven highlights at the top of the participant list.' 
    },
    { 
      title: 'Top Matches', 
      icon: 'trending_up', 
      description: 'Priority sorting based on profile compatibility.' 
    },
    { 
      title: 'Recommended Exhibitors', 
      icon: 'storefront', 
      description: 'Cross-discovery between people and products.' 
    }
  ];

  readonly matches = [
    { name: 'Sarah Jenkins', initials: 'SJ', role: 'Product Lead', score: 98 },
    { name: 'Michael Chen', initials: 'MC', role: 'CTO, TechCorp', score: 94 }
  ];
}
