<script>
    import Subscriber from "$lib/components/email/Subscriber.svelte";
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <h2 class="pt-2 pb-16 text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-black leading-7 md:leading-10">
        Our Partners
      </h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6">
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/contango.png" alt="contango">
        </div>
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/crust.png" alt="crust">
        </div>
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10 rounded" src="/partners/white/cudos.png" alt="cudos">
        </div>
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10 rounded" src="/partners/white/dfinity.png" alt="dfinity">
        </div>
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/filecoin.png" alt="filecoin">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/dark/delta-fund.png" alt="delta-fund">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/mkd.png" alt="mkd">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10 rounded" src="/partners/dark/dora-hacks.png" alt="dora-hacks">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/dark/master-ventures.png" alt="max-stealth">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/white/meta-edge-ventures.png" alt="meta-edge-ventures">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/protocol-labs.png" alt="protocol-labs">
        </div> 
        <div class="h-20 px-5 py-5 bg-gray-200 flex justify-center items-center rounded-lg">
            <img class="object-center h-10" src="/partners/tenzor-capital.png" alt="tenzor-capital">
        </div>    

    </div>
    <div class="flex justify-center flex-col items-center py-12">
        <img src="kickstarter.png" alt="Box by Functionland Launching soon on Kickstarter" class="ml-2" width="150">
        <Subscriber />   
    </div>
        
  </section>