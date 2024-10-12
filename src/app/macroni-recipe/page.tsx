
import { Italianno } from '@next/font/google';


const italianno = Italianno({
    weight: '400', 
    subsets: ['latin'], 
});


export default function Macroni() {
    return (
        <div>
          
            <h1 className={`${italianno.className} mainHeading`}> 
                Pinch Of Yum
            </h1>
        <div className="flex flex-col items-center  min-h-screen slide-in-fwd-center"> 
            <div className=" p-6 max-w-lg mb-6"> 
               
               <img 
               src="/image/macroni-recipe.jpg" 
               alt="biryaniImage" 
               className=" w-full h-auto rounded-lg object-cover mb-4"
               />
               <h2 className="flex justify-center text-[50px] font-bold">Chicken Macroni</h2>
            </div>
            <div className="flex flex-col items-start p-6">
               <p className="text-black text-left text-[30px] ml-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis omnis at tempore, autem ea tenetur aliquam ab, officiis delectus nulla explicabo veritatis pariatur! Accusamus dolor explicabo ea quae voluptatum.
                </p>
               </div>
        </div>
        </div>
    )
}