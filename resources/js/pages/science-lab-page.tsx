import { Head, Link } from '@inertiajs/react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    color: 'primary' | 'secondary';
}

const features: Feature[] = [
    {
        icon: 'fas fa-flask',
        title: 'আধুনিক ল্যাবরেটরি',
        description:
            'শিক্ষার্থীদের হাতে-কলমে বিজ্ঞান শেখার জন্য প্রয়োজনীয় বিভিন্ন উপকরণ ও পরীক্ষণ সুবিধা রয়েছে।',
        color: 'primary',
    },
    {
        icon: 'fas fa-microscope',
        title: 'ব্যবহারিক শিক্ষা',
        description:
            'পাঠ্যবইয়ের জ্ঞানকে বাস্তব অভিজ্ঞতার সঙ্গে যুক্ত করতে নিয়মিত ব্যবহারিক কার্যক্রম পরিচালনা করা হয়।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-atom',
        title: 'বিজ্ঞানভিত্তিক চিন্তা',
        description:
            'পর্যবেক্ষণ, বিশ্লেষণ, পরীক্ষা ও ফলাফল থেকে শিক্ষার্থীদের যৌক্তিক চিন্তাভাবনার বিকাশ ঘটানো হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-user-graduate',
        title: 'শিক্ষার্থীদের অংশগ্রহণ',
        description:
            'শিক্ষার্থীরা শিক্ষকদের নির্দেশনায় বিভিন্ন বৈজ্ঞানিক পরীক্ষা ও কার্যক্রমে সক্রিয়ভাবে অংশগ্রহণ করে।',
        color: 'secondary',
    },
];

const activities = [
    {
        icon: 'fas fa-vial',
        title: 'রসায়ন পরীক্ষা',
        description:
            'বিভিন্ন রাসায়নিক বিক্রিয়া, পদার্থের বৈশিষ্ট্য ও ব্যবহারিক বিষয় সম্পর্কে শিক্ষার্থীদের ধারণা দেওয়া হয়।',
    },
    {
        icon: 'fas fa-leaf',
        title: 'জীববিজ্ঞান পরীক্ষা',
        description:
            'উদ্ভিদ, প্রাণী, কোষ ও জীবজগতের বিভিন্ন বিষয় পর্যবেক্ষণ ও ব্যবহারিকভাবে শেখানো হয়।',
    },
    {
        icon: 'fas fa-bolt',
        title: 'পদার্থবিজ্ঞান পরীক্ষা',
        description:
            'আলো, শব্দ, বিদ্যুৎ, গতি ও শক্তির মতো বিষয়গুলো ব্যবহারিক পরীক্ষার মাধ্যমে বোঝানো হয়।',
    },
    {
        icon: 'fas fa-search',
        title: 'পর্যবেক্ষণ ও গবেষণা',
        description:
            'শিক্ষার্থীদের অনুসন্ধানী মনোভাব তৈরি করতে বিভিন্ন পর্যবেক্ষণ ও ছোট গবেষণামূলক কার্যক্রম পরিচালনা করা হয়।',
    },
];

export default function ScienceLab() {
    return (
        <>
            <Head title="বিজ্ঞানাগার" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-flask" />
                                আমাদের সুবিধাসমূহ
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                বিজ্ঞানাগার
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                হাতে-কলমে বিজ্ঞান শিক্ষা, পরীক্ষণ এবং
                                অনুসন্ধানমূলক কার্যক্রমের জন্য আমাদের
                                বিজ্ঞানাগার।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
                            {/* Content */}
                            <div>
                                <span className="text-sm font-semibold text-primary">
                                    বিজ্ঞান শিক্ষার বাস্তব প্রয়োগ
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    জানার পাশাপাশি করে শেখা
                                </h2>

                                <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

                                <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base">
                                    বিজ্ঞান শুধু বই পড়ে শেখার বিষয় নয়। বাস্তব
                                    পরীক্ষা-নিরীক্ষা এবং পর্যবেক্ষণের মাধ্যমে
                                    শিক্ষার্থীরা বৈজ্ঞানিক ধারণাগুলো আরও সহজে
                                    বুঝতে পারে।
                                </p>

                                <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
                                    আমাদের বিজ্ঞানাগারে শিক্ষার্থীরা বিভিন্ন
                                    ব্যবহারিক কার্যক্রমে অংশগ্রহণ করে এবং
                                    শ্রেণিকক্ষে শেখা বিষয়গুলো বাস্তবভাবে
                                    পর্যবেক্ষণ করার সুযোগ পায়।
                                </p>

                                <div className="mt-7">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                                    >
                                        <i className="fas fa-phone-alt" />
                                        যোগাযোগ করুন
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative">
                                <div className="absolute -inset-3 rounded-3xl bg-primary/5" />

                                <div className="relative rounded-3xl border border-dashed border-border bg-card p-6 shadow-sm sm:p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                            <i className="fas fa-flask text-3xl text-primary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                পরীক্ষা
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-microscope text-3xl text-secondary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                পর্যবেক্ষণ
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-atom text-3xl text-secondary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                বিজ্ঞান
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                            <i className="fas fa-lightbulb text-3xl text-primary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                উদ্ভাবন
                                            </h3>
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
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    <i className="fas fa-star" />
                                    বিশেষ বৈশিষ্ট্য
                                </span>

                                <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    আমাদের বিজ্ঞানাগারের সুবিধাসমূহ
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                    শিক্ষার্থীদের বিজ্ঞানভিত্তিক জ্ঞান ও
                                    ব্যবহারিক দক্ষতা বৃদ্ধির জন্য বিভিন্ন সুবিধা
                                    ও কার্যক্রম।
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {features.map((feature) => (
                                    <article
                                        key={feature.title}
                                        className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div
                                            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                                                feature.color === 'primary'
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'bg-secondary/10 text-secondary'
                                            }`}
                                        >
                                            <i
                                                className={`${feature.icon} text-xl`}
                                            />
                                        </div>

                                        <h3 className="mt-5 text-lg font-bold transition-colors group-hover:text-primary">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-foreground/70">
                                            {feature.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITIES
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 sm:mb-14">
                            <div className="max-w-3xl">
                                <span className="text-sm font-semibold text-primary">
                                    ব্যবহারিক কার্যক্রম
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    বিজ্ঞান শেখার বিভিন্ন ক্ষেত্র
                                </h2>

                                <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {activities.map((activity, index) => (
                                <article
                                    key={activity.title}
                                    className="group flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <i
                                            className={`${activity.icon} text-lg`}
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-primary/60">
                                                ০{index + 1}
                                            </span>

                                            <h3 className="font-bold group-hover:text-primary">
                                                {activity.title}
                                            </h3>
                                        </div>

                                        <p className="mt-2 text-sm leading-7 text-foreground/70">
                                            {activity.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
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
                                <i className="fas fa-graduation-cap text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                বিজ্ঞানমনস্ক প্রজন্ম গড়ার প্রত্যয়
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/75 sm:text-base">
                                ব্যবহারিক ও আধুনিক বিজ্ঞান শিক্ষার মাধ্যমে
                                শিক্ষার্থীদের মধ্যে অনুসন্ধিৎসা, যুক্তিবোধ,
                                সৃজনশীলতা ও সমস্যা সমাধানের দক্ষতা গড়ে তোলাই
                                আমাদের লক্ষ্য।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/computer-lab"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    <i className="fas fa-desktop" />
                                    কম্পিউটার ল্যাব
                                </Link>

                                <Link
                                    href="/multimedia"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-photo-video" />
                                    মাল্টিমিডিয়া
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
