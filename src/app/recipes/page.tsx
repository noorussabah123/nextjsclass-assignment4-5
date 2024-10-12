
import { Italianno } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';



const italianno = Italianno({
    weight: '400', 
    subsets: ['latin'], 
});

export default function Recipes() {
    return (
            <div>
              <h1  className= {`${italianno.className} mainHeading`}>Pinch Of Yum</h1>
            <div className='parentContainer'>
                <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/Biryani-Recipe.jpg" 
                alt="biryaniImage" 
                width={700}
                height={500}
                layout="responsive"
                />
            </div>      
            <h1 className='title'>Chicken Biryani</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/biryani-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/pizza-recipe.jpg" 
                alt="pizzaImage"
                width={700}
                height={500}
                layout="responsive" 
                />
            </div>      
            <h1 className='title'>Pepperoni Pizza</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/pizza-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/macroni-recipe.jpg"
                alt="macroniImage"
                width={700}
                height={500}
                layout="responsive" 
                />
            </div>      
            <h1 className='title'>Chicken Macroni</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/macroni-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/cake-recipe.jpg" 
                alt="cakeImage"
                width={700}
                height={500}
                layout="responsive" 
                />
            </div>      
            <h1 className='title'>Chocolate Cake</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/cake-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/shake-recipe.jpg" 
                alt="shakeiImage"
                width={700}
                height={500}
                layout="responsive" 
                />
            </div>      
            <h1 className='title'>Strawberry Milkshake</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/shake-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer'>
              <div className='imageContainer'>
                <Image 
                src="/image/lasagna-recipe.jpg" 
                alt="lasagnaImage"
                width={700}
                height={500}
                layout="responsive"
                />
            </div>      
            <h1 className='title'>Chicken Lasagna</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/lasagna-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>
    </div>
    </div>
     );

}