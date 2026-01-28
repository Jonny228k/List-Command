import { isCancel, select } from '@clack/prompts';

export async function mainMenu(){

    const option = await select ({
        message:'Escolha oque deseja fazer',
        options: [
            {label: 'Adicionar nova tarefa', value: 'add'},
            {label: 'Listar tarefas', value: 'list'},
            {label: 'sair', value: 'end'}
        ]
    })

    if(isCancel(option)) return 
    
    switch (option){
        case 'add':
            //chamar função de criar tarefa
            return;
        case 'list':
            //chamar função de listar tarefas
            return;
        case 'end':
            console.log('Fim do Programa')
            return;
    }
}