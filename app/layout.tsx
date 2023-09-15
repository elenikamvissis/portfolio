import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Eleni Kamvissis',
    description: 'My portfolio website'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className={montserrat.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
