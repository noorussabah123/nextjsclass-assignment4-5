import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div>
                   <h2>Pinch of Yum</h2>
                   <ul>
                    <Link href={"/about"}>
                     <li>About</li>
                     </Link>
                     <Link href={""}>
                     <li>Recipes</li>
                     </Link>
                     <li>Contact</li>
                     <li>Blog</li>
                   </ul>
                </div>
                <div>
                    <h2>Food & Recipes</h2>
                    <ul>
                      <Link href={"/biryani-recipe"}> 
                      <li>Chicken Biryani</li>
                      </Link> 
                      <Link href={"/pizza-recipe"}>
                      <li>Pepperoni Pizza</li>
                      </Link>
                      <Link href={"/macroni-recipe"}>
                      <li>Chicken Macroni</li>
                      </Link>
                      <Link href={"/cake-recipe"}>
                      <li>Chocolate Cake</li>
                      </Link>
                      <Link href={"/shake-recipe"}>
                      <li>Strawberry Milkshake</li>
                      </Link>
                      <Link href={"/lasagna-recipe"}>
                      <li>Lasagna</li>
                      </Link>
                    </ul>
                </div>
            </div>
            <div className="allRights">
                <p className="allRightsText">&copy; 2024 Pinch of Yum All Rights Reserved.</p>
            </div>
        </footer>
    )
}
