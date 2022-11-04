const { createApp } = Vue;

createApp ({
    data(){
        return {
            tasks: [
                {
                    nome: 'Scendere a comprare il latte',
                    toDo: false
                },
                {
                    nome: 'Aggiustare la porta',
                    toDo: true
                },
                {
                    nome: 'Studiare React',
                    toDo: false
                }
            ]
        }
    },
    methods: {
        removeTask(index){
            
        }
    }
}).mount('#app')