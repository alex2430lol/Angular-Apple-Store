import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  naviItems: string[] = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'Vision',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support'
  ]
  showShoppingBag: boolean = false

  @ViewChild('shoppingBagDropdown') shoppingBagDropdown!: ElementRef;
  @ViewChild('naviBar') naviBar!: ElementRef;


  hideShoppingBagDropDown(event: Event): void {
    if (event.target instanceof HTMLAnchorElement) {
      this.showShoppingBag = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;

    // Check if the click is outside the dropdown or the navigation bar
    if (!this.isDescendant(this.shoppingBagDropdown?.nativeElement, clickedElement) &&
      !this.isDescendant(this.naviBar?.nativeElement, clickedElement)) {
      this.showShoppingBag = false;
    }
  }

  // Helper function to check if an element is a descendant of another element
  private isDescendant(parent: HTMLElement, child: HTMLElement): boolean {
    let node = child.parentNode;

    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }

    return false;
  }

  toggleShoppingBag() {
    this.showShoppingBag = !this.showShoppingBag
  }
}
