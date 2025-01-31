//import Image from 'next/image';

export default function Services() {
    return (
        <div>   
            <div className="flex flex-col text-black text-center my-36 mx-20 md:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold p-3">Services</h1>
                    <p className="text-2xl p-5">YSS provides a wide range of services, such as web services, application development, and digital marketing.</p>
                </div>
            </div>
            <div className="py-40 bg-[#4FADEB90]">
                <div className='mx-20 md:mx-36 flex flex-col items-center justify-center text-black'>
                    <h2 className="text-3xl font-bold p-3">Web Services</h2>
                    <p className="text-xl p-5">YSS provides web services, such as web design and web application development.</p>
                </div>
            </div>
            <div className="py-40 bg-[#E0773190]">
                <div className='mx-20 md:mx-36 flex flex-col items-center justify-center text-black'>
                    <h2 className="text-3xl font-bold p-3">Application Development</h2>
                    <p className="text-xl p-5">YSS provides application development services, such as mobile app development and desktop app development.</p>
                </div>
            </div>
            <div className="py-40 bg-[#4C7B3190]">
                <div className='mx-20 md:mx-36 flex flex-col items-center justify-center text-black'>
                    <h2 className="text-3xl font-bold p-3">Digital Marketing</h2>
                    <p className="text-xl p-5">YSS provides digital marketing services, such as search engine optimization &#40;SEO&#41; and social media marketing.</p>
                </div>
            </div>
        </div>
    );
}