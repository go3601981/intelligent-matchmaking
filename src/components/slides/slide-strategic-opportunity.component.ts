import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-strategic-opportunity',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Strategic Opportunity" subtitle="Defining the Future of Event Networking">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div class="space-y-4">
          <div class="space-y-1">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">The Big Idea</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              A platform that <span class="font-bold">connects</span> without <span class="font-bold text-blue-600">forcing</span>.
            </p>
          </div>

          <div class="space-y-2.5">
            @for (point of points; track point.title) {
              <div class="flex items-start gap-3 group">
                <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <mat-icon class="text-base h-4 w-4">{{ point.icon }}</mat-icon>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-[13px]">{{ point.title }}</h4>
                  <p class="text-[10px] text-gray-500 leading-tight">{{ point.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="relative scale-95 origin-center">
          <!-- Conceptual Visualization -->
          <div class="bg-white rounded-[32px] p-6 shadow-xl border border-gray-100 relative overflow-hidden">
            <div class="relative z-10 space-y-4">
              <div class="flex justify-center">
                <div class="relative">
                  <!-- Central Node -->
                  <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-100 relative z-20">
                    <mat-icon class="text-xl h-6 w-6">hub</mat-icon>
                  </div>
                  
                  <!-- Connection Lines (CSS) -->
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px]">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent rotate-45"></div>
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent -rotate-45"></div>
                    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                  </div>

                  <!-- Surrounding Nodes -->
                  <div class="absolute -top-10 -left-10 w-10 h-10 bg-white rounded-lg shadow-md border border-gray-50 flex items-center justify-center text-blue-400 animate-pulse">
                    <mat-icon class="text-base h-4 w-4">person</mat-icon>
                  </div>
                  <div class="absolute -bottom-10 -right-10 w-10 h-10 bg-white rounded-lg shadow-md border border-gray-50 flex items-center justify-center text-emerald-400 animate-pulse" style="animation-delay: 1s">
                    <mat-icon class="text-base h-4 w-4">storefront</mat-icon>
                  </div>
                  <div class="absolute -top-10 -right-10 w-10 h-10 bg-white rounded-lg shadow-md border border-gray-50 flex items-center justify-center text-purple-400 animate-pulse" style="animation-delay: 2s">
                    <mat-icon class="text-base h-4 w-4">chat</mat-icon>
                  </div>
                </div>
              </div>

              <div class="text-center space-y-2 pt-4">
                <p class="text-base font-light text-gray-900 italic">
                  "Instead of forcing meetings, the platform simply helps the <span class="font-bold text-blue-600">right people</span> find each other."
                </p>
                <div class="w-8 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
              </div>
            </div>

            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div class="grid grid-cols-8 gap-2 p-2">
                @for (i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; track i) {
                  <div class="aspect-square border border-blue-900 rounded-lg"></div>
                }
              </div>
            </div>
          </div>

          <!-- Floating Badge -->
          <div class="absolute -top-3 -left-3 bg-emerald-500 text-white px-3 py-1.5 rounded-lg shadow-lg font-bold text-[10px] tracking-wide">
            THE EXPO PASS WAY
          </div>

          <!-- Privacy Note -->
          <div class="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur p-2 rounded-lg shadow-md border border-gray-100 max-w-[120px]">
            <div class="flex items-center gap-1 mb-0.5">
              <mat-icon class="text-emerald-500 text-[8px] h-2 w-2">security</mat-icon>
              <span class="text-[7px] font-bold text-gray-900 uppercase">Privacy First</span>
            </div>
            <p class="text-[7px] text-gray-500 leading-tight">
              Opt-in only. Users maintain full control over their data and matching visibility.
            </p>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 28px; width: 28px; height: 28px; }
  `]
})
export class SlideStrategicOpportunityComponent {
  readonly points = [
    { 
      title: 'Feels Natural', 
      icon: 'auto_awesome', 
      description: 'Matches are suggested within the existing UI, not hidden in a separate silo.' 
    },
    { 
      title: 'Respects Autonomy', 
      icon: 'verified_user', 
      description: 'Attendees remain in control of their networking journey, guided by AI.' 
    },
    { 
      title: 'Integrates Seamlessly', 
      icon: 'extension', 
      description: 'Works with badges, schedules, and participant lists they already use.' 
    },
    { 
      title: 'Improves Outcomes', 
      icon: 'insights', 
      description: 'Higher quality connections lead to better business results and event ROI.' 
    }
  ];
}
