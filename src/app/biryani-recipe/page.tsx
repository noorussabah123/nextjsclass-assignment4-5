
import { Italianno } from '@next/font/google';


const italianno = Italianno({
    weight: '400', 
    subsets: ['latin'], 
});


export default function Biryani() {
    return (
        <div>
            <h1 className={`${italianno.className} mainHeading`}> 
                Pinch Of Yum
            </h1>
        <div className="flex flex-col items-center  min-h-screen slide-in-fwd-center"> 
            <div className=" p-6 max-w-lg mb-6"> 
               
               <img 
               src="/image/Biryani-Recipe.jpg" 
               alt="biryaniImage" 
               className=" w-full h-auto rounded-lg object-cover mb-4"
               />
               <h2 className="flex justify-center text-[50px] font-bold">Chicken Biryani</h2>
            </div>
            <div className="flex flex-col items-start p-6">
               <p className="text-black text-left text-[30px] ml-4 ">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio tenetur alias sit natus quas quia debitis nemo minus aspernatur quidem at laudantium porro consequuntur magni tempora voluptas, nostrum aut a deserunt, ut nisi! Exercitationem enim quam, quo velit repellendus nostrum eaque voluptatibus repellat ducimus fuga nam totam in earum!
                </p>
               </div>
        </div>
        </div>
    )
}