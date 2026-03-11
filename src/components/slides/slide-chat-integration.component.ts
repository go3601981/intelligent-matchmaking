import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-chat-integration',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Matchmaking Inside Conversations" subtitle="Converting Dialogue into Action">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Contextual Intelligence</h3>
            <p class="text-3xl font-light text-gray-900 leading-tight">
              Matchmaking intelligence can operate <span class="font-bold">inside the chat</span>.
            </p>
          </div>

          <p class="text-base text-gray-500 leading-relaxed">
            The system analyzes the flow of conversation to provide timely, relevant suggestions that move the relationship forward.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <mat-icon class="text-lg h-5 w-5">schedule</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-sm">Suggested Meeting Times</h4>
                <p class="text-[11px] text-gray-500">Automatically identifying gaps in both participants' schedules.</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                <mat-icon class="text-lg h-5 w-5">videocam</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-sm">Suggested Meeting Formats</h4>
                <p class="text-[11px] text-gray-500">Recommending in-person locations or instant video links.</p>
              </div>
            </div>
          </div>

          <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <p class="text-blue-900 font-medium flex items-center gap-2 text-sm">
              <mat-icon class="text-blue-600 text-lg h-5 w-5">trending_up</mat-icon>
              This converts <span class="font-bold italic">conversation</span> into <span class="font-bold italic">action</span>.
            </p>
          </div>

          <!-- Welcome Modal Concept -->
          <div class="p-4 bg-white rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full -mr-8 -mt-8"></div>
            <div class="relative z-10 space-y-2">
              <div class="flex items-center gap-2">
                <mat-icon class="text-blue-600 text-sm h-4 w-4">waving_hand</mat-icon>
                <span class="text-[9px] font-bold text-gray-900 uppercase tracking-widest">Welcome Icebreaker</span>
              </div>
              <p class="text-[10px] text-gray-600 leading-tight">
                "Welcome to the chat! Based on your shared interest in <span class="text-blue-600 font-bold">AI Strategy</span>, here are 2 icebreaker questions to get started."
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Chat UI Mockup -->
          <div class="bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden max-w-sm mx-auto">
            <div class="p-4 border-b border-gray-50 flex items-center gap-3 bg-gray-50/50">
              <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">SJ</div>
              <div>
                <p class="text-xs font-bold text-gray-900">Sarah Jenkins</p>
                <p class="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">Online</p>
              </div>
            </div>

            <div class="p-4 space-y-4 h-[300px] flex flex-col">
              <!-- Messages -->
              <div class="space-y-3 flex-1">
                <div class="flex justify-end">
                  <div class="bg-blue-600 text-white p-3 rounded-xl rounded-tr-none max-w-[80%] text-[11px]">
                    Hi Sarah! I saw your talk on Product Strategy. Would love to connect.
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="bg-gray-100 text-gray-700 p-3 rounded-xl rounded-tl-none max-w-[80%] text-[11px]">
                    Thanks! I'd love to chat more about how you're scaling your team.
                  </div>
                </div>
              </div>

              <!-- Smart Suggestion Overlay -->
              <div class="animate-bounce-subtle">
                <div class="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-4 shadow-xl text-white space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <mat-icon class="text-xs h-3 w-3">auto_awesome</mat-icon>
                      <span class="text-[8px] font-bold uppercase tracking-widest">Smart Suggestion</span>
                    </div>
                    <button class="text-white/50 hover:text-white"><mat-icon class="text-xs h-3 w-3">close</mat-icon></button>
                  </div>
                  
                  <p class="text-[10px] font-medium leading-tight">Both of you are free today at 3:00 PM. Schedule a quick meeting?</p>
                  
                  <div class="grid grid-cols-2 gap-2">
                    <button class="bg-white/20 hover:bg-white/30 py-1.5 rounded-lg text-[8px] font-bold flex items-center justify-center gap-1">
                      <mat-icon class="text-[10px] h-2.5 w-2.5">place</mat-icon> In-Person
                    </button>
                    <button class="bg-white/20 hover:bg-white/30 py-1.5 rounded-lg text-[8px] font-bold flex items-center justify-center gap-1">
                      <mat-icon class="text-[10px] h-2.5 w-2.5">videocam</mat-icon> Video Call
                    </button>
                  </div>
                </div>
              </div>

              <!-- Input Area -->
              <div class="h-10 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-3 gap-2 text-gray-300">
                <span class="text-[10px]">Type a message...</span>
                <div class="flex-1"></div>
                <mat-icon class="text-lg h-5 w-5">send</mat-icon>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    
    @keyframes bounce-subtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .animate-bounce-subtle {
      animation: bounce-subtle 3s ease-in-out infinite;
    }
  `]
})
export class SlideChatIntegrationComponent {}
