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
	import Team from '$lib/components/Team.svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
</script>

<svelte:head>
	<!-- SEO -->
	<meta name="robots" content="index,follow">
	<meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
	<meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">

	<meta name="description" content="Functionland&#039;s Fula Network: a people-owned alternative to cloud services such as photo storage, file syncing, password management, and collaboration tools" />
	<link rel="canonical" href="https://fx.land" />

	<link rel="shortcut icon" href="https://fx.land/favicon.png" />
	<link rel="apple-touch-icon" sizes="32x32" href="https://fx.land/touch-icon.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="https://fx.land/touch-icon76.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="https://fx.land/touch-icon120.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="https://old.fx.land/touch-icon152.png" />

	<meta property="og:url" content="https://fx.land" />
	<meta property="og:title" content="Functionland: Home of The Fula Network, Box, and Blockchain-Attached" />
	<meta property="og:description" content="Functionland&#039;s Fula Network: a people-owned alternative to cloud services such as photo storage, file syncing, password management, and collaboration tools" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://fx.land/hero2.png" />
	<meta property="og:image:width" content="500" />
	<meta property="og:image:height" content="503" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:site_name" content="Functionland: Blockchain-Attached Storage" />
	<meta property="og:locale" content="en_US" />

	<meta property="twitter:url" content="https://fx.land" />
	<meta property="twitter:title" content="Functionland: Home of The Fula Network, Box, and Blockchain-Attached" />
	<meta property="twitter:description" content="Functionland&#039;s Fula Network: a people-owned alternative to cloud services such as photo storage, file syncing, password management, and collaboration tools" />
	<meta property="twitter:image" content="https://fx.land/hero2.png" />
	<meta property="twitter:domain" content="Functionland: Blockchain-Attached Storage" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@functionland" />
	<meta property="twitter:site" content="@functionland" />

	<meta name="google-site-verification" content="_eSY04QTnFjZ4XHXKGR-DMPutdcSPs3HE0z7JO-6w8U" />
	<!-- /SEO  -->
	<title>Functionland</title>
	<GoogleAnalytics properties={[ '305969288' ]} />
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