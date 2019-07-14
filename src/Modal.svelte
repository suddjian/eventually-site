<script>
  export let open = false;

  function close() {
    open = false
  }

  let closeable = false
  function bgMousedown(e) {
    e.stopPropagation()
    closeable = true
  }

  function fgMousedown(e) {
    e.stopPropagation()
    closeable = false
  }

  function maybeClose(e) {
    e.stopPropagation()
    if (closeable) {
      open = false
    }
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
    margin-top: 0;
  }

  .modal {
    position: absolute;
    width: calc(100% - 40px);
    max-width: 600px;
    padding: 20px;
    margin-top: 0;

    display: grid;
    grid-template-areas:
      "title close"
      "main main";
    
    background: white;
    border-radius: 4px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.03);
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
    margin-top: 0;
  }

  .main {
    grid-area: main;
  }
</style>

{#if open}
  <div class="background" on:mousedown={bgMousedown} on:mouseup={maybeClose}>
    <div class="modal" on:mousedown={fgMousedown}>
      <button class="ui close" on:click={close}>
        <img src="/icons/close.svg" alt="close" />
      </button>
      <div class="title"><slot name="title"></slot></div>
      <div class="main"><slot name="content"></slot></div>
    </div>
  </div>
{/if}
