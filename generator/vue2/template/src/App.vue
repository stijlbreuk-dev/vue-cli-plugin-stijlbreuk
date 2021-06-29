<template>
	<div id="app" class="orange">
		<symbols></symbols>
		<span>
			<SvgIcon :iconId="'icon_ui_info'"></SvgIcon>
			app version: {{ version }}
		</span>
	</div>
</template>

<script>
	import Symbols from '@/components/SvgSymbols';
	export default {
		name: 'app',
		data() {
			return {
				version: process.env.VUE_APP_VERSION,
			};
		},
		components: {
			Symbols,
		},
	};
</script>

<style lang="scss">
	@import '@/styles/app.scss';
	.orange {
		color: $brand-primary;
	}
</style>
