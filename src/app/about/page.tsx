import { Italianno } from '@next/font/google';
import Image from 'next/image';

const italianno = Italianno({
    weight: '400',
    subsets: ['latin'],
});

export default function About() {
    return (
        <div>
            <h1 className={`${italianno.className} mainHeading`}>
                Pinch Of Yum
            </h1>
            <h2 className="text-center text-[25px] sm:text-[30px] md:text-[35px] font-bold">
                About Pinch Of Yum
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-10">
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[700px] h-auto mb-8 lg:mb-16">
                    <Image 
                    src="/image/food-pic.jpg" 
                    alt="foodBlogPic" 
                    width={700}
                    height={500}
                    layout="responsive"
                    />
                </div>
                <div className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[800px] mb-8 lg:mb-16 text-justify">
                    <p>
                        Welcome to Pinch of Yum a space where my love for cooking meets creativity. Here, I share simple yet delicious recipes that anyone can make at home. Whether you're a beginner or a seasoned cook you'll find something exciting to try. Let's explore flavors together one dish at a time!
                    </p>
                </div>
            </div>
        </div>
    );
}
