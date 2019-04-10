var knights = []
const url = 'http://localhost:3003/api/knights'
new Vue({
	el:"#app",
	data: {
		title: 'Knights!',
		knightList: [],
		heroList: []
	},
	methods:{
		listKnights(){
			this.knightList = []
			this.heroList = []
			var vm = this
			axios.get(url).then(function(r){
				vm.knightList = r.data
			})
			//this.knightList.push('knight1', 'knight2', 'knight3')
		},
		listHeroes(){
			this.knightList = []
			this.heroList = []
			var vm = this
			axios.get(url).then(function(r){
				r.data.forEach(function(i){
					var born = new Date(i.birthday)
					var age = calculaIdade(born, new Date())
					if(age > 7){
						vm.heroList.push(i)
					}
				})
			})
			//this.heroList.push('hero1', 'hero2')
		},
		addKnight(){
			console.log("new knight add")
		}
		getKnight(id){
			console.log(id)
		}
	}
})

function calculaIdade(nascimento, hoje){
    return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}