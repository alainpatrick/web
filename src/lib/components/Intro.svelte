<script>
  import Subscriber from "$lib/components/email/Subscriber.svelte";
</script>

<section id="joinus" class="">
    <div class="bg-white">
      <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div class="w-11/12 sm:w-2/3 flex justify-center items-center flex-col">
          <h2 class="text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center text-gray-800 font-black" style="line-height:1.2">
            Box by <span class="text-aquadark">Functionland</span><br/>
          </h2>
          <p class="text-4xl font-medium text-center text-gray-800 pt-8" style="line-height:1.2">
            The first Blockchain-Attached Storage solution <br/>
          </p>
          <p class="text-4xl font-medium text-center text-gray-800 pt-8" style="line-height:1.2">
            By the People, For the People.
          </p>
        </div>
        <div class="flex justify-center flex-col items-center">
          <img src="kickstarter.png" alt="Box by Functionland Launching soon on Kickstarter" class="ml-2 mt-4" width="150">
          <Subscriber />
        </div>

      </div>
    </div>
</section>
 