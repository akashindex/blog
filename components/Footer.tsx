import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className="pt-12 pb-12 bg text-white">
            {/* Upper Section */}
            <div className="w-[90%] mx-auto border-b border-gray-700 pb-8 flex  justify-between gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <img
                        src="/images/logo copy.png"
                        className="w-20 h-20 mb-4"
                        alt="Company Logo"
                    />
                    
                </div>

                {/* Content Links */}
                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Content</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">About</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Whitepaper</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Social</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">YouTube</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Facebook</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Instagram</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">LinkedIn</li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Legal</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Privacy Policy</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Terms of Use</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 w-[90%] mx-auto flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm opacity-70">&copy; 2025</p>
                <Image
                    src="/images/pay.svg"
                    alt="Payment Methods"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Footer;
