import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterForm from '../components/register/RegisterForm';

function Register() {
    return (
        <>
            <Navbar />
            <RegisterForm />
            <Footer />
        </>
    );
}

export default Register;