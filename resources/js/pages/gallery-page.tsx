import { Head } from '@inertiajs/react';
import { useState } from 'react';

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    image: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'বার্ষিক ক্রীড়া অনুষ্ঠান',
        category: 'ক্রীড়া',
        image: '/images/gallery/1.jpg',
    },
    {
        id: 2,
        title: 'সাংস্কৃতিক অনুষ্ঠান',
        category: 'সাংস্কৃতিক',
        image: '/images/gallery/2.jpg',
    },
    {
        id: 3,
        title: 'বিজ্ঞান মেলা',
        category: 'বিজ্ঞান',
        image: '/images/gallery/3.jpg',
    },
    {
        id: 4,
        title: 'শিক্ষা সফর',
        category: 'শিক্ষা সফর',
        image: '/images/gallery/4.jpg',
    },
    {
        id: 5,
        title: 'পুরস্কার বিতরণী',
        category: 'পুরস্কার',
        image: '/images/gallery/5.jpg',
    },
    {
        id: 6,
        title: 'জাতীয় দিবস উদযাপন',
        category: 'জাতীয় দিবস',
        image: '/images/gallery/6.jpg',
    },
    {
        id: 7,
        title: 'শ্রেণিকক্ষ কার্যক্রম',
        category: 'শিক্ষা',
        image: '/images/gallery/7.jpg',
    },
    {
        id: 8,
        title: 'সহশিক্ষা কার্যক্রম',
        category: 'সহশিক্ষা',
        image: '/images/gallery/8.jpg',
    },
    {
        id: 9,
        title: 'শিক্ষার্থীদের দলীয় কার্যক্রম',
        category: 'সহশিক্ষা',
        image: '/images/gallery/9jpg',
    },
];

const categories = [
    'সব',
    'ক্রীড়া',
    'সাংস্কৃতিক',
    'বিজ্ঞান',
    'শিক্ষা সফর',
    'পুরস্কার',
    'জাতীয় দিবস',
    'শিক্ষা',
    'সহশিক্ষা',
];

export default function StudentGallery() {
    const [activeCategory, setActiveCategory] = useState('সব');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(
        null,
    );

    const filteredItems =
        activeCategory === 'সব'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    return (
        <>
            <Head title="স্টুডেন্টস্ গ্যালারি" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-images" />
                                আমাদের কার্যক্রম
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                স্টুডেন্টস্ গ্যালারি
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুলের বিভিন্ন শিক্ষা,
                                ক্রীড়া, সাংস্কৃতিক ও সহশিক্ষা কার্যক্রমের
                                স্মরণীয় মুহূর্তসমূহ।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    GALLERY
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-7xl">
                        {/* Section Heading */}
                        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
                            <span className="text-sm font-semibold text-primary">
                                স্মরণীয় মুহূর্ত
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                আমাদের ছবির সংগ্রহ
                            </h2>

                            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                        </div>

                        {/* =================================================
                            CATEGORY FILTER
                        ================================================== */}
                        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
                            {categories.map((category) => {
                                const active = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                                            active
                                                ? 'bg-primary text-primary-foreground shadow-md'
                                                : 'border border-border bg-card text-foreground/70 hover:border-primary hover:bg-primary/10 hover:text-primary'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>

                        {/* =================================================
                            IMAGE GRID
                        ================================================== */}
                        {filteredItems.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredItems.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setSelectedImage(item)}
                                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <i className="fas fa-search-plus text-sm" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                                            <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold">
                                                {item.category}
                                            </span>

                                            <h3 className="mt-2 text-sm font-bold sm:text-base">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                                <i className="fas fa-images text-3xl text-foreground/30" />

                                <p className="mt-4 text-sm text-foreground/60">
                                    এই বিভাগে কোনো ছবি পাওয়া যায়নি।
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-camera text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                আরও স্মরণীয় মুহূর্ত
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                আমাদের বিদ্যালয়ের বিভিন্ন কার্যক্রমের মাধ্যমে
                                শিক্ষার্থীদের সাফল্য ও আনন্দের মুহূর্তগুলো
                                সংরক্ষণ করা হয়।
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* =====================================================
                LIGHTBOX
            ====================================================== */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            aria-label="বন্ধ করুন"
                            className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                        >
                            <i className="fas fa-times" />
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-h-[80vh] w-full rounded-xl object-contain"
                        />

                        {/* Caption */}
                        <div className="mt-4 text-center text-white">
                            <span className="text-xs font-semibold text-white/60">
                                {selectedImage.category}
                            </span>

                            <h3 className="mt-1 text-lg font-bold">
                                {selectedImage.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
