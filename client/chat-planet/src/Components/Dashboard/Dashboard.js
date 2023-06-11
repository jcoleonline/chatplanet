import Navbar from '../Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <div className="app">
                Welcome, User
            </div>
            <div className="app-container">
                <div className="users-container">
                    <h2>
                        Chats
                    </h2>
                    <div className="horizontal-rule"></div>
                    <div className="userName">User1</div>
                    <div className="horizontal-rule"></div>
                    <div className="userName">User2</div>
                    <div className="horizontal-rule"></div>
                    <div className="userName">User3</div>
                    <div className="horizontal-rule"></div>
                </div>
                <div className="chatbox-message-container">
                    <div className="chatbox">
                        I'm the chatbox
                    </div>
                    <div className="message">
                        Message
                    </div>
                </div>

            </div>
        </main>
    )
};

export default Dashboard;