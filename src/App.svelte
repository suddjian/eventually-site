<script>
	import Subscribe from './Subscribe.svelte'
</script>

<style>
	h1 {
		color: purple;
	}

  .wrapper {
    margin: 40px auto;
    max-width: 800px;
  }
</style>

<section class="wrapper">
  <h1>Schedule tasks on the cloud with a simple API call</h1>
  <h2>With <em>eventually.run</em>, your events are triggered on time, every time.</h2>

  <Subscribe />

  <h3>Perfect for stateless apps and cloud functions</h3>
  <p>
    Want to send an automated reminder email days from now? Schedule a webhook with eventually.run!
    Our trained elephants will always remember to call your code, even if the event is years in the future.
  </p>

  <h3>Engineering you can rely on</h3>
  <p>
    We understand that the events powering your app are critical to the success of your business.
    We built eventually.run by applying years of experience solving this very problem,
    so that you never need to think about how to schedule deferred events in your cloud services again.
  </p>

  <h3>Millisecond precision</h3>
  <p>
    Our system is so robust that on average, webhooks are triggered less than a millisecond from the exact scheduled time.
    We're honestly not sure why anyone would need this, but we couldn't help ourselves.
  </p>
</section>

