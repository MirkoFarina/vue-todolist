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
                    toDo: false
                },
                {
                    nome: 'Studiare React',
                    toDo: false
                }
            ]
        }
    }
}).mount('#app')