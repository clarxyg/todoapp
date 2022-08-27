import { CheckSquare, Plus, Trash } from "phosphor-react";
import { useGet, useTask } from "../Hooks/useCrud";
import { SideBar } from "./Siderbar";
import { Title } from "./Title";



export function List() {
    const [list, handleList] = useGet()
    const [task, setTask] = useTask()


    return (
        <div className="App">
            <SideBar />
            <div className="container_list">
                <div className="container_title">
                    <Title title="Lista de tarefas" />
                    <h1 style={{ fontWeight: 400, fontSize: '1.5rem' }}>
                        00:00
                    </h1>
                </div>
                <div style={{ display: 'flex', marginBottom: '100px' }}>
                    <input placeholder="Digite aqui uma tarefa" onChange={event => setTask(event.target.value)}/>
                    <button className="button_list">
                        <Plus size={28} className="icon_plus" onClick={() => handleList(task)}/>
                    </button>
                </div>
                {list.map((text, index) => (
                    <div className="gap" key={text}>
                        <div className="container">
                            <div className="container_card">
                                <div className="card_list">
                                    <p style={{ paddingLeft: '15px' }}>
                                        {text}
                                    </p>
                                </div>
                            </div>
                            <div className="grid">
                                <CheckSquare size={28} className="icon" />
                                <Trash size={28} className="icon"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}   