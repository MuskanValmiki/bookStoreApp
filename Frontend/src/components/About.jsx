import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center text-gray-300">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        About <span className="text-pink-400">BookStore</span>
                    </h1>
                    <p className="mt-10 text-left max-w-xl mx-auto">
                        Welcome to BookStore, your go-to destination for an extensive selection of books 
                        from every genre imaginable. Whether you're a fan of fiction, non-fiction, academic texts, 
                        or rare collectibles, we aim to fuel your love for reading and lifelong learning.
                    </p>
                    <p className="mt-10 text-left max-w-xl mx-auto">
                        Founded in 2022, BookStore started as a small corner shop and has now grown into 
                        a thriving online platform serving thousands of book lovers globally. We’re committed 
                        to promoting literacy, supporting local authors, and making reading accessible to everyone.
                    </p>
                    <p className="mt-10 text-left max-w-xl mx-auto">
                        Our team is made up of passionate readers, just like you. We host events, 
                        book signings, and community programs to encourage the joy of reading.
                    </p>

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

export default About;
