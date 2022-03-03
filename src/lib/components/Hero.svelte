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
                <a href="#joinus" class="bg-aquadark text-white  p-2 rounded  hover:bg-aqua text-xl">Join The Waiting List</a>
            </nav>
        </div>
    </div>
    
    <div class="w-full h-screen relative">
        <div class="absolute w-full h-full z-10 ">
            <div class="px-16  h-full flex items-center justify-start">
                <div class=" lg:flex flex-col w-2/6 space-y-4 py-12 ">
                    <h1 class="text-7xl font-extrabold text-white ">Box <br/> The private, payless cloud storage alternative</h1>
                </div>
            </div>
        </div>
        <div class="absolute w-full "/>
        <img src="hero.jpg" alt="Box - by Functionland" width="100%" >
    </div>
</section>

