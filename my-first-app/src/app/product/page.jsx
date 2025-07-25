"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter()
    const placeOrder = () => {
        alert("Order Confirmed")
        router.push("/")
    }
  return (
    <div>
        <h1>Product Page</h1>
        <li>buy Phone</li>
        <button className='' onClick={placeOrder}>Confirm Order</button>
    </div>
  )
}

export default page