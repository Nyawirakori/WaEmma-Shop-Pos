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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Full Width Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-section.jpg"
            alt="Hero section image"
            fill
            priority
            className="object-cover"
          />
          {/* Modern gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-teal-800/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Wa Emma Shop
              </span>{" "}
              POS
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Manage Inventory and Sales With Ease
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProducts}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Products
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Track Sales",
                icon: FaChartBar,
                description:
                  "Monitor your sales performance and revenue with detailed analytics and real-time insights",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                title: "Manage Inventory",
                icon: MdInventory,
                description:
                  "Keep track of your products and stock levels with automated alerts and easy management",
                color: "from-teal-500 to-teal-600",
                bgColor: "bg-teal-50",
              },
              {
                title: "Reports",
                icon: FaClock,
                description:
                  "Generate comprehensive reports and gain valuable insights to grow your business",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${item.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
