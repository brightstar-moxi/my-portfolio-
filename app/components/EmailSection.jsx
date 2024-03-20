"use client"
import React, { useState } from 'react';
import GithubIcon from "../../public/icons8-github.svg";
import LinkedinIcon from "../../public/icons8-linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.email.value,
            message: e.target.email.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/Send";

        //form the request for sending data to the server.
        const options = {
            //The method is POST because we are sending data.
            method: 'POST',
            //Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            //Body of the request is the JSON data we created above.
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log('Message sent,');
            setEmailSubmitted(true);
        }
    };
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id="contact">
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2  '></div>
            <div className='z-18'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='github.com'>
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href='linkedin.com'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input name='email' type='email' id='email' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'

                            placeholder='brightbobo@google.com'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input name='subject' type='text' id='subject'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='just say hi'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='message'
                            className='text-white block mb-2 text-sm font-medium'>
                            Message
                        </label>
                        <textarea name='message' id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Let&apos;s talk about...'
                        //  value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        //  Amet, sit adipisci recusandae earum, id ipsum provident 
                        //  placeat itaque et accusantium quis quia debitis assumenda, 
                        //  ex possimus aspernatur. Eveniet, perspiciatis tenetur!
                        //  Lorem, ipsum dolor sit amet consectetur adipisicing
                        //   elit. Officia cupiditate et officiis accusamus earum 
                        //   sequi corporis, totam animi magni ad sit, voluptates "
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {
                        // If the email was submitted successfully, show a success message.
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully
                            </p>
                        )
                    }

                </form>
            </div>
        </section>
        //   &apos;', &lsquo;`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
    )
}

export default EmailSection