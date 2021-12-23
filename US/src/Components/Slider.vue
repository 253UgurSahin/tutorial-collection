<template lang="">
    <div class="slider my-16" :style="{ width: maxWidth }">
        <div class="slide-track">
            <div 
				v-for="(slide, i) in slides" 
				:key="i" 
				class="slide flex items-center justify-center bg-no-repeat bg-center bg-contain"
				:style="{ backgroundImage: 'url(/assets/logos/'+slide+')' }"
			></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["slides", "maxWidth"],
}
</script>

<style scoped lang="scss">

@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 50s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 12))}
}


// Styling
.slider {
	position: relative;
	
	&::before,
	&::after {
		@include white-gradient;
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 24);
	}
	
	.slide {
		height: 90px;
		width: 250px;
	}
}
</style>