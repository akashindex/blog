import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="pt-12 pb-12 bg text-white">

            <div className="w-[90%] mx-auto border-b border-gray-700 pb-8 flex  justify-between gap-8">

                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <Image
                        src="/images/logo copy.png"
                        className="w-20 h-20 mb-4"
                        alt="Company Logo"
                        width={80}  
                        height={80} 
                    />

                </div>


                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Content</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">About</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Whitepaper</li>
                    </ul>
                </div>


                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Social</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">YouTube</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">Facebook</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">Instagram</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">LinkedIn</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">Pinterest</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">Reddit</Link>
                        </li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">
                            <Link href="#">Tumblr</Link>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%]">
                    <h2 className="text-lg font-semibold mb-4">Legal</h2>
                    <ul className="space-y-2">
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Privacy Policy</li>
                        <li className="opacity-70 hover:opacity-100 cursor-pointer">Terms of Use</li>
                    </ul>
                </div>
            </div>

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
