import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-menu-item',
  styleUrl: 'wc-menu-item.scss',
  shadow: true
})
export class WcNavbar {
  @Prop() href: string;
  @Prop() target: string;

  render() {
    return (
      <li class="menu-item">
        <a 
          class="menu-item__link"
          href={this.href} 
          target={this.target}
        >
          <slot />
        </a>
      </li>
    )
  }
}
