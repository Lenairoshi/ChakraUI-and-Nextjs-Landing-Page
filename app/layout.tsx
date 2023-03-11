"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Astra Technologies ',
  description: 'Astra Technologies is your IT Tech company for your solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><ChakraProvider>
        <Navbar />
        {children}
        <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
