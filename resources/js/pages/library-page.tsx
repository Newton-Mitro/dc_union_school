import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface LibraryFeature {
    title: string;
    description: string;
    icon: string;
    color: 'primary' | 'secondary' | 'green' | 'orange';
}

const features: LibraryFeature[] = [
    {
        title: 'বইয়ের সমৃদ্ধ সংগ্রহ',
        description:
            'শিক্ষার্থীদের পাঠ্যজ্ঞান ও সাধারণ জ্ঞান বৃদ্ধির জন্য পাঠ্যবই, সহায়ক বই, গল্প, উপন্যাস, জীবনী এবং বিভিন্ন শিক্ষামূলক বইয়ের সংগ্রহ রয়েছে।',
        icon: 'fas fa-books',
        color: 'primary',
    },
    {
        title: 'পাঠের সুন্দর পরিবেশ',
        description:
            'নিরিবিলি ও মনোরম পরিবেশে শিক্ষার্থীরা নিয়মিত বই পড়তে এবং নিজেদের পছন্দের বিষয় সম্পর্কে জ্ঞান অর্জন করতে পারে।',
        icon: 'fas fa-book-reader',
        color: 'secondary',
    },
    {
        title: 'রেফারেন্স সুবিধা',
        description:
            'বিভিন্ন বিষয়ে অতিরিক্ত তথ্য অনুসন্ধান ও জ্ঞান সম্প্রসারণের জন্য শিক্ষার্থীদের প্রয়োজনীয় রেফারেন্স বই ব্যবহারের সুযোগ রয়েছে।',
        icon: 'fas fa-search',
        color: 'green',
    },
    {
        title: 'সৃজনশীল পাঠচর্চা',
        description:
            'গল্প, কবিতা, সাহিত্য ও বিভিন্ন সৃজনশীল বই পড়ার মাধ্যমে শিক্ষার্থীদের কল্পনাশক্তি, ভাষাগত দক্ষতা ও সৃজনশীল চিন্তাভাবনা বিকাশে উৎসাহিত করা হয়।',
        icon: 'fas fa-lightbulb',
        color: 'orange',
    },
    {
        title: 'জ্ঞান অনুসন্ধানের সুযোগ',
        description:
            'শিক্ষার্থীরা নিজেদের আগ্রহের বিষয় নির্বাচন করে বিভিন্ন বই ও তথ্যসূত্রের মাধ্যমে নতুন জ্ঞান অর্জন করতে পারে।',
        icon: 'fas fa-graduation-cap',
        color: 'primary',
    },
    {
        title: 'পাঠাভ্যাস গড়ে তোলা',
        description:
            'নিয়মিত বই পড়ার অভ্যাস তৈরি করে শিক্ষার্থীদের মননশীল, জ্ঞানী ও দায়িত্বশীল মানুষ হিসেবে গড়ে তুলতে লাইব্রেরি গুরুত্বপূর্ণ ভূমিকা পালন করে।',
        icon: 'fas fa-heart',
        color: 'secondary',
    },
];

const colorClasses = {
    primary: {
        icon: 'bg-primary/10 text-primary',
        badge: 'bg-primary/10 text-primary',
        line: 'bg-primary',
    },
    secondary: {
        icon: 'bg-secondary/10 text-secondary',
        badge: 'bg-secondary/10 text-secondary',
        line: 'bg-secondary',
    },
    green: {
        icon: 'bg-green-500/10 text-green-600',
        badge: 'bg-green-500/10 text-green-600',
        line: 'bg-green-600',
    },
    orange: {
        icon: 'bg-orange-500/10 text-orange-600',
        badge: 'bg-orange-500/10 text-orange-600',
        line: 'bg-orange-500',
    },
};

