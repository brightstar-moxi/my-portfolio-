import React from 'react'

const EmailSection = () => {
  return<section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
    <div><h5 className='text-xl font-bold text-white my-2'>Let `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.s Connect</h5>
    <p className='text-[#ADB7BE] mb-4 max-w-md'>
        {" "}
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'></div>
        </div>
  </section>
//   &apos;', &lsquo;`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
}

export default EmailSection