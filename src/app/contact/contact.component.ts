import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