export default function Library() {
    return (
        <>
            <Head title="লাইব্রেরি" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'সুবিধাসমূহ',
                        },
                        {
                            label: 'লাইব্রেরি',
                        },
                    ]}
                    categoryIcon="fas fa-book-reader"
                    category="শিক্ষার্থীদের বিনোদন"
                    title="লাইব্রেরি"
                    subtitle={`জ্ঞান অনুসন্ধান, পাঠাভ্যাস ও সৃজনশীল চিন্তার বিকাশে আমাদের লাইব্রেরি।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            জ্ঞানের ভাণ্ডার
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            বইয়ের সঙ্গে শিক্ষার্থীদের বন্ধুত্ব
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একটি সমৃদ্ধ লাইব্রেরি শিক্ষার্থীদের পাঠ্যবইয়ের
                            বাইরেও জ্ঞান অর্জনের সুযোগ তৈরি করে। বই পড়ার মাধ্যমে
                            শিক্ষার্থীদের চিন্তাশক্তি, কল্পনাশক্তি, ভাষাগত
                            দক্ষতা এবং সৃজনশীলতা বিকশিত হয়। ঢাকা ক্রেডিট ইউনিয়ন
                            স্কুলের লাইব্রেরি শিক্ষার্থীদের নিয়মিত পাঠাভ্যাস গড়ে
                            তুলতে গুরুত্বপূর্ণ ভূমিকা পালন করে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    LIBRARY VISUAL
                ====================================================== */}
                <section className="border-y border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                                {/* Visual */}
                                <div className="relative">
                                    <div className="absolute -inset-4 rounded-3xl bg-primary/5" />

                                    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-primary/10 text-center">
                                                <i className="fas fa-book text-4xl text-primary" />

                                                <span className="mt-3 text-sm font-semibold">
                                                    বই
                                                </span>
                                            </div>

                                            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-secondary/10 text-center">
                                                <i className="fas fa-book-open text-4xl text-secondary" />

                                                <span className="mt-3 text-sm font-semibold">
                                                    পাঠচর্চা
                                                </span>
                                            </div>

                                            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-orange-500/10 text-center">
                                                <i className="fas fa-search text-4xl text-orange-600" />

                                                <span className="mt-3 text-sm font-semibold">
                                                    অনুসন্ধান
                                                </span>
                                            </div>

                                            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-green-500/10 text-center">
                                                <i className="fas fa-graduation-cap text-4xl text-green-600" />

                                                <span className="mt-3 text-sm font-semibold">
                                                    জ্ঞান
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <span className="text-sm font-semibold text-primary">
                                        আমাদের লাইব্রেরি
                                    </span>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        শিক্ষার্থীদের জ্ঞানচর্চার অন্যতম কেন্দ্র
                                    </h2>

                                    <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />

                                    <p className="mt-6 text-sm leading-7 text-foreground/70 sm:text-base">
                                        লাইব্রেরি শিক্ষার্থীদের জন্য এমন একটি
                                        জায়গা যেখানে তারা নিজেদের আগ্রহের বিষয়
                                        সম্পর্কে স্বাধীনভাবে জানতে ও শিখতে পারে।
                                        পাঠ্যবইয়ের পাশাপাশি বিভিন্ন ধরনের বই
                                        পড়ার মাধ্যমে তারা নিজেদের জ্ঞানকে আরও
                                        সমৃদ্ধ করার সুযোগ পায়।
                                    </p>

                                    <div className="mt-7 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <i className="fas fa-check text-sm" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    নিয়মিত বই পড়ার সুযোগ
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-foreground/60">
                                                    শিক্ষার্থীরা অবসর সময়ে
                                                    বিভিন্ন ধরনের বই পড়তে পারে।
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                                <i className="fas fa-check text-sm" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    শিক্ষামূলক বই
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-foreground/60">
                                                    পাঠ্যক্রমের সঙ্গে সম্পর্কিত
                                                    বিভিন্ন সহায়ক বই ব্যবহারের
                                                    সুযোগ।
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                                                <i className="fas fa-check text-sm" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    সৃজনশীল পাঠচর্চা
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-foreground/60">
                                                    গল্প, কবিতা ও সাহিত্যের
                                                    মাধ্যমে সৃজনশীলতার বিকাশ।
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURES
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-layer-group" />
                                লাইব্রেরির সুবিধাসমূহ
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                জ্ঞান ও পাঠচর্চার জন্য প্রয়োজনীয় সুবিধা
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের পড়াশোনা ও ব্যক্তিগত জ্ঞানচর্চাকে
                                আরও সমৃদ্ধ করতে লাইব্রেরিতে বিভিন্ন ধরনের সুবিধা
                                রয়েছে।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => {
                                const colors = colorClasses[feature.color];

                                return (
                                    <article
                                        key={feature.title}
                                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div
                                            className={`absolute top-0 left-0 h-1 w-full ${colors.line}`}
                                        />

                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.icon} transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <i
                                                className={`${feature.icon} text-xl`}
                                            />
                                        </div>

                                        <span
                                            className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
                                        >
                                            লাইব্রেরি সুবিধা
                                        </span>

                                        <h3 className="mt-4 text-xl font-bold">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-foreground/70">
                                            {feature.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    READING HABIT
                ====================================================== */}
                <section className="border-y border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-border bg-card p-6 text-center shadow-sm sm:p-8 md:p-10">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-book-reader text-2xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                বই পড়ি, জ্ঞান বাড়াই
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                নিয়মিত বই পড়ার অভ্যাস একজন শিক্ষার্থীর জ্ঞান,
                                ভাষা, চিন্তাশক্তি ও সৃজনশীলতা বিকাশে
                                গুরুত্বপূর্ণ ভূমিকা রাখে। আমরা শিক্ষার্থীদের বই
                                পড়ার প্রতি আগ্রহী করে তুলতে উৎসাহিত করি।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-book text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                জ্ঞানের নতুন জগতে স্বাগতম
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                বইয়ের মাধ্যমে জ্ঞান অর্জন, চিন্তার প্রসার এবং
                                ভবিষ্যতের জন্য নিজেকে প্রস্তুত করার সুযোগ তৈরি
                                করাই আমাদের লক্ষ্য।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/book-list"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-list" />
                                    বইয়ের তালিকা
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-phone-alt" />
                                    যোগাযোগ
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
