<template>

  <button class="g-button" class="{[`iconPostion`]:true}" v-if="iconPostion==='right'">
<g-icon name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>

  </button>

</template>
<script>
  export default {
    props: {
      icon: {},
      iconPostion: {
        type: String,
        default: 'left',
        validator(value) {
          console.log(value)
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>
<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);

    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 .7em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }

      > .content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }

</style>