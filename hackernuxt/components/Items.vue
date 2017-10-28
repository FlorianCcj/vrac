<template>
  <div class="code"> 
    <ul class="list pa2">
    	<li>One</li>
    	<li>Two</li>
    	<li>Three</li>
    	<li v-for="item in items" :key="item.id">{{item.title}}</li>
	</ul>
  </div>
</template>
<script type="text/javascript">
	import {mapState} from "vuex"
	export default {
		computed: mapState([
			"ids",
      "items"
		])
	}
</script>