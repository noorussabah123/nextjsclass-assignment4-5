import { Italianno } from '@next/font/google';
import Link from 'next/link';



const italianno = Italianno({
    weight: '400', 
    subsets: ['latin'], 
});

export default function Blog() {
    return (
            <div>
              <h1  className= {`${italianno.className} mainHeading`}>Pinch Of Yum</h1>
              <p className='mainLine'>Simple Recipes Made For real Actual Everyday Life</p>
            <div className='parentContainer'>
                <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/Biryani-Recipe.jpg" alt="biryaniImage" />
            </div>      
            <h1 className='title'>Chicken Biryani</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/biryani-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/pizza-recipe.jpg" alt="pizzaImage" />
            </div>      
            <h1 className='title'>Pepperoni Pizza</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/pizza-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/macroni-recipe.jpg" alt="macroniImage" />
            </div>      
            <h1 className='title'>Chicken Macroni</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/macroni-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/cake-recipe.jpg" alt="cakeImage" />
            </div>      
            <h1 className='title'>Chocolate Cake</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/cake-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/shake-recipe.jpg" alt="shakeiImage" />
            </div>      
            <h1 className='title'>Strawberry Milkshake</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid porro cupiditate quaerat, blanditiis cum?</p>
            <Link href={"/shake-recipe"}>
            <button className='readMore'>Read More</button>
            </Link>
    </div>

    <div className='childContainer slide-in-fwd-center'>
              <div className='imageContainer'>
                <img src="/image/lasagna-recipe.jpg" alt="lasagnaImage" />
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