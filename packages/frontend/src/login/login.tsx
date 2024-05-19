import "./login.css"

function LoginCard()
{
    return (
        <div>
            <div className="title">YourStories</div>
            <div className="logincard">
            <div className="name-pass">
                Username
            </div>

            <div className="input-box">
                <input type="text" placeholder="Enter your username" required></input>
            </div>

            <div className="name-pass">
                Password
            </div>

            <div className="input-box">
                <input  type="password" placeholder="Enter your password" required></input>
            </div>

            <button className="btn">Sign in</button>
            
            <div className="Signup">
                <p>Don't have an account?
                <a href="/signUp">Signup</a></p>
            </div>
        </div>
        </div>
        
    );
}

export default LoginCard;