type PrimaryCTAsProps = {
  className?: string;
};

export default function PrimaryCTAs({ className }: PrimaryCTAsProps) {
  return (
    <div className={`flex gap-4 ${className || ""}`}>
      {/* CTA Buttons */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
      <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg">
        Learn More
      </button>
    </div>
  );
}
