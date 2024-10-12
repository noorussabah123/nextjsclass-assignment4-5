import { Italianno } from '@next/font/google';
import Image from 'next/image';

const italianno = Italianno({
    weight: '400',
    subsets: ['latin'],
});

export default function Biryani() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
            
            <h1 className={`${italianno.className} mainHeading`}>
                Pinch Of Yum
            </h1>

            <div className="flex flex-col items-center">
                <div className="p-4 sm:p-6 max-w-full sm:max-w-lg mb-6">
                
                    <Image
                        src="/image/macroni-recipe.jpg"
                        alt="biryaniImage"
                        width={700}
                        height={500}
                        layout="responsive"
                        className="w-full h-auto rounded-lg object-cover mb-4"
                    />

                
                    <h2 className="text-center text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold">
                        Chicken Macroni
                    </h2>
                </div>

                <div className="flex flex-col items-start p-4 sm:p-6">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-left text-black ml-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio tenetur alias sit natus quas quia debitis nemo minus aspernatur quidem at laudantium porro consequuntur magni tempora voluptas, nostrum aut a deserunt, ut nisi! Exercitationem enim quam, quo velit repellendus nostrum eaque voluptatibus repellat ducimus fuga nam totam in earum!
                    </p>
                </div>
            </div>
        </div>
    );
}
