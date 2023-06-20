import Navbar from '../Navbar/Navbar';
import Logout from '../Navbar/logoutNavbar';
import './Dashboard.css';
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    const username = location?.state?.username;

    return (
        <main>
            <Logout />
            <div className="app">
        Welcome, {username}
      </div>
            <div className="app-container">
                <div className="users-container">
                    <div className="chats-text"
                    style={{textAlign:"center"}}>
                        <h2>
                            Chats
                            <div className="horizontal-rule"></div>
                        </h2>
                    </div>
                    <div className="user-list">
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User1</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User2</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User3</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User1</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User2</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User3</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User1</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User2</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User3</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User1</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User2</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User3</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User1</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User2</div>
                        {/* <div className="horizontal-rule"></div> */}
                        <div className="userName">User3</div>
                        {/* <div className="horizontal-rule"></div> */}
                    </div>

                </div>
                <div className="chatbox-message-container">

                    <div className="chatbox">
                        <div className="message-received">{`Good morning!! Good morning!! Good morning!! Good morning!! Good morning!!`}</div>
                        <div className="message-sent">{`Good morning!! Good morning!! Good morning!! Good morning!! Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                        <div className="message-received">{`Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                        <div className="message-received">{`Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                        <div className="message-received">{`Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                        <div className="message-received">{`Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                        <div className="message-received">{`Good morning!!`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-sent">{`Hey, good morning! how are you?`}</div>
                        <div className="message-received">{`I'm doing well thxxxx!`}</div>
                    </div>
                    <div className="message-and-send">
                        <textarea className="message" placeholder='Enter message, then press "Return" or send button...' />
                        {/* <Button variant="success" className='send-button'>Send</Button> */}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Dashboard;