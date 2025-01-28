import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "T-Shirt", price: 25.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Hoodie", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Cap", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Mug", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

