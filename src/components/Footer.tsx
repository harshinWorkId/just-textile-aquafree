// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaRss } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // For the 'X' logo
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Footer: React.FC = () => {
    return (
        // Use bg-gray-900 for a professional "dark blue" feel
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Logo & Description */}
                    <div>
                        {/* Recreated Logo */}
                        <h2 className="text-3xl font-bold text-white mb-4">Just Textile Ltd</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Textiles are more than just fabrics. They are the invisible backbone of daily life-woven into fashion, homes, workplaces, and industries. At Just Textiles Ltd, we see textiles as a platform for innovation, sustainability, and trust.
                        </p>
                    </div>

                    {/* Column 2: About Links */}
                    <div className='flex flex-col items-center'>
                        <h3 className="text-lg font-semibold text-purple-400 mb-5 uppercase tracking-wider">
                            About
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">What We Do</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Projects</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-5 uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">AquaFree Waterless Dyeing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Innovation With Responsibility</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Advanced Machinery</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Environmental Fabric Processing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Institutional & Industrial Textiles</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-5 uppercase tracking-wider">
                            Contact Information
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <HiOutlineLocationMarker className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-purple-400" />
                                <span>23, Ambarnath, Kalyan</span>
                            </li>
                            <li className="flex items-center">
                                <HiOutlinePhone className="w-5 h-5 mr-3 flex-shrink-0 text-purple-400" />
                                <span>123-456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <HiOutlineMail className="w-5 h-5 mr-3 flex-shrink-0 text-purple-400" />
                                <span>info@yourdomain.com</span>
                            </li>
                        </ul>
                        {/* Social Icons */}
                        <div className="flex space-x-2 mt-6">
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                                <FaRss />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="text-center md:text-left">
                        Copyright &copy; 2025 Just Textile Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;