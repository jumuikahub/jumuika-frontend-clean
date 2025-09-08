export default function TestCard() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-brand">Hello Jumuika 🚀</h1>
      <p className="text-gray-600 text-center">
        If you can see rounded corners, shadows, and green brand text — Tailwind is working!
      </p>
      <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
        Test Button
      </button>
    </div>
  );
}
