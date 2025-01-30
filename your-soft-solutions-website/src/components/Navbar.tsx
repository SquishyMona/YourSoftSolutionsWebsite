import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="px-10 py-5 flex text-xl bg-[#ffffff70]">
            <Image src="/logo.png" alt="Your Soft Solutions Logo" width={75} height={75} className='mr-auto md:mr-0' />
            <Link className="mr-auto ml-2 self-center hidden md:flex" href="/">Your Soft Solutions, LLC</Link>
            <ul className="flex flex-row">
                <li className="self-center mx-2">
                <Link href="/">Home</Link>
                </li>
                <li className="self-center mx-2">
                <Link href="/services">Services</Link>
                </li>
                <li className="self-center mx-2">
                <Link className='rounded-full bg-[#4FADEB] p-5 text-white' href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}