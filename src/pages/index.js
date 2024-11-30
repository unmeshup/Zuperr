import React from 'react';
import Navbar from '../Components/Navbar';
import RegistrationForm from '../Components/RegistrationForm';
import Footer from '../Components/Footer';
import WhatsAppPopup from '../Components/WhatsAppPopup';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Zuperr</h1>
        <RegistrationForm />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Home;
