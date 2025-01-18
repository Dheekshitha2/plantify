// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import { useNavigate } from "react-router";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    let navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const { user, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/home');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p>{error}</p>}
            </form>
            <p>
                New here? <Link to="/register">Register now</Link>
            </p>
        </div>
    );
}

export default Login;
