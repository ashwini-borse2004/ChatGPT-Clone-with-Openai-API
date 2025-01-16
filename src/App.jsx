
import './App.css';
import logo from './assets/chatgpt.svg';
import addbtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg"
import userIcon from "./assets/user-icon.png";
import gptLogo from "./assets/chatgptLogo.svg"
import sendbtn from "./assets/send.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={logo} alt="" className="logo" />
            <span className='brand'>ChatGPT</span>
          
          </div>
          <button className='midbtn'><img src={addbtn} alt="addbtn" className='addbtn'/>New Chat</button>
          <br />

          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="msgIcon" className='msg'/>What is programming?</button>
            <br />
            <button className="query"><img src={msgIcon} alt="msgIcon" className='msg'/>Learn AI Feactures?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="home" className='listitemsImg'/>Home</div>
          <div className="listItems"><img src={saved} alt="saved" className='listitemsImg'/>Saved</div>
          <div className="listItems"><img src={rocket} alt="rocket" className='listitemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImage" src={userIcon} alt="usericon" /><p className='txt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo magni excepturi autem labore culpa tempore voluptatum incidunt laudantium aperiam non!
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImage" src={gptLogo} alt="usericon"  /><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem quisquam dolorum numquam id asperiores qui, soluta ipsam, corrupti quasi quia optio iusto fuga sequi architecto, nam quo facilis necessitatibus laboriosam dolorem! Deleniti ipsum perferendis magni, aspernatur autem inventore excepturi pariatur asperiores itaque earum, qui sunt ea laboriosam dicta a possimus quae quis amet. Doloribus consequuntur, odit maiores modi et omnis maxime mollitia corporis quaerat. Voluptatibus veniam cupiditate quas saepe eveniet unde molestias commodi. In dicta distinctio nam natus. Facere ipsum, alias ea vel aspernatur exercitationem? Eaque commodi unde deserunt nostrum id at recusandae cupiditate incidunt qui facilis, laboriosam dolore.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className='send'><img src={sendbtn} alt="Send" /></button>
          </div>
        </div>
        <p>ChatGPT can make mistakes. Check info before procede</p>
      </div>
    </div>
  );
}

export default App;
