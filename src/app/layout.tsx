
import { Metadata } from "next";
import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/installBootstrap";
import Installgooglefonts from "./components/installgooglefonts";
import {Jua} from 'next/font/google';
import Navbar_top from './components/Navbar/navBar';
import Footer_Page from "./components/Footer/page";


const jua_font = Jua ({
  subsets: ['latin'],
  weight:  ['400'],
  variable: '--font-jua',
})
export const metadata: Metadata = {
  title:{
    
    default:"Little Start Day Care",
    template:"%s | Little Start Day Care",
  },
  description: "Little Start Day Care"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={jua_font.variable}>
        <InstallBootstrap />
        <Installgooglefonts />
        <h1 className="text-center jua mt-5 mb-5">Welcome to Little start day care</h1>
           {/*navbar*/}
        <Navbar_top />
      
        {children}

        {/*footer*/}
        <Footer_Page />






        </body>
    </html>
  )
}
