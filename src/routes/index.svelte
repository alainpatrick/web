<script>
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Whybox from '$lib/components/Whybox.svelte';
	import Features from '$lib/components/Features.svelte';
	import Preorder from '$lib/components/Preorder.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Earncrypto from '$lib/components/Earncrypto.svelte';
	import Ownyourdata from '$lib/components/Ownyourdata.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Functionland</title>
	<html lang="en" />
</svelte:head>

<Hero />
<Intro />
<Features />
<Ownyourdata />
<Earncrypto />
<Whybox />
<Preorder />
<Partners />
<Footer />