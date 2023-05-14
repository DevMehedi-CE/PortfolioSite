import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from } from 'rxjs';
import { Skill } from '../interface/education';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  constructor(private BreakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.BreakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.WebLandscape,
    ]).subscribe({
      next: (result: any) => {
        for (let breakpoint of Object.keys(result.breakpoints)) {
          if (result.breakpoints[breakpoint]) {
            if (breakpoint === Breakpoints.HandsetPortrait) {
              this.pcMode = false;
            }
            if (breakpoint === Breakpoints.WebLandscape) {
              this.pcMode = true;
            }
          }
        }
      },
    });
  }

  skills: Skill[] = [
    {
      name: 'Figma',
      level: 'Expert',
      rating: 90,
    },

    {
      name: 'HTML',
      level: 'Expert',
      rating: 85,
    },

    {
      name: 'CSS',
      level: 'Expert',
      rating: 80,
    },

    {
      name: 'JavaScript',
      level: 'intermediate',
      rating: 60,
    },

    {
      name: 'TypeScript',
      level: 'Beginner',
      rating: 20,
    },

    {
      name: 'Angular',
      level: 'Beginner',
      rating: 20,
    },
  ];
}
