import React, { useState } from 'react';

const Login: React.FC = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const predefinedUsers = [
        { username: 'admin', password: 'admin' },
        { username: 'user', password: 'user' },
    ];
    const handleLogin = (e: React.FormEvent) => {
        // Logic to handle login
        e.preventDefault();
        const user = predefinedUsers.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
        
    };

    const handleCreateAccount = () => {
        // Logic to handle create account
    };

    const handleForgotPassword = () => {
        // Logic to handle forgot password
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCreateAccount}>Create Account</button>
            <button onClick={handleForgotPassword}>Forgot Password</button>
        </div>
    );
}