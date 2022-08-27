import { useState } from "react";



export function useGet() {
   const [list, setList] = useState([])

   function handleList(task) {
    if(task != '') {
        setList([ ...list, task])
    }
   }

    return [list, handleList]
}

export function useTask() {
    const [task, setTask] = useState('')

    return [task, setTask]
}
