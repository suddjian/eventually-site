<script>
  import Modal from "./Modal.svelte";
  import Button from "./Button.svelte";
  
  var firebaseConfig = {
    apiKey: "AIzaSyAMDcv3PHGZ9dqUeSvTx-bb34N3rE6iRA0",
    authDomain: "eventually-run.firebaseapp.com",
    databaseURL: "https://eventually-run.firebaseio.com",
    projectId: "eventually-run",
    storageBucket: "eventually-run.appspot.com",
    messagingSenderId: "258423598106",
    appId: "1:258423598106:web:bd500052846f6b8f"
  };

  window.firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  let name = "";
  let email = "";
  let comment = "";

  let subBoxOpen = false;
  let subscribePending = false;
  let subscribeError = false;
  let subscribeSuccess = false;

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
        console.log("signed up successfully");
        subBoxOpen = false;
        subscribeSuccess = true;
      })
      .catch(e => {
        console.log("failed to sign up");
        console.log(e);
        subscribeError = true;
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

  h2 {
    margin: 0;
  }

  .cta {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .center {
    text-align: center;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
</style>

<button class="cta" on:click={() => (subBoxOpen = !subBoxOpen)}>
  <slot></slot>
</button>

{#if subscribeSuccess}
  <div class="success center">Awesome! You're signed up for the beta and we'll be in touch.</div>
{/if}

<Modal bind:open={subBoxOpen}>
  <h2 slot="title">Join the waitlist to eventually.run your code</h2>
  <form slot="content" on:submit={subscribe}>
    <label for="name">Name</label>
    <input bind:value={name} id="name" />
    <label for="email">Email</label>
    <input required bind:value={email} id="email" />
    <label for="comment">Tell us about yourself, and your scheduling needs:</label>
    <textarea bind:value={comment} id="comment" />
    <br />
    {#if subscribeError}
      <div class="error">Crap, something failed. That's embarrassing. Hopefully it will be fixed soon.</div>
    {/if}
    <Button type="submit" loading={subscribePending}>Sign Up</Button>
  </form>
</Modal>
