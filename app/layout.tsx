import 'react-perfect-scrollbar/dist/css/styles.css'
import "/public/assets/css/style.css"
import type { Metadata } from "next"
import { Manrope, Merienda } from "next/font/google"

const manrope_init = Manrope({
    weight: ['300', '400', '500', '600', '700','800'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const merienda_init = Merienda({
    weight: ['300', '400', '500', '600', '700','800'],
    subsets: ['latin'],
    variable: "--merienda",
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Ticket Scanner",
    description: "Ticket Scanner",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${manrope_init.variable} ${merienda_init.variable}`}>
            <meta name = "Impact-Site-Verification" content = "6874b55e-ba7d-4671-a734-ec30d4fa2634" />
            <body>{children}</body>
        </html>
    )
}
