import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export function useCrud() {
  const [list, setList] = useState() // estado que inicia com um array vazio (list) e setList é uma função que atualiza esse estado, no caso, irá popular dados na minha lista

  function handleList(task) {
    const newTask = {
      task,               // agora newTask é um objeto que contém task e isComplete tendo false como default
      isComplete: false
    }
    if (task != '') { // utilizo da condicional 'if' para verificar se há algum valor diferente de string vazia ('') no meu input, se sim, então chamo a função setList para atualizar a minha lista com uma nova tarefa
      setList([...(list || []), newTask]) // o spread operator [...list] é utilizado para pegar uma cópia do estado inicial da minha lista que nesse caso é um array vazio. em seguida eu recebo task que popula list
      toast.success('Enviada com sucesso!')
    } else {
      toast.error('Escreva alguma coisa para enviar')
    }
  }

  function handleDelete(index) {
    let newList = [...list] // utilizo da variável do tipo 'let', porque [...list] irá mudar. 
    newList.splice(index, 1) // o método splice adiciona ou remove elementos do array, a sua função é substituir a matriz 
    setList(newList) // aqui eu atualizo a lista 
  }

  function handleComplete(index) {
    const newList = [...list]
    newList[index].isComplete = !newList[index].isComplete // aqui eu manipulo o isComplete pelo index de cada elemento da lista que é igual a negação da mesma sentença
    setList(newList) // e aqui chamamos a função setList para atualizar o isComplete 

  }

  function saveList(listSave) { 
    localStorage.setItem('list', JSON.stringify(listSave)) 
    // local storage é o armazenamento local do browser, utilizando dele eu salvo as tarefas no navegador, como se fosse um banco de dados temporário, isso porque, se você fechar o navegador os dados somem, mas se fechar a aba ou recarregá-la apenas, os dados continuam lá.
   // setItem é uma função que recebe como parâmetros nome e valor e consiste em salvar os meus dados
   // JSON.stringify converte valores em javascript para uma string
  }

  function loadList() {
    const recovered = JSON.parse(localStorage.getItem('list')) // getItem pega os meus dados e é utilizando dele que posso renderizar esses dados em tela

    return recovered
  }

  useEffect(() => {  // useEffect é um hook de efeito cascata, cada vez que o list for atualizado o valor que list contém será salvo
    if(list) {
      saveList(list)
    }
  }, [list])

  useEffect(() => {
   const loaded = loadList(list) 
   setList(loaded) // toda vez que a lista recarregar os novos dados da lista devem aparecer na tela
  }, [])

  return [list, handleList, handleDelete, handleComplete, saveList, loadList]
}
