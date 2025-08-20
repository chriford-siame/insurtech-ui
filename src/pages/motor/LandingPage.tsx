import React from "react";
import { motion } from "framer-motion";
import { Car, CheckCircle, Shield, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className=" text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-black"
        >
          Motor Insurance, Made Simple
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-800 max-w-2xl"
        >
          Get a personalized motor insurance quotation in minutes. Fast,
          transparent, and designed for your peace of mind.
        </motion.p>
        <motion.a
          href="/login"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Your Quote
        </motion.a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 ">
        {[
          {
            icon: <Clock className="w-10 h-10 text-blue-700 mx-auto" />,
            title: "Quick & Easy",
            desc: "No paperwork headaches. Just enter your details and get a quote instantly.",
          },
          {
            icon: <Shield className="w-10 h-10 text-blue-700 mx-auto" />,
            title: "Trusted Coverage",
            desc: "We only work with licensed, reliable insurers so you know you’re protected.",
          },
          {
            icon: <CheckCircle className="w-10 h-10 text-blue-700 mx-auto" />,
            title: "Transparent Pricing",
            desc: "No hidden fees, no surprises — just clear options to fit your budget.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            viewport={{ once: true }}
            className="p-8  rounded-xl shadow-md border text-center"
          >
            {f.icon}
            <h3 className="mt-4 text-xl font-semibold text-black">{f.title}</h3>
            <p className="mt-2 text-gray-800">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-black">
          How It Works
        </h2>
        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            "Enter Vehicle Details",
            "Compare Insurance Options",
            "Select Your Plan",
            "Get Covered Instantly",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-md border"
            >
              <div className="text-2xl font-bold text-blue-800">{i + 1}</div>
              <p className="mt-3 text-gray-800">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          Trusted by Thousands of Drivers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-800 max-w-2xl mx-auto"
        >
          Join the growing community of drivers who <br />choose
          our platform for fast, reliable motor insurance quotations.
        </motion.p>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Ready to Insure Your Vehicle?
        </motion.h2>
        <p className="mt-4 text-lg text-blue-100">
          Get your personalized motor insurance quotation today.
        </p>
        <a
          href="/login"
          className="mt-8 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          Get a Quote Now
        </a>
      </section>
    </div>
  );
}
