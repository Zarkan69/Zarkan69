import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [
    './accueil.component.css',
    './accueil_structure.component.css'
  ]
})
export class AccueilComponent implements AfterViewInit {
  @ViewChild('nav_list', {static: true}) nav_list!: ElementRef;
  @ViewChild('first_element', {static: true}) first_element!: ElementRef;
  @ViewChild('animation', {static: true}) animation!: ElementRef;

  eActiveWidth : number = 0;
  eActiveLeft : number = 0;

  constructor(private rnd: Renderer2) { }

  ngAfterViewInit(): void {
    this.eActiveWidth = this.first_element.nativeElement.children[0].children[0].offsetWidth;
    this.eActiveLeft = this.first_element.nativeElement.children[0].children[0].offsetLeft;

    this.rnd.setStyle(this.animation.nativeElement, 'width', `${this.eActiveWidth}px`);
    this.rnd.setStyle(this.animation.nativeElement, 'left', `${this.eActiveLeft}px`);

    this.nav_list.nativeElement.childNodes.forEach((element: HTMLElement) => {
      let p = element.children[0].children[0] as HTMLElement;
      p.addEventListener('mouseover', () => {
        this.rnd.setStyle(this.animation.nativeElement, 'width', `${p.offsetWidth}px`);
        this.rnd.setStyle(this.animation.nativeElement, 'left', `${p.offsetLeft}px`);
      });

      p.addEventListener('mouseleave', () => {
        this.rnd.setStyle(this.animation.nativeElement, 'width', `${this.eActiveWidth}px`);
        this.rnd.setStyle(this.animation.nativeElement, 'left', `${this.eActiveLeft}px`);
      });

      p.addEventListener('click', () => {
        this.rnd.setStyle(this.animation.nativeElement, 'width', `${p.offsetWidth}px`);
        this.rnd.setStyle(this.animation.nativeElement, 'left', `${p.offsetLeft}px`);

        this.eActiveWidth = p.offsetWidth;
        this.eActiveLeft = p.offsetLeft;
      })
    });
  }

}
