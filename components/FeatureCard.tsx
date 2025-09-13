// components/FeatureCard.tsx
import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <article className="p-6 border rounded-xl shadow-sm bg-white">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </article>
  );
}
