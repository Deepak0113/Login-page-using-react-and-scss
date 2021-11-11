import './App.scss'

function App() {
    return (
        <div className="app">
            <div className="login__container">
                <h2>Login</h2>
                <div className="login__fields">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default App;
