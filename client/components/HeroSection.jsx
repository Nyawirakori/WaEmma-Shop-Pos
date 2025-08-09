"use client";

import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion';
import {FaChartBar,FaClock} from "react-icons/fa";
import {MdInventory} from "react-icons/md";

export default function HeroSection(){
    const router = useRouter();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleViewProducts = () => {
        router.push('/products');
    };

    return(
        <div>
            <h1>Welcome to Wa Emma Shop POS</h1>
            <h1>Manage Inventory and Sales With Ease</h1>

            <section className="bg-white py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        {
                            title:"Track Sales",
                            icon:FaChartBar,
                            description:"Track Sales and Revenue",
                        },
                        {
                            title:"Manage Inventory",
                            icon:MdInventory,
                            description:"Manage Your Products and Stock Levels",
                        },
                        {
                            title:"Reports",
                            icon:FaClock,
                            description:"Get Timely Reports and Insights",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-md border border-white/20 rounded-xl p-6 text-center shadow-lg">
                            <item.icon className="w-10 h-10 text-yellow-400 mb-3 mx-auto" />
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                            </motion.div>
                            ))}
                </div>
            </section>
        </div>
    );
}