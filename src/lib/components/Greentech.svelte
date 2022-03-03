<script>
    const video = document.querySelector('video');
    video.playbackRate = 2;
</script>

<section>
    <div class="bg-hooker">
      <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h2 class="pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
            Green from the Get-GO
          </h2>
          <p class="text-4xl text-center text-white pt-8" style="line-height:1.2">
            Box is built on energy-efficient, open-source architecture. 
          </p>
        </div>
        <div  class="flex justify-center items-center">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video id="video" width="640" autoplay loop>
                <source src="green.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        

      </div>
    </div>
  </section>