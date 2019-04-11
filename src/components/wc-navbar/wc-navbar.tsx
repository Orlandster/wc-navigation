import { Component } from '@stencil/core';

@Component({
  tag: 'wc-navbar',
  styleUrl: 'wc-navbar.scss',
  shadow: true
})
export class WcNavbar {
  render() {
    return (
      <div class="navbar">
        <slot name="item-start" />
        <slot name="item-center" />
        <slot name="item-end" />
      </div>
    )
  }
}
