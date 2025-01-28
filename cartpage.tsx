import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const cartItems = [
  { id: 1, name: "T-Shirt", price: 25.99, quantity: 2 },
  { id: 2, name: "Hoodie", price: 49.99, quantity: 1 },
]

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button className="mt-4">Proceed to Checkout</Button>
      </div>
    </div>
  )
}

