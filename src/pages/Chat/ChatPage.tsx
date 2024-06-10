
import { Chat } from "../../components/Chat/Chat"
import { NavBarEvent } from "../../components/NavBar/NavBarEvent"


export const ChatPage = () => {
    return (
        <>  
          <NavBarEvent />
          <div className="w-[90vw] mx-auto">
        <Chat />
      </div>
    </>
    )
}