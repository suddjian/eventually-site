<script>
  import Modal from "./Modal.svelte";
  import Button from "./Button.svelte";
  import { db } from "./firebase.js";

  let subBoxOpen = false;

  let name = "";
  let email = "";
  let comment = "";

  let subscribePending = false;
  let subscribeError = null;
  let subscribeSuccess = null;

  function subscribe(e) {
    e.preventDefault();
    console.log("subscribing");
    subscribePending = true;
    db.collection("subscribers")
      .doc()
      .set({
        name,
        email,
        comment,
        subscribed_at: new Date()
      })
      .then(() => {
        console.log("subscribed successfully");
        subBoxOpen = false;
        subscribeSuccess =
          "Thanks! You're signed up for the beta and we'll be in touch. We promise not to spam you.";
      })
      .catch(e => {
        console.log("failed to subscribe");
        console.log(e);
        subscribeError =
          "Crap, something failed. That's embarrassing. Hopefully it will be fixed soon.";
      })
      .then(() => {
        subscribePending = false;
      });
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  label,
  textarea {
    width: 100%;
    max-width: 400px;
  }

  button {
    width: fit-content;
    padding-right: 50px;
    padding-left: 50px;
  }

  h2 {
    margin: 0;
  }

  .cta {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .error {
    color: red;
  }
</style>

<button class="cta" on:click={() => (subBoxOpen = !subBoxOpen)}>
  Subscribe
</button>

{#if subscribeSuccess}
  <div class="success">{subscribeSuccess}</div>
{/if}

<Modal bind:open={subBoxOpen}>
  <h2 slot="title">Join the waitlist to eventually.run your code</h2>
  <form slot="content" on:submit={subscribe}>
    <label for="name">Name</label>
    <input bind:value={name} id="name" />
    <label for="email">Email</label>
    <input required bind:value={email} id="email" />
    <label for="comment">Any Comments?</label>
    <textarea bind:value={comment} id="comment" />
    <br />
    {#if subscribeError}
      <div class="error">{subscribeError}</div>
    {/if}
    <Button type="submit" loading={subscribePending}>Send</Button>
  </form>
</Modal>
