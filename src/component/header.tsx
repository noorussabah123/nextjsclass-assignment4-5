import Link from "next/link"


export default function Header() {
    return (
    <div className="navBar">
        <ul className="navBtn">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
            <li>About</li>
        </Link>
        <Link href={"/recipes"}>
            <li>Recipes</li>
        </Link>
        </ul>
    </div>
    )
}