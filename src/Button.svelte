<script>
  export let disabled
  export let loading
</script>

<button {...$$props} loading={undefined} disabled={disabled || loading}>
  {#if loading}
    ...
  {:else}
    <slot></slot>
  {/if}
</button>