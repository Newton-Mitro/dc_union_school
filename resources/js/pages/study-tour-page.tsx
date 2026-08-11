import { Head, Link } from '@inertiajs/react';

const tourFeatures = [
    {
        icon: 'fas fa-map-marked-alt',
        title: 'শিক্ষামূলক ভ্রমণ',
        description:
            'পাঠ্যবইয়ের বাইরের বাস্তব জ্ঞান অর্জনের জন্য বিভিন্ন ঐতিহাসিক, সাংস্কৃতিক ও শিক্ষামূলক স্থানে ভ্রমণের সুযোগ।',
        color: 'primary',
    },
    {
        icon: 'fas fa-users',
        title: 'দলগত অভিজ্ঞতা',
        description:
            'সহপাঠী ও শিক্ষকদের সঙ্গে দলগতভাবে সময় কাটানোর মাধ্যমে সহযোগিতা, নেতৃত্ব ও সামাজিক দক্ষতা বৃদ্ধি।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-camera',
        title: 'স্মরণীয় মুহূর্ত',
        description:
            'শিক্ষার্থীদের জীবনের গুরুত্বপূর্ণ ও আনন্দময় মুহূর্তগুলো স্মৃতি হিসেবে সংরক্ষণের সুযোগ।',
        color: 'primary',
    },
    {
        icon: 'fas fa-lightbulb',
        title: 'বাস্তব জ্ঞান',
        description:
            'বাস্তব পরিবেশ পর্যবেক্ষণ ও অভিজ্ঞতার মাধ্যমে শ্রেণিকক্ষের শিক্ষাকে আরও কার্যকর ও অর্থবহ করে তোলা।',
        color: 'secondary',
    },
];

const tourActivities = [
    {
        icon: 'fas fa-landmark',
        title: 'ঐতিহাসিক স্থান পরিদর্শন',
        description:
            'দেশের গুরুত্বপূর্ণ ঐতিহাসিক স্থান ও স্থাপনা পরিদর্শনের মাধ্যমে শিক্ষার্থীদের ইতিহাস ও ঐতিহ্য সম্পর্কে বাস্তব ধারণা প্রদান।',
    },
    {
        icon: 'fas fa-tree',
        title: 'প্রকৃতি ও পরিবেশ',
        description:
            'প্রাকৃতিক সৌন্দর্য উপভোগের পাশাপাশি পরিবেশ সংরক্ষণ ও জীববৈচিত্র্য সম্পর্কে সচেতনতা তৈরি।',
    },
    {
        icon: 'fas fa-industry',
        title: 'শিল্প ও প্রতিষ্ঠান',
        description:
            'বিভিন্ন প্রতিষ্ঠান ও শিল্প স্থাপনা পরিদর্শনের মাধ্যমে বাস্তব কর্মপরিবেশ সম্পর্কে শিক্ষার্থীদের ধারণা প্রদান।',
    },
    {
        icon: 'fas fa-people-group',
        title: 'সাংস্কৃতিক কার্যক্রম',
        description:
            'স্থানীয় সংস্কৃতি, ঐতিহ্য ও মানুষের জীবনযাত্রা সম্পর্কে জানার মাধ্যমে শিক্ষার্থীদের সামাজিক ও সাংস্কৃতিক জ্ঞান বৃদ্ধি।',
    },
];

const benefits = [
    'বাস্তব অভিজ্ঞতার মাধ্যমে শেখার সুযোগ',
    'শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি',
    'দলগত কাজ ও নেতৃত্বের দক্ষতা বিকাশ',
    'সামাজিক ও সাংস্কৃতিক সচেতনতা বৃদ্ধি',
    'প্রকৃতি ও পরিবেশ সম্পর্কে সচেতনতা তৈরি',
    'শিক্ষার্থী-শিক্ষক সম্পর্ক আরও দৃঢ় করা',
];

