import { SideBar } from "./Siderbar";
import { Title } from "./Title";


export function Pomodoro() {
    return(
       <div className="App">
        <SideBar />
        <div className="container_list">
          <Title title="Pomodoro" />
        </div>
       </div>
    )
}