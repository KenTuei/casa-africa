import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "immuno",
    name: "Immuno",
    desc: "Digital health and immunization management[cite: 18].",
  },
  {
    id: "seamless-hr",
    name: "SeamlessHR",
    desc: "Workforce management for African SMEs[cite: 24].",
  },
  {
    id: "debt-collection",
    name: "Debt Collection",
    desc: "Digital management for SACCOs and lenders[cite: 27].",
  },
  {
    id: "robes",
    name: "Robes",
    desc: "E-commerce platform with 3D body sizing[cite: 30].",
  },
  {
    id: "trot",
    name: "Trot",
    desc: "Smart car rental with image recognition[cite: 33].",
  },
  {
    id: "ai-disprover",
    name: "AI Disprover",
    desc: "Verifying AI-generated content authenticity[cite: 21].",
  },
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Software Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-6">{p.desc}</p>
            <Link
              to={`/products/${p.id}`}
              className="text-yellow-600 font-semibold hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
