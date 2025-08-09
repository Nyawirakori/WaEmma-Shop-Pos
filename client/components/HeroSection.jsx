"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChartBar, FaClock } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

export default function HeroSection() {
  const router = useRouter();

  const handleViewProducts = () => {
    router.push("/products");
  };

  return (
    <div>
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/hero-section.jpg"
          alt="School Bus with children"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute text-center text-white px-4 space-y-4">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Welcome to Wa Emma Shop POS
          </h1>
          <h1 className="text-2xl font-medium drop-shadow-lg">
            Manage Inventory and Sales With Ease
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Track Sales",
              icon: FaChartBar,
              description: "Track Sales and Revenue",
            },
            {
              title: "Manage Inventory",
              icon: MdInventory,
              description: "Manage Your Products and Stock Levels",
            },
            {
              title: "Reports",
              icon: FaClock,
              description: "Get Timely Reports and Insights",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <item.icon className="w-10 h-10 text-yellow-500 mb-3 mx-auto" />
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
