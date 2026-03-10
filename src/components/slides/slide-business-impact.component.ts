import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-business-impact',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Networking That Drives Sales" subtitle="The Strategic Business Impact of Intelligent Matchmaking">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Business Value</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Better matchmaking isn't just a feature—it's a <span class="font-bold text-blue-600">revenue engine</span>.
            </p>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed">
            When participants find the right people faster, the perceived value of the event skyrockets, leading to higher retention and better ROI for all stakeholders.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            @for (impact of impacts; track impact.title) {
              <div class="p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                  <mat-icon class="text-base h-4 w-4">{{ impact.icon }}</mat-icon>
                </div>
                <h4 class="font-bold text-gray-900 mb-0.5 text-[13px]">{{ impact.title }}</h4>
                <p class="text-[10px] text-gray-500 leading-tight">{{ impact.description }}</p>
              </div>
            }
          </div>
        </div>

        <div class="relative">
          <!-- Data Visualization Mockup -->
          <div class="bg-slate-900 rounded-[24px] p-6 shadow-2xl overflow-hidden text-white scale-95 origin-top">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold">Event Performance ROI</h4>
                <div class="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-bold">
                  <mat-icon class="text-[10px] h-2.5 w-2.5">trending_up</mat-icon>
                  +42% YoY
                </div>
              </div>

              <div class="space-y-3">
                @for (stat of stats; track stat.label) {
                  <div class="space-y-1">
                    <div class="flex justify-between text-[10px]">
                      <span class="text-slate-400">{{ stat.label }}</span>
                      <span class="font-bold">{{ stat.value }}%</span>
                    </div>
                    <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-500 rounded-full transition-all duration-1000" 
                           [style.width.%]="stat.value"></div>
                    </div>
                  </div>
                }
              </div>

              <div class="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xl font-bold">3.8x</p>
                  <p class="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Lead Quality Increase</p>
                </div>
                <div>
                  <p class="text-xl font-bold">85%</p>
                  <p class="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Exhibitor Satisfaction</p>
                </div>
              </div>
            </div>

            <!-- Decorative Glow -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-2 -right-2 bg-white p-3 rounded-xl shadow-xl border border-gray-100 max-w-[180px]">
            <div class="flex items-center gap-1.5 mb-1">
              <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <mat-icon class="text-[10px] h-2.5 w-2.5">verified</mat-icon>
              </div>
              <span class="text-[9px] font-bold text-gray-900">Strategic Outcome</span>
            </div>
            <p class="text-[10px] text-gray-600 leading-tight">
              Intelligent matchmaking transforms passive attendance into <span class="text-blue-600 font-bold">active business growth</span>.
            </p>
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
export class SlideBusinessImpactComponent {
  readonly impacts = [
    { 
      title: 'Exhibitor Lead Gen', 
      icon: 'leaderboard', 
      description: 'Connecting vendors with high-intent buyers based on specific needs.' 
    },
    { 
      title: 'Attendee Connections', 
      icon: 'people_alt', 
      description: 'Fostering high-value peer-to-peer networking and knowledge sharing.' 
    },
    { 
      title: 'Partnership Opportunities', 
      icon: 'handshake', 
      description: 'Identifying strategic synergies between organizations and startups.' 
    },
    { 
      title: 'Investor Meetings', 
      icon: 'monetization_on', 
      description: 'Matching capital with innovation through data-driven introductions.' 
    }
  ];

  readonly stats = [
    { label: 'Exhibitor Lead Quality', value: 88 },
    { label: 'Attendee Networking Value', value: 92 },
    { label: 'Meeting Conversion Rate', value: 74 }
  ];
}
