import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            
            <div className='home-container'>
                <img className='home-logo' src='./images/logo.png' />

                <div className='home-snippet1'>
                    <h1>Chat with everyone around the planet</h1>
                    
                    <p>ChatPlanet makes it easy to connect with others and communicate around the globe.</p>

                    <div className='home-btns'>
                    <button className='home-btn signUp'>Sign up</button>
                    <button className='home-btn login'>Login</button>
                    </div>
                
                </div>

                <div className='home-images'>
                    <img src='https://images.unsplash.com/photo-1611301040660-6ed87bd2d752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRleHRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/' />
                    <img src='https://images.unsplash.com/photo-1608574847817-2fd378dc9481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHRleHRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/' />
                    <img src='https://images.unsplash.com/photo-1613633285921-1956d075ffe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRleHRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/' />
                </div>

                <div className='home-snippet2'>
                    <h1>Stress free international chatting, all in one place</h1>
                    
                    <p>Send messages and media files all in one workspace. Control who can join with invites only access, data encryption and data export.</p>
                </div>

            </div>
        </div>
    )
};

export default Home;
