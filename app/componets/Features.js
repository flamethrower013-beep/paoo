import React from 'react'
import { Award, CreditCard, DollarSign, HelpCircle } from "react-feather";

function Features() {
  const features = [
    {
      title: "Daily Tournaments",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Compete in PUBG, Free Fire & Ludo tournaments every day and win real rewards.",
    },
    {
      title: "Secure Wallet",
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      description: "Your earnings are stored safely in a secure, encrypted wallet.",
    },
    {
      title: "Instant Withdrawals",
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      description: "Withdraw your winnings instantly to your preferred payment method.",
    },
    {
      title: "24/7 Support",
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      description: "Our team is available round the clock to assist you whenever needed.",
    },
  ];
  return (
    <div id='Features' className='h-full flex flex-col justify-center items-center pt-[8vh]'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl text-center font-extrabold'>Why Choose Us?</h1>
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-gray-600">Experience a new level of gaming competition and rewards</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition duration-300 ">
            <div className="mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-orange">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>      
    </div>
  )
}

export default Features
