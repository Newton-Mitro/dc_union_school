import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function HeroSection() {
    const images = [
        '/images/gallery/1.jpg',
        '/images/gallery/2.jpg',
        '/images/gallery/3.jpg',
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) =>
                current === images.length - 1 ? 0 : current + 1,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative min-h-[550px] overflow-hidden text-white md:min-h-[620px]">
            {/* =====================================================
                BACKGROUND IMAGES
            ====================================================== */}
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url("${image}")`,
                    }}
                />
            ))}

            {/* =====================================================
                DARK OVERLAY
            ====================================================== */}
            <div className="absolute inset-0 bg-black/55" />

            {/* =====================================================
                COLOR OVERLAY
            ====================================================== */}
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="relative z-10 container mx-auto flex min-h-[550px] items-center px-4 py-16 md:min-h-[620px] md:py-24">
                <div className="max-w-3xl">
                    <span className="mb-5 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                        ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                    </span>

                    <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                        জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে
                        <span className="mt-2 block text-secondary">
                            আগামীর প্রজন্ম গড়ার প্রত্যয়
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
                        যুগোপযোগী শিক্ষা আমাদের লক্ষ্য; আত্মনির্ভরশীল দেশ আমাদের
                        স্বপ্ন।
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/admission-info"
                            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
                        >
                            ভর্তি তথ্য
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            আমাদের সম্পর্কে
                        </Link>
                    </div>
                </div>
            </div>

            {/* =====================================================
                SLIDER INDICATORS
            ====================================================== */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`ছবি ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 ${
                            index === activeIndex
                                ? 'w-8 bg-secondary'
                                : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                    />
                ))}
            </div>

            {/* =====================================================
                SCROLL INDICATOR
            ====================================================== */}
            <div className="absolute right-6 bottom-6 z-20 hidden items-center gap-2 text-xs text-white/70 md:flex">
                <span>Scroll</span>

                <i className="fas fa-chevron-down animate-bounce" />
            </div>
        </section>
    );
}
