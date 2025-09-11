// components/HowItWorksSection.tsx
export default function HowItWorksSection() {
  const steps = [
    { title: "Register", description: "Sign up your institution or business via WhatsApp." },
    { title: "List Services", description: "Add bookings, products, or services instantly." },
    { title: "Receive Payments", description: "M-Pesa integration makes transactions seamless." },
    { title: "Earn Rewards", description: "Referral and float bonuses keep engagement high." },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
