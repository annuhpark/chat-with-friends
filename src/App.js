import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="c2f952ec-70a7-4c99-9d6d-925d182b1d9d"
      userName="annuhpark"
      userSecret="Ilovecroissants11!"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;
