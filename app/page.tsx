import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <Hero />
            <About />
            <Skills />
            <Contact />
        </main>
    );
}
