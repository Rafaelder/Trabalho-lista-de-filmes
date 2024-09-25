function comecar() {                                                        //Só pra executar todo o código depois de clicar em um botão pra começar no html

    let listaAssistidos = [], listaParaAssistir = []                       // 2 arrays para armazenar os filmes; Funcionam como 2 listas de filmes 
    let novoFilme = null, i, sair = 0    //Variavel auxiliar de um objeto filme; variavel dos for



    function pesquisarFilme() { //Função para pesquisar um filme específico em algum dos arrays; por titulo, genero ou ano
        let pesquisa, filtro, sair = 0, encontrado = true
        console.log("\nEm qual lista deseja fazer a pesquisa: ")
        let opcao = escolherLista()
        console.log("\nDeseja pesquisar por: ")
        console.log("   1. Título do filme \n")
        console.log("   2. Gênero do filme \n")
        console.log("   3. Ano de lançamento \n")
        do {                                                     //garante que o metodo de pesquisa digitado seja válido
            filtro = parseInt(prompt("Digite a opção: "))
            if ((filtro != 1) && (filtro != 2) && (filtro != 3)) {                  //verifica se a lista selecionada é valida
                alert("\n -----------------! Opção invalida! ------------------\n")
            } else {
                sair = 1
            }
        } while (sair == 0)
        if (opcao == 1) {                                                                                             //Pesquisa na lista 1
            if (filtro == 1) {                                                                                     //por titulo
                console.log("Digite o Título do filme que está procurando: ")
                pesquisa = prompt("Titulo: ")
                console.log(`  -> Título: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaParaAssistir.length; i++) {          //Percorre o array do inicio ao fim 
                    if (listaParaAssistir[i].titulo == pesquisa) {            //Verifica se o atributo existe em algum filme do array      
                        console.log(listaParaAssistir[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- !Nenhum filme encontrado com o título fornecido! -----------")
                        encontrado = false
                    }
                } return encontrado
            } else if (filtro == 2) {                                                                              //por Gênero
                console.log("Digite o Gênero do filme que está procurando: ")
                pesquisa = prompt("Gênero: ")
                console.log(`  -> Gênero: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaParaAssistir.length; i++) {
                    if (listaParaAssistir[i].genero == pesquisa) {
                        console.log(listaParaAssistir[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- Nenhum filme encontrado com o título fornecido -----------")
                        encontrado = false
                    }
                } return encontrado
            } else if (filtro == 3) {                                                                              //por Ano
                console.log("Digite o Ano de lançamento do filme que está procurando: ")
                pesquisa = prompt("Ano: ")
                console.log(`  -> Ano: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaParaAssistir.length; i++) {
                    if (listaParaAssistir[i].ano == pesquisa) {
                        console.log(listaParaAssistir[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- Nenhum filme encontrado com o título fornecido -----------")
                        encontrado = false
                    }
                } return encontrado
            }
        } else if (opcao == 2) {                                                                                       //Pesquisa na lista 2, mesma ideia da 1
            if (filtro == 1) {                                                                                    //por titulo
                console.log("Digite o Título do filme que está procurando: ")
                pesquisa = prompt("Titulo: ")
                console.log(`  -> Título: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaAssistidos.length; i++) {
                    if (listaAssistidos[i].titulo == pesquisa) {
                        console.log(listaAssistidos[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- Nenhum filme encontrado com o título fornecido -----------")
                        encontrado = false
                    }
                } return encontrado
            } else if (filtro == 2) {                                                                             //por Gênero
                console.log("Digite o Gênero do filme que está procurando: ")
                pesquisa = prompt("Gênero: ")
                console.log(`  -> Gênero: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaAssistidos.length; i++) {
                    if (listaAssistidos[i].genero == pesquisa) {
                        console.log(listaAssistidos[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- Nenhum filme encontrado com o título fornecido -----------")
                        encontrado = false
                    }
                } return encontrado
            } else if (filtro == 3) {                                                                             //por Ano
                console.log("Digite o Ano de lançamento do filme que está procurando: ")
                pesquisa = prompt("Ano: ")
                console.log(`  -> Ano: ${pesquisa}\n`)
                console.log("---------- Filmes encontrados ------------------")
                for (i = 0; i < listaAssistidos.length; i++) {
                    if (listaAssistidos[i].ano == pesquisa) {
                        console.log(listaAssistidos[i])
                        console.log(`  Índice do filme: ${i}`)
                    } else {
                        console.log("-------------- Nenhum filme encontrado com o título fornecido -----------")
                        encontrado = false
                    }
                } return encontrado
            }
        }
    }

    function escolherLista() {                               //função para otimizar a manipulação das listas em outros escopos
        let opcao, sair = 0
        console.log("\n1 - Filmes para assistir")
        console.log("2 - Filmes assistidos\n")
        do {
            opcao = prompt("Digite o número da lista: ")
            if ((opcao != 1) && (opcao != 2)) {                  //verifica se a lista selecionada é valida
                alert("\n -----------------! Opção invalida! ------------------\n")
            } else {
                return opcao
            }
        } while (sair == 0)
    }

    function adicionarFilme(novoFilme) {                     //função para adição de novos filmes as listas                                                       
        console.log("\n--- Adicionar filme em: ")
        let opcao = escolherLista()                                                     //Escolha da lista em que o filme vai ser adicionado
        if (opcao == 1) {                         //lista 1
            if (listaParaAssistir.length == 0) {                                          //Caso a lista ainda esteja vazia, o filme será adicionado diretamente no inicio do array
                listaParaAssistir[0] = novoFilme
            } else {                                                                     //Caso não esteja vazia, move cada um dos itens axistentes para um indice a frente do atual
                for (i = listaParaAssistir.length; i > 0; i--) {      //percorre o array do final ao inicio, os indices começam no 0 então o total de itens da lista é = indice do último item + 1  
                    listaParaAssistir[i] = listaParaAssistir[i - 1];  //passa o filme para a posição a frente 
                } listaParaAssistir[0] = novoFilme                      //Ultimo filme adicionado fica sempre na posição 0
            }
            console.log("\n--------Filme adicionado na lista de filmes para Assistir--------\n")
        } else if (opcao == 2) {                   //lista 2
            if (listaAssistidos.length == 0) {        //Processo igual ao anterior
                listaAssistidos[0] = novoFilme
            } else {
                for (i = listaAssistidos.length; i > 0; i--) {
                    listaAssistidos[i] = listaAssistidos[i - 1];
                } listaAssistidos[0] = novoFilme
            }
            console.log("\n--------Filme adicionado na lista de filmes Assistidos--------\n")
        }

    }


    function alterarFilme() {        //Função para alterar algo em algum dos filmes; Pode perguntar se o usuario quer mudar um filme de lista(De assistir para assistido)
        console.log("\n--- Alterar filme em: ");
        let opcao = escolherLista();
        let pesquisa, indice = -1;
        if (opcao == 1) { // Lista 1 - Filmes para Assistir
            if (listaParaAssistir.length == 0) {
                console.log("\n----------------- A lista de filmes para assistir está vazia ------------------\n");
            } else {
                pesquisa = prompt("Digite o título do filme que deseja alterar: ");
                for (i = 0; i < listaParaAssistir.length; i++) {
                    if (listaParaAssistir[i].titulo == pesquisa) {
                        indice = i;
                        break;
                    }
                }
                if (indice != -1) { // Se o filme for encontrado
                    console.log("\nDeseja alterar: \n1. Título \n2. Gênero \n3. Ano de lançamento \n4. Mover para Assistidos");
                    let opcaoAlterar = parseInt(prompt("Digite a opção: "));

                    if (opcaoAlterar == 1) {
                        listaParaAssistir[indice].titulo = prompt("Novo título: ");
                    } else if (opcaoAlterar == 2) {
                        listaParaAssistir[indice].genero = prompt("Novo gênero: ");
                    } else if (opcaoAlterar == 3) {
                        listaParaAssistir[indice].ano = parseInt(prompt("Novo ano de lançamento: "));
                    } else if (opcaoAlterar == 4) {
                        let filmeMovido = listaParaAssistir[indice];
                        adicionarFilme(filmeMovido); // Adiciona o filme na lista de Assistidos
                        deletarFilme(); // Deleta o filme da lista atual
                        console.log("\n--- Filme movido para a lista de Assistidos ---\n");
                    }
                } else {
                    console.log("\n--- Filme não encontrado ---\n");
                }
            }
        } else if (opcao == 2) { // Lista 2 - Filmes Assistidos
            if (listaAssistidos.length == 0) {
                console.log("\n----------------- A lista de filmes assistidos está vazia ------------------\n");
            } else {
                pesquisa = prompt("Digite o título do filme que deseja alterar: ");
                for (i = 0; i < listaAssistidos.length; i++) {
                    if (listaAssistidos[i].titulo == pesquisa) {
                        indice = i;
                        break;
                    }
                }
                if (indice != -1) { // Se o filme for encontrado
                    console.log("\nDeseja alterar: \n1. Título \n2. Gênero \n3. Ano de lançamento \n4. Mover para Para Assistir");
                    let opcaoAlterar = parseInt(prompt("Digite a opção: "));

                    if (opcaoAlterar == 1) {
                        listaAssistidos[indice].titulo = prompt("Novo título: ");
                    } else if (opcaoAlterar == 2) {
                        listaAssistidos[indice].genero = prompt("Novo gênero: ");
                    } else if (opcaoAlterar == 3) {
                        listaAssistidos[indice].ano = parseInt(prompt("Novo ano de lançamento: "));
                    } else if (opcaoAlterar == 4) {
                        let filmeMovido = listaAssistidos[indice];
                        adicionarFilme(filmeMovido); // Adiciona o filme na lista de Para Assistir
                        deletarFilme(); // Deleta o filme da lista atual
                        console.log("\n--- Filme movido para a lista de Para Assistir ---\n");
                    }
                } else {
                    console.log("\n--- Filme não encontrado ---\n");
                }
            }
        }
    }

    //Deleta um filme; deve perguntar qual é o filme e remove-lo do array que está; depois deve reorganizar o array para não deixar espaço vazio
    function deletarFilme() {
        console.log("\n--- Deletar filme de: ");
        let opcao = escolherLista();    // Escolha de qual lista será deletado o filme
        let pesquisa, indice = -1;
        if (opcao == 1) {                          // Lista 1 - Filmes para Assistir
            if (listaParaAssistir.length == 0) {
                console.log("\n----------------- A lista de filmes para assistir está vazia ------------------\n");
            } else {
                pesquisa = prompt("Digite o título do filme que deseja deletar: ");
                for (i = 0; i < listaParaAssistir.length; i++) {
                    if (listaParaAssistir[i].titulo == pesquisa) {
                        indice = i;
                        break;
                    }
                }
                if (indice != -1) { // Se o filme for encontrado
                    for (i = indice; i < listaParaAssistir.length - 1; i++) {
                        listaParaAssistir[i] = listaParaAssistir[i + 1]; // Desloca os filmes para trás no array
                    }
                    listaParaAssistir.pop(); // Remove o último item vazio
                    console.log("\n--- Filme deletado com sucesso ---\n");
                } else {
                    console.log("\n--- Filme não encontrado ---\n");
                }
            }
        } else if (opcao == 2) {                                    // Lista 2 - Filmes Assistidos
            if (listaAssistidos.length == 0) {
                console.log("\n----------------- A lista de filmes assistidos está vazia ------------------\n");
            } else {
                pesquisa = prompt("Digite o título do filme que deseja deletar: ");
                for (i = 0; i < listaAssistidos.length; i++) {
                    if (listaAssistidos[i].titulo == pesquisa) {
                        indice = i;
                        break;
                    }
                }
                if (indice != -1) { // Se o filme for encontrado
                    for (i = indice; i < listaAssistidos.length - 1; i++) {
                        listaAssistidos[i] = listaAssistidos[i + 1];
                    }
                    listaAssistidos.pop(); // Remove o último item vazio
                    console.log("\n--- Filme deletado com sucesso ---\n");
                } else {
                    console.log("\n--- Filme não encontrado ---\n");
                }
            }
        }
    }


    function exibirLista() {                                  //Exibe os filme de alguma das lista; opção de escolher qual lista mostrar
        console.log("\n--- Lista a ser exibida: ")
        opcao = escolherLista()
        if (opcao == 1) {         //Lista 1
            if (listaParaAssistir.length == 0) {                  //Caso a lista esteja vazia, retorna a informação
                console.log("\n-----------------A lista ainda está vazia------------------\n")
            } else {                                              //Caso não esteja, mostra os filmes normalmente
                console.log("\n\nLista de filmes para assistir: \n")
                for (i = 0; i < listaParaAssistir.length; i++) {          //Percorre o array do inicio ao fim, mostrando os filmes de ordem do mais recente ao mais antigo
                    console.log(`-> ${listaParaAssistir[i].titulo}  Gênero: ${listaParaAssistir[i].genero}  Ano de Lançamento: ${listaParaAssistir[i].ano} \n`)
                }
            }
        } else if (opcao == 2) {   //Lista 2
            if (listaAssistidos.length == 0) {
                console.log("\n-----------------A lista ainda está vazia------------------\n")
            } else {
                console.log("\n\nLista de filmes assistidos: \n")
                for (i = 0; i < listaAssistidos.length; i++) {
                    console.log(`-> ${listaAssistidos[i].titulo}  Gênero: ${listaAssistidos[i].genero}  Ano de Lançamento: ${listaAssistidos[i].ano} \n`)
                }
            }
        }
    }

    class Filme {                                                            //Classe Filme.
        constructor(titulo, genero, ano) {
            this.titulo = titulo,
                this.genero = genero,
                this.ano = ano
        }
    }

    do {                                                               //Lopping infinito do menu; Termina quando sair for verdadeiro(Sair == 1)
        console.log("\n--------- Menu ------------------------\n")
        console.log("   1. Pesquisar Filme \n")
        console.log("   2. Novo Filme \n")
        console.log("   3. Alterar Filme \n")
        console.log("   4. Deletar Filme \n")
        console.log("   5. Exibir lista\n")
        console.log("   6. Sair \n")
        let opcao = parseInt(prompt("Digite um número: "))                    //Entrada da opção desejada do menu               
        if (opcao == 6) {                                          //seleção das opções
            sair = 1
        } else if (opcao == 5) {
            exibirLista()
        } else if (opcao == 4) {
            deletarFilme()
        } else if (opcao == 3) {
            alterarFilme()
        } else if (opcao == 2) {
            console.log("\n -----------------Adicionando-filme-------------------------\n")
            let titulo = prompt("Digite o título do filme: ")                                       //entradas dos atributos da classe filme
            let genero = prompt("Gênero: ")
            let ano = parseInt(prompt("Ano de lançamento: "))
            novoFilme = new Filme(titulo, genero, ano)                                          //criação de um novo objeto armazenando na variavel auxiliar
            console.log(novoFilme)                                                               //Mostra o filme que foi digitado
            adicionarFilme(novoFilme)                            //chamada da função de adicionar filme, passando o novo filme de parametro
        } else if (opcao == 1) {
            pesquisarFilme()
        } else                                                     //entrada invalida
            alert("\n -----------------! Opção invalida! ------------------\n")
    } while (sair == 0)
}