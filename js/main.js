const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name: 'Martin',
            age: 0,
            liste: [1,2,3,4,5],
            nr: 0,
            hide: false,
            listeNavne: 
            [
                {name: "Rasmus", age: 27},
                {name: "Christian", age: 12},
                {name: "Søren",age: 69}
            ]

        }
    },
    methods: {
        myMethod(){

        },
        add(){
            this.liste.push(this.nr)
            this.nr=0
        },
        hidelist(){
            this.hide=!this.hide
        },
        addPerson(){
        this.listeNavne.push({name: this.name, age: this.age})
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
