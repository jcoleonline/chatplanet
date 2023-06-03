import './Dashboard.css'

const Dashboard = () => {
    return (
        <main>
            <div className="app">
                Welcome, User
            </div>
            <div className="app-container">
                <div className="users-container">
                    <h2>
                        Chats
                    </h2>
                    <p>user1</p>
                    <br />
                    <p>user2</p>
                    <br />
                    <p>user3</p>
                </div>
                <div className="chatbox-message-container">
                    <div className="chatbox">
                        Im the chatbox
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