var knights = []
const url = 'http://localhost:3003/api/knights'
new Vue({
	el:"#app",
	data: {
		title: 'Knights!',
		knightList: [],
		heroList: [],
		newKnight: false,
		showKnights: false,
		showHeroes: false,
		showGetKnight: false,
		showEdit: false,
		idToEdit: "",
		nameToEdit: "",
		nicknameToEdit: ""
	},
	methods:{
		listKnights(){
			this.knightList = []
			this.showHeroes = false
			this.newKnight = false
			this.showKnights = true
			this.showGetKnight = false
			this.showEdit= false
			var vm = this
			axios.get(url).then(function(r){
				vm.knightList = r.data
			})
			//this.knightList.push('knight1', 'knight2', 'knight3')
		},
		listHeroes(){
			this.heroList = []
			this.showHeroes = true
			this.newKnight = false
			this.showKnights = false
			this.showGetKnight = false
			this.showEdit = false
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
			this.showHeroes = false
			this.newKnight = true
			this.showKnights = false
			this.showGetKnight = false
			this.showEdit = false
			console.log("new knight add")
		},
		getKnight(){
			this.showHeroes = false
			this.newKnight = false
			this.showKnights = false
			this.showGetKnight = true
			this.showEdit = false
		},
		getAge(birthday){
			return calculaIdade(new Date(birthday), new Date())
		},
		getAttac(key, weapons, attributes){
			attac = 0
			weapon = getWeaponEquipped(weapons)
			if (key in attributes[0]){
				attac = 10 + mod(attributes[0][key]) + weapon.mod
			}
			return attac;
		},
		getExp(age){
			var exp = 0
			if(age > 7){
				exp = Math.floor((age - 7) * Math.pow(22, 1.45))
			}
			return exp
		},
		getWeapon(weapons){
			console.log(weapons)
			return weapons.length
		},
		addNewKnight(objForm){
			this.showHeroes = false
			this.newKnight = false
			this.showKnights = false
			this.showGetKnight = false
			this.showEdit = false
			knight = getNewKnight(objForm)
			vm = this
			axios.post(url, knight).then(function(){
				console.log("new knight add")
				vm.listKnights()
			})
			return false;
		},
		getOneKnight(obj){
			this.showHeroes = false
			this.newKnight = false
			this.showKnights = false
			this.showGetKnight = false
			this.showEdit = false
			this.knightList = []
			vm = this
			console.log(url+"?_id="+obj.id.value)
			axios.get(url+"?_id="+obj.id.value).then(function(r){
				vm.knightList = r.data
			})
			this.showKnights = true
			return false
		},
		deleteKnight(id){
			vm = this
			console.log(id)
			urlDelete = url+"/"+id
			axios.delete(urlDelete).then(function(){
				vm.listKnights()
			})
		},
		deleteHero(id){
			vm = this
			console.log(id)
			urlDelete = url+"/"+id
			axios.delete(urlDelete).then(function(){
				vm.listHeroes()
			})
		},
		editKnight(id, name, nickname){
			this.showHeroes = false
			this.newKnight = false
			this.showKnights = false
			this.showGetKnight = false
			this.showEdit = true
			console.log(name)
			this.idToEdit = id
			this.nameToEdit = name
			this.nicknameToEdit = nickname
		},
		editAKnight(obj){
			editUrl = url+"/"+obj.id.value
			vm = this
			knight = {
				"name": obj.name.value || 'John Doe',
				"nickname": obj.nickname.value || 'John'
			}
			axios.put(editUrl, knight).then(function(){
				vm.listKnights()
			})
			return false
		}
	}
})

function calculaIdade(nascimento, hoje){
    return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}
function getWeaponEquipped(weapons){
	var weapon = null
	weapons.forEach(function(w){
		if(w.equipped){
			weapon = w
		}
	})
	return weapon
}
function mod(attr){
	var res
	for(i = 0; i < attr; i++){
		if(i > 0 && i <= 8){
			res = -2
		}else if(i >= 9 && i <= 10){
			res = -1
		}else if(i >= 11 && i <= 12){
			res = 0
		}else if(i >= 13 && i <= 15){
			res = 1
		}else if(i >= 16 && i <= 18){
			res = 2
		}else if(i >= 19 && i <= 20){
			res = 3
		}
	}
	return res
}
function getNewKnight(obj){
	newKnight = {
		"name": obj.name.value || 'John Doe',
        "nickname": obj.nickname.value || 'John',
        "birthday": obj.birthday.value || '1970-01-01',
		"weapons": [getDefaultWeapon()],
		"attributes":[getAttributes()],
		"keyAttribute": "strength"
	}
	return newKnight
}
function getDefaultWeapon(){
	weapon = {
		"name": "Knife",
		"mod": getRandomValue(),
		"attr": "first",
		"equipped": true
	}
	return weapon
}
function getAttributes(){
	attr = {
		"strength": getRandomValue(),
		"dexterity": getRandomValue(),
		"constitution": getRandomValue(),
		"intelligence": getRandomValue(),
		"wisdom": getRandomValue(),
		"charisma": getRandomValue()
	}
	return attr
}
function getRandomValue(){
	return Math.floor(Math.random() * 20)
}