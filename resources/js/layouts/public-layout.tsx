import { ArrowUp, Mail } from 'lucide-react';
import {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useState,
} from 'react';
import type { PropsWithChildren } from 'react';

import Footer from './parts/footer';
import Header from './parts/header';

interface ScrollProps {
    scrollFromTop: boolean;
}

export default function PublicLayout({ children }: PropsWithChildren) {
    const [scrollFromTop, setScrollFromTop] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Scroll detection
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleScroll = () => {
            setScrollFromTop(window.scrollY > 160);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Pass scrollFromTop to page component
    |--------------------------------------------------------------------------
    */

    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement<ScrollProps>(child)) {
            return cloneElement(child, {
                scrollFromTop,
            });
        }

        return child;
    });

    /*
    |--------------------------------------------------------------------------
    | Scroll to top
    |--------------------------------------------------------------------------
    */

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Floating contact links
    |--------------------------------------------------------------------------
    */

    const socialLinks = [
        {
            href: 'https://wa.me/8801712345678',
            label: 'WhatsApp',
            bg: 'bg-[#25D366]',
            icon: <i className="fab fa-whatsapp text-xl" aria-hidden="true" />,
            external: true,
        },
        {
            href: 'https://m.me/DCnewsbd',
            label: 'Messenger',
            bg: 'bg-gradient-to-br from-blue-500 to-purple-600',
            icon: (
                <i
                    className="fab fa-facebook-messenger text-xl"
                    aria-hidden="true"
                />
            ),
            external: true,
        },
        {
            href: 'mailto:info@example.com',
            label: 'Email',
            bg: 'bg-red-500',
            icon: (
                <Mail className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            ),
            external: false,
        },
    ];

    return (
        <section className="font-shurjo relative flex min-h-screen flex-col bg-background text-foreground">
            <Header scrollFromTop={scrollFromTop} />

            {/* ================================================================
                MAIN CONTENT
            ================================================================ */}

            <main className="flex-1 antialiased">{childrenWithProps}</main>

            {/* ================================================================
                FLOATING CONTACT BUTTONS
            ================================================================ */}

            <div
                className="fixed top-1/2 right-3 z-50 flex -translate-y-1/2 flex-col gap-3 sm:right-5"
                aria-label="Contact links"
            >
                {socialLinks.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        aria-label={item.label}
                        className="group relative flex items-center justify-end"
                    >
                        <span className="pointer-events-none absolute right-14 hidden rounded-md bg-black px-3 py-1 text-sm whitespace-nowrap text-white opacity-0 shadow transition-all duration-300 group-hover:opacity-100 sm:block">
                            {item.label}
                        </span>

                        <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-12 sm:w-12 ${item.bg}`}
                        >
                            {item.icon}
                        </span>
                    </a>
                ))}
            </div>

            {/* ================================================================
                FOOTER
            ================================================================ */}

            <Footer />

            {/* ================================================================
                SCROLL TO TOP
            ================================================================ */}

            {scrollFromTop && (
                <button
                    type="button"
                    onClick={handleScrollUp}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                    className="fixed right-4 bottom-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg sm:right-10 sm:h-12 sm:w-12"
                >
                    <ArrowUp
                        className="h-5 w-5"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    />
                </button>
            )}
        </section>
    );
}
