import { CheckSquare, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { useCrud } from "../Hooks/useCrud";
import { SideBar } from "./Siderbar";
import { Title } from "./Title";



export function List() {
    const [list, handleList, handleDelete, handleComplete] = useCrud() // chamada de custom hook com os seus respectivos retornos
    const [task, setTask] = useState('') 


    return (
        <div className="App">
            <SideBar />
            <form className="container_list" onSubmit={(event) => event.preventDefault()}> 
                <div className="container_title">
                    <Title title="Lista de tarefas" />
                    <h1 style={{ fontWeight: 400, fontSize: '1.5rem' }}>
                        00:00
                    </h1>
                </div>
                <div style={{ display: 'flex', marginBottom: '100px' }}>
                    <input 
                    placeholder="Digite aqui uma tarefa" 
                    value={task || ''} // o valor pode ser ou task (nova tarefa) ou uma string vazia
                    onChange={event => setTask(event.target.value)} />
                    <button className="button_list">
                        {/* No onClick abaixo eu chamo duas funções, uma que atualiza o meu input para string vazia (limpando o texto) depois de enviado
                            e a função que salva a nova tarefa e atualiza a lista. */}
                        <Plus size={28} className="icon_plus" onClick={() => { setTask(''); handleList(task) }} /> 
                    </button>
                </div>
                {list.map((text, index) => (  // o método map é utilizado para percorrer um array e no react precisamos definir uma unique key para uma tag percorrida, para que browser reconheça que cada elemento é único
                    <div className="gap" key={index}>  
                        <div className="container">
                            <div className="container_card">
                                <div className="card_list">
                                    <p style={{ paddingLeft: '15px' }} className={text.isComplete ? 'complete' : ''}>
                                        {text.task}
                                    </p>
                                </div>
                            </div>
                            <div className="grid">
                                <CheckSquare size={28} className="icon" onClick={() => handleComplete(index)}/>
                                <Trash size={28} className="icon" onClick={() => handleDelete(index)}/> 
                            </div>
                        </div>
                    </div>
                ))}
                </form>
                </div>

                )
}   