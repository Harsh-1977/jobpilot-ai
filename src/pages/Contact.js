import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import FAQ from '../components/contact/FAQ';
import CTA from '../components/contact/CTA';

function Contact() {
    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <FAQ />
            <CTA />
            <Footer/>
        </>
    );
}
export default Contact;