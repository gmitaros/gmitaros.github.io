import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const sendMail = (e, form, setSubmitted) => {

    e.preventDefault();
    emailjs.sendForm('service_bpyotpp', 'template_c27m4li', form.current, 'nTs9ETO6utTK0ev2R')
        .then((result) => {
            setSubmitted(false)
        }, (error) => {
            setSubmitted(false)
        });
}

export default function ContactComponent() {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        setSubmitted(true)
        sendMail(e, form, setSubmitted);
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{filter: 'opacity(0.7)', border: '0px', margin: '0px'}}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467.06478104346496!2d23.76599799980593!3d38.04650846917846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a199bfb022ce09%3A0x8f94a1fcefd4e795!2zzqDOu86xz4TOtc6vzrEgzpfPgc6xzrrOu861zq_Ov8-F!5e0!3m2!1sel!2sgr!4v1666349680480!5m2!1sel!2sgr"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Neo Irakleio <br/>
                                Athens, 14121
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:gmitaros@gmail.com" className="text-indigo-400 leading-relaxed mr-6">
                                gmitaros@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <div><p className="leading-relaxed"><a href="tel:+306983612017">+30 6983612017</a></p></div>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    name="contact"
                    ref={form}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    {!submitted &&
                        (<Button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </Button>)}
                    {submitted && (<Box
                        className="justify-center	 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        sx={{display: 'flex'}}>
                        <CircularProgress color="inherit"/>
                    </Box>)}
                </form>
            </div>
        </section>
    );
}