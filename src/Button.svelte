<script>
  export let loading = false;
  export let props = {}
</script>

<button {...props} disabled={props.disabled || loading}>
  {#if loading}
    ...
  {:else}
    <slot></slot>
  {/if}
</button>