import { useState } from "react";



export function useCrud() {
   const [list, setList] = useState([]) // estado que inicia com um array vazio (list) e setList é uma função que atualiza esse estado, no caso, irá popular dados na minha lista

   function handleList(task) {
    if(task != '') { // utilizo da condicional 'if' para verificar se há algum valor diferente de string vazia ('') no meu input, se sim, então chamo a função setList para atualizar a minha lista com uma nova tarefa
        setList([...list, task]) // o spread operator [...list] é utilizado para pegar uma cópia do estado inicial da minha lista que nesse caso é um array vazio. em seguida eu recebo task que popula list
    }
   }

   function handleDelete(index) {
    let newList = [...list] // utilizo da variável do tipo 'let', porque [...list] irá mudar. 
    newList.splice(index, 1) // o método splice adiciona ou remove elementos do array, a sua função é substituir a matriz 
    setList(newList) // aqui eu atualizo a lista 
  }

    return [list, handleList, handleDelete] 
}

