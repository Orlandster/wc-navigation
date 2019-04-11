import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-nav-item',
  styleUrl: 'wc-nav-item.scss',
  shadow: true
})
export class WcNavbar {
  @Prop() href: string;
  @Prop() target: string;

  render() {
    return (
      <li class="nav-item">
        <a 
          href={this.href} 
          target={this.target}
        >
          <slot />
        </a>
      </li>
    )
  }
}