export default function StudyTour() {
    return (
        <>
            <Head title="শিক্ষা সফর" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-bus" />
                                শিক্ষার্থীদের কার্যক্রম
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                শিক্ষা সফর
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                আনন্দ, অভিজ্ঞতা ও বাস্তব জ্ঞানের মাধ্যমে
                                শিক্ষার্থীদের শেখার একটি গুরুত্বপূর্ণ মাধ্যম।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            শিক্ষা সফর
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            শ্রেণিকক্ষের বাইরে শেখার নতুন অভিজ্ঞতা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-foreground/75 sm:text-base">
                            শিক্ষা শুধু শ্রেণিকক্ষ ও পাঠ্যবইয়ের মধ্যে সীমাবদ্ধ
                            নয়। বাস্তব পরিবেশ পর্যবেক্ষণ, নতুন স্থান সম্পর্কে
                            জানা এবং সহপাঠীদের সঙ্গে অভিজ্ঞতা ভাগ করে নেওয়ার
                            মাধ্যমে শিক্ষার্থীরা আরও কার্যকরভাবে শিখতে পারে। এই
                            উদ্দেশ্যে ঢাকা ক্রেডিট ইউনিয়ন স্কুলে শিক্ষা সফরের
                            আয়োজন করা হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    HERO FEATURE CARD
                ====================================================== */}
                <section className="container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                            <div className="grid md:grid-cols-2">
                                {/* Visual */}
                                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/15 p-8 sm:min-h-[350px]">
                                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10" />
                                    <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-secondary/10" />

                                    <div className="relative z-10 text-center">
                                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm sm:h-28 sm:w-28">
                                            <i className="fas fa-bus text-4xl sm:text-5xl" />
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                                            আনন্দের সঙ্গে শেখা
                                        </h3>

                                        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-foreground/65">
                                            ভ্রমণ, পর্যবেক্ষণ ও অভিজ্ঞতার
                                            মাধ্যমে শিক্ষার্থীদের জ্ঞানকে আরও
                                            সমৃদ্ধ করা।
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 md:p-10">
                                    <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
                                        শিক্ষার একটি অংশ
                                    </span>

                                    <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                        শিক্ষা সফরের মাধ্যমে বাস্তব অভিজ্ঞতা
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                                        শিক্ষা সফর শিক্ষার্থীদের নতুন পরিবেশের
                                        সঙ্গে পরিচিত হওয়ার পাশাপাশি বাস্তব
                                        জীবনের বিভিন্ন বিষয় পর্যবেক্ষণ করার
                                        সুযোগ তৈরি করে। এতে তাদের কৌতূহল,
                                        সৃজনশীলতা ও শেখার আগ্রহ বৃদ্ধি পায়।
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                                            জ্ঞান
                                        </span>

                                        <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary">
                                            অভিজ্ঞতা
                                        </span>

                                        <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                                            আনন্দ
                                        </span>

                                        <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary">
                                            নেতৃত্ব
                                        </span>
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
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-star" />
                                বিশেষ বৈশিষ্ট্য
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                শিক্ষা সফরের গুরুত্ব
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-foreground/65 sm:text-base">
                                একটি সফল শিক্ষা সফর শিক্ষার্থীদের শিক্ষা, আনন্দ
                                ও বাস্তব অভিজ্ঞতার মধ্যে সুন্দর সমন্বয় তৈরি করে।
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {tourFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div
                                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                                            feature.color === 'primary'
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-secondary/10 text-secondary'
                                        } transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <i
                                            className={`${feature.icon} text-xl`}
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITIES
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                        <span className="text-sm font-semibold text-primary">
                            সফরের কার্যক্রম
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            বিভিন্ন অভিজ্ঞতার মাধ্যমে শেখা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
                        {tourActivities.map((activity, index) => (
                            <div
                                key={activity.title}
                                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <i className={`${activity.icon} text-lg`} />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary">
                                            ০{index + 1}
                                        </span>

                                        <h3 className="font-bold">
                                            {activity.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm leading-7 text-foreground/65">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    BENEFITS
                ====================================================== */}
                <section className="bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
                            <div>
                                <span className="inline-flex rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                                    <i className="fas fa-check-circle mr-2" />
                                    শিক্ষার্থীদের উপকারিতা
                                </span>

                                <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    শিক্ষা সফর থেকে যা শেখে শিক্ষার্থীরা
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                    একটি শিক্ষা সফর শুধু আনন্দ ও বিনোদনের জন্য
                                    নয়; এটি শিক্ষার্থীদের ব্যক্তিত্ব, জ্ঞান ও
                                    সামাজিক দক্ষতা বিকাশের একটি কার্যকর মাধ্যম।
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-start gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/10 p-4 backdrop-blur-sm"
                                    >
                                        <i className="fas fa-check mt-0.5 text-secondary" />

                                        <span className="text-sm leading-6">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
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
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                <i className="fas fa-route text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                শিক্ষার পাশাপাশি আনন্দের অভিজ্ঞতা
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষা সফরের মাধ্যমে শিক্ষার্থীদের জ্ঞান,
                                সৃজনশীলতা, আত্মবিশ্বাস ও সামাজিক দক্ষতা বিকাশে
                                আমরা প্রতিশ্রুতিবদ্ধ।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/gallery"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-images" />
                                    গ্যালারি দেখুন
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-phone-alt" />
                                    যোগাযোগ করুন
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
