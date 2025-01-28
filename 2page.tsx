import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Insta Merch</h1>
      <p className="text-xl mb-8">Get awesome merchandise from your favorite Instagram creators!</p>
      <Link href="/products">
        <Button size="lg">Shop Now</Button>
      </Link>
    </div>
  )
}

