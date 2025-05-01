import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="main_container">
                <h1 className="heading">Privacy Policy</h1>
                <p className="sub-heading">Last updated March 01, 2025</p>
            </section>
            <section className="section_container">
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div>
                        <h3 className='text-30-bold'>1. Introduction</h3>
                        <p>Welcome to CreamiVerse! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.</p>
                    </div>
                    <br />
                    <div>
                        <h3 className='text-30-bold'>2. Information We Collect</h3>
                        <ul>
                            <li><span className='font-semibold'>Social Media Provider Data:</span> If you sign up with Google, we will recieve your email address, name, and profile image.</li>
                            <li><span className='font-semibold'>User-Generated Content:</span> Recipes, comments, and any other content you submit.</li>
                            <li><span className='font-semibold'>Cookies:</span> We use cookies to save your log in session and allow you to pick up where you left off the next time you visit.</li>
                        </ul>
                    </div>
                    <br />
                    <div>
                        <h3 className='text-30-bold'>1. Introduction</h3>
                        <p>Welcome to CreamiVerse! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.</p>
                    </div>
                    <br />
                    <div>
                        <h3 className='text-30-bold'>1. Introduction</h3>
                        <p>Welcome to CreamiVerse! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page