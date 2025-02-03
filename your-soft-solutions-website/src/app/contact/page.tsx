//import Image from 'next/image';

export default function Contact() {
    return (
        <div className="flex flex-col text-black text-center my-24 mx-5 md:mx-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold p-3">Contact Us</h1>
                <p className="text-2xl p-5">Please fill out the form below and we will get back to you as soon as possible.</p>
                <form className="flex flex-col items-center justify-center w-3/4 md:w-1/2">
                    <input type="text" placeholder="Name" className="p-2 m-2 w-full max-w-96 rounded-md bg-white/80" />
                    <input type="email" placeholder="Email" className="p-2 m-2 w-full max-w-96 rounded-md bg-white/80" />
                    <textarea placeholder="Message" className="p-2 m-2 max-w-96 w-full h-40 rounded-md bg-white/80" />
                    <button className="rounded-full bg-white/70 px-5 py-3 m-5 text-black">Submit</button>
                </form>
            </div>
        </div>
    )
}