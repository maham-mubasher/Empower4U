import { Toaster } from "react-hot-toast";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallCTA from "@/components/CallCTA";
import GoogleTagManager from "@/components/GoogleTagManager";
// import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Empower4U",
  description: "Rehabilitation Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      
      <body className="antialiased flex flex-col min-h-screen mt-10 overflow-x-hidden">
        
        <Toaster position="top-right" reverseOrder={ false } />
        <GoogleTagManager />
        <NavBar />
        {/* <PageTransition> */}
          {children}
        {/* </PageTransition> */ }
        <CallCTA/>
        <Footer />

      </body>
    </html>
  );
}
