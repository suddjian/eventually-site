<script>
  export let open = false;

  function close() {
    open = false
  }

  function absorb(e) {
    e.stopPropagation()
  }
</script>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
  }

  .modal {
    position: absolute;
    width: calc(100% - 40px);
    max-width: 600px;
    background: white;
    padding: 20px;
    border-radius: 4px;

    display: grid;
    grid-template-areas:
      "title close"
      "main main"
  }

  .close {
    grid-area: close;
    background: none;
    border: none;
    justify-self: end;
    align-self: start;
  }

  .title {
    grid-area: title;
  }

  .main {
    grid-area: main;
  }
</style>

{#if open}
  <div class="background" on:click={close}>
    <div class="modal" on:click={absorb}>
      <button class="close" on:click={close}>
        <img src="/icons/close.svg" alt="close" />
      </button>
      <div class="title"><slot name="title"></slot></div>
      <div class="main"><slot name="content"></slot></div>
    </div>
  </div>
{/if}
