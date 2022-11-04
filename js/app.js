const { createApp } = Vue;

createApp ({
    data(){
        return {
            tasks: [
                 {
                     nome: 'scendere a comprare il latte',
                     toDo: false
                 },
                 {
                     nome: 'aggiustare la porta',
                     toDo: true
                 },
                 {
                     nome: 'studiare react',
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
            let isPresent = '';
            if(this.newTask.length < 5) {
                this.errorMsg = 'Attenzione! devi inserire almeno 5 caratteri';
                this.newTask = '';
                return;
            }else {
                isPresent = this.tasks.find((task) => {
                    return   task.nome === this.newTask.toLowerCase();
                })
            }
            if(isPresent) {
                this.errorMsg = 'Attenzione!! stai provando ad inserire un elemento già presente nella lista'
            }else {
                 const newObjTask = {
                    nome: this.newTask.toLowerCase(),
                    toDo: false
                }
                this.tasks.unshift(newObjTask);                
            }
                this.newTask = '';
            
        }
    }
}).mount('#app')

