import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';
import { StrategicInsightComponent } from '../ui/strategic-insight.component';

@Component({
  selector: 'app-slide-proactive-engagement',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent, StrategicInsightComponent],
  template: `
    <app-slide-layout title="Proactive Engagement" subtitle="The 'Spoon-Feeding' Strategy">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">The Core Insight</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Don't wait for them to network. <span class="font-bold">Encourage it.</span>
            </p>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed max-w-lg">
            Attendees often feel "networking friction." We eliminate this by proactively identifying opportunities and "spoon-feeding" recommendations.
          </p>

          <div class="space-y-3">
            <app-strategic-insight label="CEO Vision" icon="psychology" type="info">
              "We almost have to encourage it and make it really simple... it spoon feeds them a little bit."
            </app-strategic-insight>

            <div class="grid grid-cols-1 gap-2">
              @for (item of strategies; track item.title) {
                <div class="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <mat-icon class="text-base h-4 w-4">{{ item.icon }}</mat-icon>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-gray-900">{{ item.title }}</h4>
                    <p class="text-[10px] text-gray-500 leading-tight">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Mobile App Mockup with Popup -->
          <div class="bg-slate-900 rounded-[32px] p-3 shadow-2xl border-[4px] border-slate-800 max-w-[240px] mx-auto aspect-[9/18] relative overflow-hidden">
            <!-- App Content (Blurred) -->
            <div class="space-y-3 opacity-20 blur-[2px]">
              <div class="h-4 w-16 bg-white/20 rounded-full"></div>
              <div class="space-y-2">
                <div class="h-24 bg-white/10 rounded-xl"></div>
                <div class="h-16 bg-white/10 rounded-xl"></div>
                <div class="h-16 bg-white/10 rounded-xl"></div>
              </div>
            </div>

            <!-- Proactive Popup -->
            <div class="absolute inset-0 flex items-center justify-center p-3 bg-black/40 backdrop-blur-[1px]">
              <div class="bg-white rounded-2xl p-4 shadow-2xl w-full space-y-3 animate-bounce-subtle">
                <div class="flex justify-center">
                  <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <mat-icon class="text-lg">auto_awesome</mat-icon>
                  </div>
                </div>
                
                <div class="text-center space-y-1">
                  <h4 class="text-xs font-bold text-gray-900">Networking Opportunity</h4>
                  <p class="text-[9px] text-gray-500 leading-tight">
                    You have a 15min free window at 3:30p. Want to meet someone new?
                  </p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center gap-2 p-1.5 bg-blue-50 rounded-lg border border-blue-100">
                    <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-bold">SJ</div>
                    <div class="flex-1">
                      <p class="text-[9px] font-bold text-gray-900">Sarah Jenkins</p>
                      <p class="text-[7px] text-blue-600">98% Match • Product Strategy</p>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <button class="py-1.5 bg-gray-100 rounded-lg text-[9px] font-bold text-gray-500">Maybe Later</button>
                  <button class="py-1.5 bg-blue-600 rounded-lg text-[9px] font-bold text-white shadow-md">Let's Meet</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-2 -right-2 p-3 bg-emerald-500 text-white rounded-xl shadow-2xl max-w-[120px] rotate-3 hidden md:block">
            <p class="text-[10px] font-bold leading-tight">
              Reducing friction by bringing value to the user.
            </p>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    @keyframes bounce-subtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .animate-bounce-subtle {
      animation: bounce-subtle 4s ease-in-out infinite;
    }
  `]
})
export class SlideProactiveEngagementComponent {
  readonly strategies = [
    {
      title: 'Gap Identification',
      icon: 'event_busy',
      description: 'System detects free windows in the user schedule and suggests quick 15-min intros.'
    },
    {
      title: 'Login Prompts',
      icon: 'login',
      description: 'Welcoming users back with a "Daily Match" or "Next Connection" suggestion.'
    },
    {
      title: 'Contextual Nudges',
      icon: 'touch_app',
      description: 'Prompting engagement after a session or when near a high-value match.'
    }
  ];
}
