function comecar(){                                                        //Só pra executar todo o código depois de clicar em um botão pra começar no html


    let listaAssistidos = [], listaParaAssistir = []                       // 2 arrays para armazenar os filmes; Funcionam como 2 listas de filmes 
    let filme = null, sair = 0, opcao=-1

    /*Função para pesquisar um filme específico em algum dos arrays; Pode ter a opção de selecionar o array 
    em que se quer fazer a pesquisa e depois se o usuario quer pesquisar por titulo, genero ou ano de lançamento*/
    function pesquisarFilme(){                                             

    }
    
    /*Função para adicionar novos filmes, com seu titulo, genero e/ou ano; pode dar a opção de escolher em qual
    das listas/arrays voce quer adicionar o filme e deve adicionar-los no array em ordem do mais novo para o mais antigo*/
    function adicionarFilme(){  
        console.log("\n -----------------Adicionando-filme----------------------\n")                                          
        let titulo = prompt("Digite o título do filme: ")
        let genero = prompt("Gênero: ")
        let ano = prompt("Ano de lançamento: ")
        filme = new Filme(titulo, genero, ano)
        console.log("\n1 - Filmes para assistir")
        console.log("2 - Filmes assistidos\n")
        opcao = prompt("Em qual lista deseja adicionar o filme? ")
        if(opcao == 1){                                                                 // talvez tenha que tratar para que adicione direto no 0 caso o array esteja vazio
            for(let i = listaParaAssistir.length; i > 0; i--){
                listaParaAssistir[i] = listaParaAssistir[i-1];
            } listaParaAssistir[0] = filme
            console.log("\n--------Filme adicionado na lista de filmes para Assistir--------\n")
        }else if(opcao == 2){
            for(let i = listaAssistidos.length; i > 0; i--){
                listaAssistidos[i] = listaAssistidos[i-1];
            } listaAssistidos[0] = filme
            console.log("\n--------Filme adicionado na lista de filmes Assistidos--------\n")
        }
    
    }

    /*Função para alterar algo em algum dos filmes; Pode perguntar se o usuario quer mudar um filme de lista(De assistir para assistido) ou se quer alterar o atributo de algum deles;
    Para alterar um atributo ela deve perguntar qual é o filme e o que nele deseja-se ser alterado(titulo, genero, ano)*/ 
    function alterarFilme(){

    }

    //Deleta um filme; deve perguntar qual é o filme e remove-lo do array que está; depois deve reorganizar o array para não deixar espaço vazio(deve criar uma função só pra isso?)
    function deletarFilme(){

    }

    // apenas exibe os filme de alguma das lista; opção de escolher qual lista mostrar
    function exibirFilmes(){

    }
    
    class Filme{                                                           
        constructor(titulo, genero, ano){
            this.titulo = titulo,
            this.genero = genero,
            this.ano = ano 
        }   
    }

    do {                                                                   //Lopping infinito do menu; Termina quando sair for verdadeiro(Sair == 1)
        console.log("\n--------- Menu ------------------------\n")
        console.log("   1. Pesquisar Filme \n")
        console.log("   2. Novo Filme \n")
        console.log("   3. Alterar Filme \n")
        console.log("   4. Deletar Filme \n")
        console.log("   5. Mostrar todos os Filmes \n")
        console.log("   6. Sair \n")
        opcao = parseInt(prompt("Digite um número: "))                    //Seleção de uma das opções do menu
        if(opcao == 6)
            sair = 1
        else if(opcao == 5){

        }
        else if(opcao == 4){

        }
        else if(opcao == 3){

        }else if(opcao == 2){
            adicionarFilme()
        }else if(opcao == 1){

        }else
            alert("\n -----------------! Opção invalida! ------------------\n")
    } while (sair == 0)


}
