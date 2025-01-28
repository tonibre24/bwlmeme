import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Insta Merch
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/products" className="text-gray-600 hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

