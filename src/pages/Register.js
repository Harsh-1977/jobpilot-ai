import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterForm from '../components/register/RegisterForm';
import RegisterBenefits from '../components/register/RegisterBenifit';

function Register() {
    return (
        <>
            <Navbar />
            <RegisterForm />
            <RegisterBenefits />
            <Footer />
        </>
    );
}

export default Register;