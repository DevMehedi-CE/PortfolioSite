import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from } from 'rxjs';
import { Education } from '../interface/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
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

  educationList: Education[] = [
    {
      institute: 'University Of South Asia, Dhaka',
      course: 'B.Sc in CSE',
      duration: '2020-Present',
      cgpa: '3.34',
    },

    {
      institute: 'Govt Shah Sultan College, Bogura',
      course: 'HSC',
      duration: '2015-2017',
      cgpa: '4.42',
    },

    {
      institute: 'Uttaran High School, Bogura',
      course: 'SSC',
      duration: '2013-2014',
      cgpa: '4.67',
    },
  ];
}
