<script>
	import Team from '$lib/components/Team.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import Intro from '$lib/components/Intro.svelte'
	import Whybox from '$lib/components/Whybox.svelte'
	import Footer from '../lib/components/Footer.svelte'
	import Features from '$lib/components/Features.svelte'
	import Preorder from '$lib/components/Preorder.svelte'
	import Partners from '$lib/components/Partners.svelte'
	import Earncrypto from '$lib/components/Earncrypto.svelte'
	import Ownyourdata from '$lib/components/Ownyourdata.svelte'
	import Seometatags from '$lib/components/Seometatags.svelte'
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
</script>

<svelte:head>
	<Seometatags />
	<title>Functionland</title>
	<GoogleAnalytics properties={[ 'G-ZSXPWSJNZ9' ]} />
</svelte:head>

<Hero />
<Intro />
<Features />
<Ownyourdata />
<Earncrypto />
<Whybox />
<Preorder />
<Partners />
<Team />
<Footer />