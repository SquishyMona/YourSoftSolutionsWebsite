import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="px-10 py-5 flex text-xl bg-[#ffffff70]">
            <Image src="/logo.png" alt="Your Soft Solutions, LLC" width={75} height={75} />
            <a className="mr-auto ml-2 self-center" href="#">Your Soft Solutions, LLC</a>
            <ul className="flex flex-row">
                <li className="self-center mx-2">
                <a href="#">Home</a>
                </li>
                <li className="self-center mx-2">
                <a href="#">Services</a>
                </li>
                <li className="self-center mx-2">
                <a className='rounded-full bg-[#4FADEB] p-5 text-white' href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}