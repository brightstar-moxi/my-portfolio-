import React from 'react';
import GithubIcon from "../../public/icons8-github.svg";
import LinkedinIcon from "../../public/icons8-linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div><h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open.
                Whether you a question or just want to say hi, I&apos;ll try my best to get back to you!
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
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input type='email' id='email'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required
                        placeholder='brightbobo@google.com'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input type='text' id='subject'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required
                        placeholder='just say hi'
                    />
                </div>

            </form>
        </div>
    </section>
    //   &apos;', &lsquo;`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
}

export default EmailSection