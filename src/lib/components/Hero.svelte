<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<section>
    <div class="text-white body-font fixed top-0 bg-black w-full z-50">
        <div class=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a sveltekit:prefetch href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <Logo />
            </a>
            <ul class="hidden lg:flex flex-row space-x-3 w-1/2 ml-12 text-sm">
                <li class="text-xl"><a href="https://blog.fx.land/">Blog</a></li>
                <!-- <li class="text-xl"><a href="https://fx.land/nft/">NFT</a></li> -->
            </ul>
            <nav class="md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold">
                <a href="#joinus" class="bg-aquadark text-white py-2 px-4 rounded  hover:bg-aqua text-lg">Join The Waiting List</a>
            </nav>
        </div>
    </div>
    
    <div class="w-full h-screen bg-center bg-no-repeat bg-cover" style="background-image: url('hero2.png');">
        <div class="w-full h-screen bg-opacity-10 bg-black flex justify-center items-center">
            <div class="text-center text-white bg-black bg-opacity-80 rounded-lg mx-4" style="margin-top:30rem;">
                <h1 class="text-3xl font-extrabold text-white p-2 " style="line-height: 1.3;">
                    <span class="text-aquadark">Box</span> <br/> 
                    The private, payless <br/> 
                    cloud storage alternative
                </h1>
            </div>
        </div>
    </div>
   


</section>

