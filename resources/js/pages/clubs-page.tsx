import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface Club {
    title: string;
    description: string;
    icon: string;
    color: 'primary' | 'secondary' | 'green' | 'orange';
}

const clubs: Club[] = [
    {
        title: 'বিজ্ঞান ক্লাব',
        description:
            'বিজ্ঞান ও প্রযুক্তির প্রতি শিক্ষার্থীদের আগ্রহ সৃষ্টি এবং তাদের সৃজনশীল চিন্তাভাবনা ও গবেষণামূলক দক্ষতা বিকাশে বিজ্ঞান ক্লাব গুরুত্বপূর্ণ ভূমিকা পালন করে।',
        icon: 'fas fa-flask',
        color: 'primary',
    },
    {
        title: 'ডিবেটিং ক্লাব',
        description:
            'যুক্তিভিত্তিক চিন্তা, আত্মবিশ্বাস, বক্তব্য উপস্থাপন এবং সমসাময়িক বিষয় সম্পর্কে শিক্ষার্থীদের সচেতনতা বৃদ্ধির জন্য ডিবেটিং ক্লাব নিয়মিত কার্যক্রম পরিচালনা করে।',
        icon: 'fas fa-comments',
        color: 'secondary',
    },
    {
        title: 'সাংস্কৃতিক ক্লাব',
        description:
            'বাংলা সংস্কৃতি, সাহিত্য, সংগীত, নৃত্য ও সৃজনশীল শিল্পচর্চার মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশ এবং সাংস্কৃতিক মূল্যবোধ গড়ে তোলাই এই ক্লাবের অন্যতম লক্ষ্য।',
        icon: 'fas fa-music',
        color: 'orange',
    },
    {
        title: 'সাহিত্য ক্লাব',
        description:
            'পড়াশোনার পাশাপাশি বই পড়া, গল্প, কবিতা, প্রবন্ধ ও সৃজনশীল লেখালেখির মাধ্যমে শিক্ষার্থীদের ভাষা ও সাহিত্যচর্চায় উৎসাহিত করা হয়।',
        icon: 'fas fa-book-open',
        color: 'green',
    },
    {
        title: 'কম্পিউটার ক্লাব',
        description:
            'তথ্যপ্রযুক্তির ব্যবহার, কম্পিউটার দক্ষতা, ডিজিটাল শিক্ষা এবং প্রযুক্তিনির্ভর সৃজনশীল কর্মকাণ্ডে শিক্ষার্থীদের দক্ষ করে তুলতে কম্পিউটার ক্লাব কাজ করে।',
        icon: 'fas fa-laptop-code',
        color: 'primary',
    },
    {
        title: 'ক্রীড়া ক্লাব',
        description:
            'শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের পাশাপাশি দলীয় চেতনা, নেতৃত্ব, শৃঙ্খলা এবং প্রতিযোগিতামূলক মনোভাব গড়ে তুলতে ক্রীড়া কার্যক্রম পরিচালনা করা হয়।',
        icon: 'fas fa-futbol',
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

export default function Clubs() {
    return (
        <>
            <Head title="ক্লাব" />

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
                            label: 'ক্লাব',
                        },
                    ]}
                    categoryIcon="fas fa-users"
                    category="বিদ্যালয়ের সুবিধাসমূহ"
                    title="ক্লাব"
                    subtitle={`শিক্ষার্থীদের প্রতিভা, সৃজনশীলতা, নেতৃত্ব ও দক্ষতা বিকাশে বিভিন্ন ক্লাব কার্যক্রম।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            সহশিক্ষা কার্যক্রম
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            শিক্ষার পাশাপাশি প্রতিভা বিকাশ
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একটি শিশুর পরিপূর্ণ বিকাশের জন্য শুধু পাঠ্যবইয়ের
                            শিক্ষা যথেষ্ট নয়। শিক্ষার্থীদের সৃজনশীলতা, নেতৃত্ব,
                            যোগাযোগ দক্ষতা, দলীয় চেতনা এবং আত্মবিশ্বাস বিকাশের
                            সুযোগ তৈরি করতে ঢাকা ক্রেডিট ইউনিয়ন স্কুলে বিভিন্ন
                            ক্লাব ও সহশিক্ষা কার্যক্রম পরিচালনা করা হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    CLUBS
                ====================================================== */}
                <section className="border-y border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-10 text-center sm:mb-14">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    <i className="fas fa-layer-group" />
                                    আমাদের ক্লাবসমূহ
                                </span>

                                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                    আগ্রহ থেকে দক্ষতার পথে
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {clubs.map((club) => {
                                    const colors = colorClasses[club.color];

                                    return (
                                        <article
                                            key={club.title}
                                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            {/* Top decorative line */}
                                            <div
                                                className={`absolute top-0 left-0 h-1 w-full ${colors.line}`}
                                            />

                                            {/* Icon */}
                                            <div
                                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.icon} transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <i
                                                    className={`${club.icon} text-xl`}
                                                />
                                            </div>

                                            {/* Badge */}
                                            <span
                                                className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
                                            >
                                                সহশিক্ষা কার্যক্রম
                                            </span>

                                            {/* Title */}
                                            <h3 className="mt-4 text-xl font-bold">
                                                {club.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="mt-3 text-sm leading-7 text-foreground/70">
                                                {club.description}
                                            </p>

                                            {/* Bottom decoration */}
                                            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-foreground/50">
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${colors.line}`}
                                                />
                                                শিক্ষার্থীদের অংশগ্রহণ
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    BENEFITS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                            {/* Content */}
                            <div>
                                <span className="text-sm font-semibold text-primary">
                                    ক্লাব কার্যক্রমের গুরুত্ব
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    শিক্ষার্থীদের পরিপূর্ণ বিকাশে ক্লাবের ভূমিকা
                                </h2>

                                <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />

                                <p className="mt-6 text-sm leading-7 text-foreground/70 sm:text-base">
                                    ক্লাব কার্যক্রম শিক্ষার্থীদের নিজেদের আগ্রহ
                                    ও প্রতিভা আবিষ্কার করার সুযোগ দেয়। একই সঙ্গে
                                    তাদের মধ্যে দায়িত্ববোধ, নেতৃত্বের গুণাবলি
                                    এবং পারস্পরিক সহযোগিতার মানসিকতা তৈরি করে।
                                </p>

                                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <i className="fas fa-lightbulb text-sm" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                সৃজনশীলতা
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-foreground/60">
                                                নতুন চিন্তা ও সৃজনশীলতার বিকাশ।
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                            <i className="fas fa-user-tie text-sm" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                নেতৃত্ব
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-foreground/60">
                                                নেতৃত্ব ও দায়িত্ববোধ তৈরির
                                                সুযোগ।
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                                            <i className="fas fa-users text-sm" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                দলীয় কাজ
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-foreground/60">
                                                সহযোগিতা ও দলগত দক্ষতা বৃদ্ধি।
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                                            <i className="fas fa-star text-sm" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                আত্মবিশ্বাস
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-foreground/60">
                                                আত্মবিশ্বাস ও উপস্থাপনা দক্ষতা
                                                বৃদ্ধি।
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-primary/5" />

                                <div className="relative rounded-3xl border border-dashed border-border bg-card p-6 shadow-sm sm:p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl bg-primary/10 p-6 text-center">
                                            <i className="fas fa-flask text-3xl text-primary" />

                                            <p className="mt-3 text-sm font-semibold">
                                                বিজ্ঞান
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-6 text-center">
                                            <i className="fas fa-comments text-3xl text-secondary" />

                                            <p className="mt-3 text-sm font-semibold">
                                                বিতর্ক
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-orange-500/10 p-6 text-center">
                                            <i className="fas fa-music text-3xl text-orange-600" />

                                            <p className="mt-3 text-sm font-semibold">
                                                সংস্কৃতি
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-green-500/10 p-6 text-center">
                                            <i className="fas fa-futbol text-3xl text-green-600" />

                                            <p className="mt-3 text-sm font-semibold">
                                                ক্রীড়া
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <i className="fas fa-users text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                শিক্ষার্থীদের প্রতিভা বিকাশে আমাদের অঙ্গীকার
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের পড়াশোনার পাশাপাশি তাদের নিজস্ব
                                প্রতিভা ও আগ্রহ বিকাশের জন্য আমরা একটি আনন্দময় ও
                                সহযোগিতামূলক পরিবেশ নিশ্চিত করতে কাজ করে যাচ্ছি।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-info-circle" />
                                    আমাদের সম্পর্কে
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
