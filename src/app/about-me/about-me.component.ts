import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
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
}
