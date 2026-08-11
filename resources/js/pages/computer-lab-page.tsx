import { Head, Link } from '@inertiajs/react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    color: 'primary' | 'secondary';
}

const features: Feature[] = [
    {
        icon: 'fas fa-desktop',
        title: 'আধুনিক কম্পিউটার',
        description:
            'শিক্ষার্থীদের কম্পিউটার শিক্ষা ও ব্যবহারিক প্রশিক্ষণের জন্য প্রয়োজনীয় কম্পিউটার সুবিধা রয়েছে।',
        color: 'primary',
    },
    {
        icon: 'fas fa-code',
        title: 'প্রোগ্রামিং শিক্ষা',
        description:
            'শিক্ষার্থীদের যুক্তিবোধ, সমস্যা সমাধানের দক্ষতা এবং প্রযুক্তিগত চিন্তাভাবনা বিকাশে প্রোগ্রামিংয়ের সঙ্গে পরিচিত করা হয়।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-globe',
        title: 'ডিজিটাল শিক্ষা',
        description:
            'ইন্টারনেট ও বিভিন্ন ডিজিটাল রিসোর্স ব্যবহার করে শিক্ষার্থীদের আধুনিক শিক্ষার সঙ্গে পরিচিত করা হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-keyboard',
        title: 'ব্যবহারিক প্রশিক্ষণ',
        description:
            'কম্পিউটার পরিচালনা, টাইপিং, ডকুমেন্ট তৈরি, উপস্থাপনা এবং অন্যান্য প্রয়োজনীয় ডিজিটাল দক্ষতার প্রশিক্ষণ দেওয়া হয়।',
        color: 'secondary',
    },
];

const activities = [
    {
        icon: 'fas fa-laptop-code',
        title: 'কম্পিউটার প্রোগ্রামিং',
        description:
            'শিক্ষার্থীদের প্রোগ্রামিংয়ের মৌলিক ধারণা, যুক্তি এবং সমস্যা সমাধানের কৌশলের সঙ্গে পরিচিত করা হয়।',
    },
    {
        icon: 'fas fa-file-word',
        title: 'অফিস অ্যাপ্লিকেশন',
        description:
            'ডকুমেন্ট তৈরি, তথ্য উপস্থাপন, স্প্রেডশিট এবং অন্যান্য প্রয়োজনীয় অফিস সফটওয়্যার ব্যবহারের প্রশিক্ষণ দেওয়া হয়।',
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'ডিজিটাল সৃজনশীলতা',
        description:
            'ডিজিটাল কনটেন্ট, গ্রাফিক্স এবং বিভিন্ন সৃজনশীল প্রযুক্তির মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা বিকাশে উৎসাহিত করা হয়।',
    },
    {
        icon: 'fas fa-network-wired',
        title: 'ডিজিটাল সংযোগ',
        description:
            'শিক্ষার্থীদের নিরাপদ ও দায়িত্বশীলভাবে ইন্টারনেট এবং বিভিন্ন অনলাইন শিক্ষাসম্পদ ব্যবহারের ধারণা দেওয়া হয়।',
    },
];

export default function ComputerLab() {
    return (
        <>
            <Head title="কম্পিউটার ল্যাব" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-desktop" />
                                আমাদের সুবিধাসমূহ
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                কম্পিউটার ল্যাব
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                প্রযুক্তিনির্ভর শিক্ষা, কম্পিউটার প্রশিক্ষণ এবং
                                ডিজিটাল দক্ষতা অর্জনের জন্য আমাদের আধুনিক
                                কম্পিউটার ল্যাব।
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
                                    প্রযুক্তির সঙ্গে শিক্ষার সমন্বয়
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    ডিজিটাল দক্ষতায় আগামীর প্রস্তুতি
                                </h2>

                                <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

                                <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base">
                                    বর্তমান বিশ্বে প্রযুক্তিগত জ্ঞান শিক্ষার
                                    একটি গুরুত্বপূর্ণ অংশ। কম্পিউটার সম্পর্কে
                                    বাস্তব জ্ঞান শিক্ষার্থীদের ভবিষ্যৎ শিক্ষা ও
                                    কর্মজীবনের জন্য আরও প্রস্তুত করে।
                                </p>

                                <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
                                    আমাদের কম্পিউটার ল্যাবে শিক্ষার্থীরা
                                    শ্রেণিকক্ষের শিক্ষার পাশাপাশি বিভিন্ন
                                    ব্যবহারিক কার্যক্রমের মাধ্যমে কম্পিউটার ও
                                    ডিজিটাল প্রযুক্তি ব্যবহারের সুযোগ পায়।
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
                                            <i className="fas fa-desktop text-3xl text-primary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                কম্পিউটার
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-code text-3xl text-secondary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                প্রোগ্রামিং
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-globe text-3xl text-secondary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                ইন্টারনেট
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                            <i className="fas fa-lightbulb text-3xl text-primary" />

                                            <h3 className="mt-3 text-sm font-bold">
                                                প্রযুক্তি
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
                                    কম্পিউটার ল্যাবের সুবিধাসমূহ
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                    শিক্ষার্থীদের প্রযুক্তিগত জ্ঞান ও ডিজিটাল
                                    দক্ষতা বৃদ্ধির জন্য বিভিন্ন সুবিধা ও
                                    কার্যক্রম।
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
                        <div className="mb-10 max-w-3xl sm:mb-14">
                            <span className="text-sm font-semibold text-primary">
                                ব্যবহারিক কার্যক্রম
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                প্রযুক্তি শিক্ষার বিভিন্ন ক্ষেত্র
                            </h2>

                            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
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
                    DIGITAL SKILLS
                ====================================================== */}
                <section className="bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid items-center gap-10 md:grid-cols-2">
                                <div>
                                    <span className="text-sm font-semibold text-primary-foreground/70">
                                        ভবিষ্যতের প্রস্তুতি
                                    </span>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        ডিজিটাল দক্ষতা, নতুন সম্ভাবনা
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                        প্রযুক্তির দ্রুত পরিবর্তনশীল বিশ্বের
                                        সঙ্গে তাল মিলিয়ে শিক্ষার্থীদের প্রয়োজনীয়
                                        ডিজিটাল দক্ষতা অর্জনের সুযোগ তৈরি করা
                                        আমাদের অন্যতম লক্ষ্য।
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <div className="rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
                                        <i className="fas fa-brain text-2xl" />

                                        <p className="mt-2 text-sm font-semibold">
                                            যুক্তিবোধ
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
                                        <i className="fas fa-puzzle-piece text-2xl" />

                                        <p className="mt-2 text-sm font-semibold">
                                            সমস্যা সমাধান
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
                                        <i className="fas fa-lightbulb text-2xl" />

                                        <p className="mt-2 text-sm font-semibold">
                                            সৃজনশীলতা
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
                                        <i className="fas fa-rocket text-2xl" />

                                        <p className="mt-2 text-sm font-semibold">
                                            উদ্ভাবন
                                        </p>
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
                                <i className="fas fa-graduation-cap text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                প্রযুক্তিবান্ধব প্রজন্ম গড়ার প্রত্যয়
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/75 sm:text-base">
                                আধুনিক প্রযুক্তি শিক্ষার মাধ্যমে শিক্ষার্থীদের
                                জ্ঞান, দক্ষতা, সৃজনশীলতা ও সমস্যা সমাধানের
                                সক্ষমতা বৃদ্ধি করাই আমাদের লক্ষ্য।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/science-lab"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    <i className="fas fa-flask" />
                                    বিজ্ঞানাগার
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
