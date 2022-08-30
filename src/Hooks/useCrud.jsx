import { useState } from "react";



export function useCrud() {
   const [list, setList] = useState([]) // estado que inicia com um array vazio (list) e setList é uma função que atualiza esse estado, no caso, irá popular dados na minha lista

   function handleList(task) {
    const newTask = {
      task,               // agora newTask é um objeto que contém task e isComplete tendo false como default
      isComplete: false
    }
    if(task != '') { // utilizo da condicional 'if' para verificar se há algum valor diferente de string vazia ('') no meu input, se sim, então chamo a função setList para atualizar a minha lista com uma nova tarefa
        setList([...list, newTask]) // o spread operator [...list] é utilizado para pegar uma cópia do estado inicial da minha lista que nesse caso é um array vazio. em seguida eu recebo task que popula list
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

    return [list, handleList, handleDelete, handleComplete] 
}

