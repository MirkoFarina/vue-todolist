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
            ],
            errorMsg: ''
        }
    },
    methods: {
        removeTask(index){
            this.errorMsg = '';
            if(this.tasks[index].toDo) this.tasks.splice(index, 1);
            else {
                this.errorMsg = 'Attenzione! devi prima eseguire l\'azione';
            }
        }
    }
}).mount('#app')

