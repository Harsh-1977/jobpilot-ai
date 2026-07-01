import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/login/LoginForm';
import LoginBenefits from '../components/login/LoginBenifits';

function Login() {
    return (
        <>
            <Navbar />
            <LoginForm />
            <LoginBenefits />
            <Footer/>
        </>
    );
}

export default Login;