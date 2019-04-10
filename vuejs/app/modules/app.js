new Vue({
	el:"#app",
	data: {
		title: 'Knights!',
		knightList: [],
		heroList: []
	},
	methods:{
		listKnights(){
			this.knightList = getKnights()
			this.heroList = []
			//this.knightList.push('knight1', 'knight2', 'knight3')
		},
		listHeroes(){
			this.knightList = []
			this.heroList = getHeroes()
			//this.heroList.push('hero1', 'hero2')
		},
		addKnight(){
			console.log("new knight add")
		}
	}
})
function getKnights(){
	knights = ['knight1', 'knight2', 'knight3']
	return knights
}
function getHeroes(){
	heroes = ['hero1', 'hero2']
	return heroes
}