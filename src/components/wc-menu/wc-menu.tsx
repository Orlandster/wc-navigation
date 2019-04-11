import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-menu',
  styleUrl: 'wc-menu.scss',
  shadow: true
})
export class WcNavbar {
  @Prop() type: string = 'horizontal';

  render() {
    const classes = `wc-menu ${this.type}`;

    return (
      <ul class={classes}>
        <slot />
      </ul>
    )
  }
}
