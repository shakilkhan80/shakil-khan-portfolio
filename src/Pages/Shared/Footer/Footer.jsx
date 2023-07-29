import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 border border-spacing-3 text-base-content rounded">
            <div className='text-white grid grid-cols-1 lg:grid-cols-2 w-full gap-10 '>
                <div className='w-3/4'>
                    <div className='my-10 text-2xl  font-medium'>
                        <p className='text-center'>
                            Looking for an opportunity. If you have any idea or Freelance Project, my inbox is always open. As well as if you have any query or advice please share with me.

                        </p>
                    </div>
                    <p className='mb-5'>Follow Me On :</p>
                    <div>
                        <div className="grid justify-center grid-flow-col gap-5">
                            <a className='text-3xl' href='https://web.facebook.com/profile.php?id=100007310385697'><FaFacebookSquare /> </a>
                            <a className='text-3xl' href='https://github.com/shakilkhan80' ><FaGithubSquare /></a>
                            <a className='text-3xl' href='https://www.linkedin.com/in/shakil-khan-6b27b7273/' > <ImLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div id='contact' className='w-1/2'>
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl text-white">Your Name</span>
                                </label>
                                <input type="text" placeholder="enter your name" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl text-white">Your Email</span>
                                </label>
                                <input type="text" placeholder="enter your email" className="input  text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl text-white">Your Message</span>
                                </label>
                                <input type="text" placeholder="leave your message" className="input  text-black input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn font-bold text-xl text-white bg-[#226762]">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;