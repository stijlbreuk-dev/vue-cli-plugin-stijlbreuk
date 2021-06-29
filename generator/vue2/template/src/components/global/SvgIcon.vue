<template>
	<div class="svg-icon">
		<span class="svg-icon__container">
			<svg role="img">
				<use :xlink:href="'#' + iconId"></use>
			</svg>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'svg-icon',
		props: {
			iconId: {
				type: String,
				default: '',
			},
		},
	};
</script>

<style lang="scss" scoped>
	.svg-icon {
		&__container {
			width: 1em;
			height: 1em;
			fill: currentColor;
			svg {
				width: 1em;
				height: 1em;
				fill: currentColor;
			}
		}
	}
</style>
