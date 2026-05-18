'use client'

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'


export default function Footer() {
    return (
        <footer className="bg-[#314d73] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* LOGO + SOCIAL */}
                    <div>
                        {/* <Image
              src="/rksWealth-logo2.png"
              alt="logo"
              width={90}
              height={150}
              className="bg-white p-2 rounded-md"
            /> */}

                        <Image
                            src="/rksWealth-logo2.png"
                            alt="logo"
                            width={260}
                            height={260}
                            className="object-contain scale-[1.20] -ml-12"
                        />

                        <p className="mt-6 text-[16px] leading-9 text-white/95 font-medium">
                            AMFI Registered Mutual Fund
                            Distributor ARN 146833
                        </p>

                        <h3 className="mt-8 text-1.3xl font-semibold">
                            Follow Us On
                        </h3>

                        <div className="flex gap-5 mt-6">

                            <div className="w-10 h-10 rounded-full bg-[#9abd2d] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                                <FaFacebookF size={20} color="black" />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-[#9abd2d] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                                <FaLinkedinIn size={22} color="black" />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-[#9abd2d] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                                <FaInstagram size={22} color="black" />
                            </div>

                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">
                            Quick Links
                        </h2>

                        <ul className="space-y-5 text-[16px] text-white/95 font-medium">
                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                About Us
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Contact Us
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Blogs
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Privacy Policy
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Commission Disclosures
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">
                            Our Services
                        </h2>

                        <ul className="space-y-5 text-[16px] text-white/95 font-medium">
                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Mutual Fund
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                PMS & AIF
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Insurance
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Demat Account
                            </li>

                            <li className="hover:text-[#9abd2d] cursor-pointer transition-all">
                                Loan Against Security
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-7 text-[16px] leading-10">

                            <p>
                                <span className="font-bold text-white">
                                    Phone :
                                </span>

                                <span className="text-[#9abd2d]">
                                    {' '}+91-6266330959
                                </span>
                            </p>

                            <p>
                                <span className="font-bold text-white">
                                    Email :
                                </span>

                                <span className="text-[#9abd2d]">
                                    {' '}support@rkswealth.com
                                </span>
                            </p>

                            <p>
                                <span className="font-bold text-white">
                                    Address :
                                </span>

                                <span className="text-[#9abd2d]">
                                    {' '}D-137 Maa Durga Mandir Campus,
                                    Patel Nagar, Behind Bank of Maharashtra,
                                    City Center Gwalior - 474011
                                </span>
                            </p>

                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/20 mt-16 pt-8 flex flex-col lg:flex-row justify-center text-center gap-5 font-bold text-[16px] text-white/90">

                    <p>
                        © RKS Wealth 2026. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    )
}