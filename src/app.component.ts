import { Component, inject, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideTitleComponent } from './components/slides/slide-title.component';
import { SlideNetworkingEngineComponent } from './components/slides/slide-networking-engine.component';
import { SlidePurposeComponent } from './components/slides/slide-purpose.component';
import { SlideRealityComponent } from './components/slides/slide-reality.component';
import { SlideTypicalMatchmakingComponent } from './components/slides/slide-typical-matchmaking.component';
import { SlideWeaknessesComponent } from './components/slides/slide-weaknesses.component';
import { SlideExpoAdvantageComponent } from './components/slides/slide-expo-advantage.component';
import { SlideIntelligenceLayerComponent } from './components/slides/slide-intelligence-layer.component';
import { SlideMatchmakingBehaviorComponent } from './components/slides/slide-matchmaking-behavior.component';
import { SlideParticipantListIntegrationComponent } from './components/slides/slide-participant-list-integration.component';
import { SlideChatIntegrationComponent } from './components/slides/slide-chat-integration.component';
import { SlideBusinessImpactComponent } from './components/slides/slide-business-impact.component';
import { SlideStrategicOpportunityComponent } from './components/slides/slide-strategic-opportunity.component';
import { SlideImplementationApproachComponent } from './components/slides/slide-implementation-approach.component';
import { SlideLongTermVisionComponent } from './components/slides/slide-long-term-vision.component';
import { SlideComparisonComponent } from './components/slides/slide-comparison.component';
import { SlideNextStepsComponent } from './components/slides/slide-next-steps.component';
import { SlideDisneyModelComponent } from './components/slides/slide-disney-model.component';
import { SlideProactiveEngagementComponent } from './components/slides/slide-proactive-engagement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideTitleComponent,
    SlideNetworkingEngineComponent,
    SlidePurposeComponent,
    SlideRealityComponent,
    SlideTypicalMatchmakingComponent,
    SlideWeaknessesComponent,
    SlideComparisonComponent,
    SlideExpoAdvantageComponent,
    SlideIntelligenceLayerComponent,
    SlideMatchmakingBehaviorComponent,
    SlideDisneyModelComponent,
    SlideProactiveEngagementComponent,
    SlideParticipantListIntegrationComponent,
    SlideChatIntegrationComponent,
    SlideBusinessImpactComponent,
    SlideStrategicOpportunityComponent,
    SlideImplementationApproachComponent,
    SlideLongTermVisionComponent,
    SlideNextStepsComponent
  ],
  template: `
    <app-logo />

    <main 
      #mainContainer 
      tabindex="0" 
      class="w-full h-screen bg-[#F8FAFC] overflow-y-auto relative pb-24 lg:pb-20 outline-none"
    >
      
      @switch (presentation.currentSlideIndex()) {
        @case (0) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-title />
          </div>
        }
        @case (1) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-networking-engine />
          </div>
        }
        @case (2) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-purpose />
          </div>
        }
        @case (3) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-reality />
          </div>
        }
        @case (4) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-typical-matchmaking />
          </div>
        }
        @case (5) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-weaknesses />
          </div>
        }
        @case (6) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-comparison />
          </div>
        }
        @case (7) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-expo-advantage />
          </div>
        }
        @case (8) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-intelligence-layer />
          </div>
        }
        @case (9) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-matchmaking-behavior />
          </div>
        }
        @case (10) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-disney-model />
          </div>
        }
        @case (11) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-proactive-engagement />
          </div>
        }
        @case (12) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-participant-list-integration />
          </div>
        }
        @case (13) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-chat-integration />
          </div>
        }
        @case (14) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-business-impact />
          </div>
        }
        @case (15) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-strategic-opportunity />
          </div>
        }
        @case (16) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-implementation-approach />
          </div>
        }
        @case (17) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-long-term-vision />
          </div>
        }
        @case (18) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-next-steps />
          </div>
        }
      }

    </main>

    <app-nav-bar />
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent implements AfterViewInit {
  presentation = inject(PresentationService);
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Focus the main container to capture keyboard events immediately
    this.mainContainer.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      this.presentation.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.presentation.prevSlide();
    }
  }
}