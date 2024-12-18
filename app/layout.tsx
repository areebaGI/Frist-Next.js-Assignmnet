import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarPage from "./component/Navbar";
import Link from "next/link";
import Footer from "./component/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><NavbarPage/>


       <header> 
            
             <div id="NavbarPage">
             <Link href="/"><span className="logo">web.service</span></Link>
  
            {/* <link id="logo">web.service</link> */}
          
          <Link href="/" className="hover:text-orange-700">Home</Link>
           <Link href="/about" className="hover:text-orange-700">About</Link>
          <Link href="/about/Programming" className="hover:text-orange-700">programing</Link> 
          
          <Link href="/about/jobs" className="hover:text-orange-700">jobs</Link>
          
          <Link href="/about/Contact" className="hover:text-orange-700">Contact page</Link>

          


          {/* <div className="search-bar">
      <input placeholder="search" />
      <button className="hover:bg-yellow-700">Search</button>
    </div> */}
             {/* <input placeholder="search"/><button>search</button>
             <button>search</button> */}
            
           </div>
         </header>
         <br/>  
         
        {children}
        <Footer/>
      </body>
    </html>
  );
}
