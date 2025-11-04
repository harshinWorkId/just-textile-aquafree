"use client";
import React from "react";
import Navbar from "./Navbar2";
const certificates = [
    {
        id: 1,
        title: "SCOPE CERTIFICATE",
        desc: "Control Union Certifications certifies",
        image: "/assets/certificates/cer1img.png",
        pdf: "/assets/certificates/cer1.pdf",
    },
    {
        id: 2,
        title: "Certificate of Completion",
        desc: "Hereby certifies",
        image: "/assets/certificates/cer2img.png",
        pdf: "/assets/certificates/cer3.pdf",
    },
    {
        id: 3,
        title: "Certificate",
        desc: "OEKO-TEX STANDARD 100",
        image: "/assets/certificates/cer3img.png",
        pdf: "/assets/certificates/cer4.pdf",
    },
    {
        id: 4,
        title: "Report",
        desc: "Performance InCheck Report",
        image: "/assets/certificates/cer4img.png",
        pdf: "/assets/certificates/cer5.pdf",
    },
    {
        id: 4,
        title: "SCOPE CERTIFICATE",
        desc: "Control Union Certifications",
        image: "/assets/certificates/cer5img.png",
        pdf: "/assets/certificates/cer2.pdf",
    },
];


const certificate = () => {
    const handleViewPdf = (pdfUrl: string) => {
        window.open(pdfUrl, "_blank");
    };

    return (

        <div>

            <Navbar></Navbar>
            <div className="bg-gray-100 py-10 px-6 mt-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Certificates
                </h2>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-52 object-fill"
                            />

                            <div className="p-5 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                    {cert.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4">{cert.desc}</p>

                                <button
                                    onClick={() => handleViewPdf(cert.pdf)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default certificate;
