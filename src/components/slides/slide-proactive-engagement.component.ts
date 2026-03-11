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
    <app-slide-layout title="Proactive Engagement" subtitle="The 'Spoon-Feeding' Strategy for Networking Success">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">The Core Insight</h3>
            <p class="text-3xl font-light text-gray-900 leading-tight">
              Don't wait for them to network. <span class="font-bold">Encourage it.</span>
            </p>
          </div>

          <p class="text-base text-gray-500 leading-relaxed">
            Attendees often feel "networking friction." We eliminate this by proactively identifying opportunities and "spoon-feeding" recommendations at the exact moment they are most likely to act.
          </p>

          <div class="space-y-4">
            <app-strategic-insight label="CEO Vision" icon="psychology" type="info">
              "We almost have to encourage it and make it really simple to do so... it spoon feeds them a little bit."
            </app-strategic-insight>

            <div class="grid grid-cols-1 gap-3">
              @for (item of strategies; track item.title) {
                <div class="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <mat-icon class="text-lg h-5 w-5">{{ item.icon }}</mat-icon>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900">{{ item.title }}</h4>
                    <p class="text-[11px] text-gray-500 leading-tight">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Mobile App Mockup with Popup -->
          <div class="bg-slate-900 rounded-[40px] p-4 shadow-2xl border-[6px] border-slate-800 max-w-[280px] mx-auto aspect-[9/19] relative overflow-hidden">
            <!-- App Content (Blurred) -->
            <div class="space-y-4 opacity-20 blur-[2px]">
              <div class="h-6 w-24 bg-white/20 rounded-full"></div>
              <div class="space-y-2">
                <div class="h-32 bg-white/10 rounded-2xl"></div>
                <div class="h-20 bg-white/10 rounded-2xl"></div>
                <div class="h-20 bg-white/10 rounded-2xl"></div>
              </div>
            </div>

            <!-- Proactive Popup -->
            <div class="absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
              <div class="bg-white rounded-3xl p-5 shadow-2xl w-full space-y-4 animate-bounce-subtle">
                <div class="flex justify-center">
                  <div class="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <mat-icon>auto_awesome</mat-icon>
                  </div>
                </div>
                
                <div class="text-center space-y-1">
                  <h4 class="text-sm font-bold text-gray-900">Networking Opportunity</h4>
                  <p class="text-[10px] text-gray-500 leading-tight">
                    You have a 15min free window at 3:30p. Want to meet someone new?
                  </p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center gap-3 p-2 bg-blue-50 rounded-xl border border-blue-100">
                    <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">SJ</div>
                    <div class="flex-1">
                      <p class="text-[10px] font-bold text-gray-900">Sarah Jenkins</p>
                      <p class="text-[8px] text-blue-600">98% Match • Product Strategy</p>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <button class="py-2 bg-gray-100 rounded-xl text-[10px] font-bold text-gray-500">Maybe Later</button>
                  <button class="py-2 bg-blue-600 rounded-xl text-[10px] font-bold text-white shadow-md">Let's Meet</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-4 -right-4 p-4 bg-emerald-500 text-white rounded-2xl shadow-2xl max-w-[140px] rotate-3">
            <p class="text-xs font-bold leading-tight">
              Reducing friction by bringing the value to the user.
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
