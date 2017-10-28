# hackernuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

# how i did it:
 * init project
   * $ npx vue-cli init nuxt-community/starter-template hackernuxt
   * enter for all default
   * yarn
   * npm run dev # to check every things work
   * del layouts/default.vue
   * pages/index # le vider
   * remplacer par <template><div> Hello World</div></template>
   * nuxt.config.js # virer le build


 * Add a CSS Library from npm to nuxt
   * yarn add tachyons tachyons-debug
   * nuxt.config.js : ajouter css: ["tachyons/css/tachyons.min.css"]
   * add class="f1 code" to div
   * add to css "tachyons-debug/css/tachyons-debug/min.css"
   * add in index <ul><li>One</li><li>Two</li><li>Three</li></ul>


 * Add Javascript Libraries from npm
   * yarn add axios
   * in nuxt.config.js : build: {vendor: ["axios"]}
   * plugins/axios.js : import axios from "axios"; export default axios.create({
baseURL: "https://api.github.com"})
   * un index : <script type="text/javascript">import axios from "~/plugins/axios"; export default {asyncData(){
   	return axios.get('users').then(res => ({users: res.data}))
   }}</script>
   * change <li></li> by <li v-for="user in users" :key="user.id">{{user.login}}</li>

 * Create a Vuex Store for Global Data in Nuxt
 	* supprimer ce qu'on a mis dans les balise script de l'index
 	* creer un fichier store/index.js : export const state = () => ({
	users: [
		{id: 0, login: "John"}
	]
})
	* recup dans index.vue : import {mapState} from "vuex"
	export default {
	computed: mapState(["users"])
	}
	* gerer le store dans Store/index.js
	
import axios from "~/plugins/axios"
export const state = () => ({
	users: [
		{id: 0, login: "John"}
	]
})

export const mutations = {
	setUsers(state, users) {
		state.users = users
	}
}
export const actions = {
	async nuxtServerInit({commit}){
		const response = await axios.get("users")
		const users = response.data

		commit("setUsers", users)
	}
}
 * Load Data into the Vuex Store in nuxt
 * Access the router Params to Load Page-Specific Data in Vue.js and Nuxt
 * Build Global Navigation with Layouts and nuxt-link in Nuxt
 * Create CSS Transition Effects in Vue.js and Nuxt
 * Style a List and List items
 * Register Vue.js Filters as Plugins in Nuxt
 * Display Only Available Data
 * Display a User Data Page Based on id 
 * Build a Recursive Component for Nested Comments
