import Navbar from '../Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <div className="app">
                Welcome, USER
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