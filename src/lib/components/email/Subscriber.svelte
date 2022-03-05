<script>
  let email = ''
  let showMessage = false
  let responseMessage = ''

  async function submitForm() {
    const submit = await fetch('/subscribe.json', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    })
    const data = await submit.json()

    if (data.message === 'bad request') {
      showMessage = true
      responseMessage = `That looks like something wrong happened`
    }
    if (data.message === 'email sent!') {
      showMessage = true
      responseMessage = `Sweet! Check your emails!`
    }
    if (
      data.message === 'something went wrong with the email submit!'
    ) {
      showMessage = false
      // deal with failed response from server
    }
  }
</script>
  
  <div class="mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 bg-white">
    {#if showMessage}
      <div class="text-center">
        {#if responseMessage == `Sweet! Check your emails!`}
          <h3 class="font-bold text-2xl text-green-600 ">Sweet! <br/>Check your emails to confirm!</h3>
        {:else}
          <h3 class="font-bold text-2xl text-red-600 ">{responseMessage}</h3>
        {/if}
      </div>
    {:else}
      <div class="text-center">
        <form class="flex flex-col lg:flex-row" on:submit|preventDefault={submitForm}>
          <label for="email" class="label">
            <span class="sr-only">Your Email</span>
          </label>
          <input
            class="text-2xl lg:text-xl xl:text-xl flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            id="email"
            aria-label="email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Your email address"
            required
            bind:value={email}
          />
          <button class="px-4 py-4 m-2 text-2xl lg:m-1 lg:py-2 lg:text-xl xl:py-2 xl:text-xl text-white  bg-aquadark rounded-md hover:bg-aqua" type="submit" >
              Join us
          </button>
        </form>
      </div>
    {/if}
  </div>