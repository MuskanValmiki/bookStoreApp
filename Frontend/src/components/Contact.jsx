import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Get in Touch with <span className="text-pink-500">BookStore</span>
                    </h1>
                    <p className="mt-10 text-left max-w-xl mx-auto font-semibold">
                        We'd love to hear from you! Whether you have a question about our books, services,
                        or just want to say hello, feel free to reach out.
                    </p>

                    <div className="mt-10 text-left max-w-xl mx-auto">
                        <p className="mb-4">
                            <span className="font-semibold">📍 Address:</span> 123 Book Lane, Reading City, NY 10001
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">📞 Phone:</span> +1 (555) 123-4567
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">✉️ Email:</span> contact@bookstore.com
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">⏰ Hours:</span> Mon - Fri: 9AM – 6PM | Sat: 10AM – 4PM | Sun: Closed
                        </p>
                    </div>

                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Contact;