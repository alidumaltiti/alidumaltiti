import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_DETAILS } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Maltiti Azindoo Alidu | Master Professional Record",
  description: "Portfolio of Maltiti Azindoo Alidu - Software Developer, Data Scientist, and Agriculture Professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-teal-500 selection:text-white`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="fixed inset-0 z-[-2] bg-slate-950"></div>
        
        <Navbar />
        
        <main className="min-h-screen flex flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight text-white hover:text-teal-400 transition-colors">
            MAL&lt;&gt;TITI
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
             <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
             <Link href="#contact" className="md:hidden bg-teal-500 text-slate-950 px-4 py-2 rounded-full font-medium text-sm hover:bg-teal-400 transition-colors">
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-white">Maltiti Azindoo Alidu</h3>
            <p className="mt-2 text-slate-400 max-w-sm">
              Bridging agriculture, digital innovation, and social impact through technology.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Maltiti Azindoo Alidu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
