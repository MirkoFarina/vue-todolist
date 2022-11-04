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
            errorMsg: '',
            newTask: '',
            selectType: ''
        }
    },
    methods: {
        removeTask(index){
            this.errorMsg = '';
            if(this.tasks[index].toDo) this.tasks.splice(index, 1);
            else {
                this.errorMsg = 'Attenzione! devi prima eseguire l\'azione';
            }
        },
        pushTask(){
            this.errorMsg = '';
            if(this.newTask.length < 5) {
                this.errorMsg = 'Attenzione! devi inserire almeno 5 caratteri';
                this.newTask = '';
                return;
            }else {
                const newObjTask = {
                    nome: this.newTask,
                    toDo: false
                }
                this.tasks.unshift(newObjTask);
                this.newTask = '';
            }
        }
    }
}).mount('#app')

