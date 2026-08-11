import { Head, Link } from '@inertiajs/react';

const multimediaFeatures = [
    {
        icon: 'fas fa-chalkboard',
        title: 'মাল্টিমিডিয়া ক্লাস',
        description:
            'ডিজিটাল কনটেন্ট, ছবি, ভিডিও ও উপস্থাপনার মাধ্যমে শিক্ষার্থীদের জন্য আকর্ষণীয় ও সহজবোধ্য পাঠদান।',
        color: 'primary',
    },
    {
        icon: 'fas fa-video',
        title: 'ভিডিও শিক্ষা',
        description:
            'বিভিন্ন শিক্ষামূলক ভিডিও ও ভিজ্যুয়াল কনটেন্ট ব্যবহার করে জটিল বিষয়গুলো সহজভাবে উপস্থাপন করা হয়।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-projector',
        title: 'প্রজেক্টর সুবিধা',
        description:
            'পাঠদানকে আরও কার্যকর ও ইন্টার‌্যাক্টিভ করতে আধুনিক প্রজেকশন সুবিধা ব্যবহার করা হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-laptop',
        title: 'ডিজিটাল কনটেন্ট',
        description:
            'শিক্ষার্থীদের বয়স ও পাঠ্যক্রমের সঙ্গে সামঞ্জস্যপূর্ণ বিভিন্ন ডিজিটাল শিক্ষাসামগ্রী ব্যবহার করা হয়।',
        color: 'secondary',
    },
];

const multimediaActivities = [
    {
        icon: 'fas fa-presentation-screen',
        title: 'ডিজিটাল উপস্থাপনা',
        description:
            'পাঠের বিভিন্ন বিষয় ছবি, চার্ট, অ্যানিমেশন ও উপস্থাপনার মাধ্যমে শিক্ষার্থীদের সামনে তুলে ধরা হয়।',
    },
    {
        icon: 'fas fa-film',
        title: 'শিক্ষামূলক ভিডিও',
        description:
            'বিষয়ভিত্তিক শিক্ষামূলক ভিডিও ব্যবহার করে শিক্ষার্থীদের শেখার অভিজ্ঞতাকে আরও সমৃদ্ধ করা হয়।',
    },
    {
        icon: 'fas fa-images',
        title: 'ভিজ্যুয়াল লার্নিং',
        description:
            'ছবি ও গ্রাফিক্সের মাধ্যমে শিক্ষার্থীদের বিষয়বস্তু বুঝতে এবং মনে রাখতে সহায়তা করা হয়।',
    },
    {
        icon: 'fas fa-users',
        title: 'ইন্টার‌্যাক্টিভ শিক্ষা',
        description:
            'শিক্ষার্থীদের সক্রিয় অংশগ্রহণ নিশ্চিত করতে প্রযুক্তিনির্ভর বিভিন্ন শিক্ষামূলক কার্যক্রম পরিচালনা করা হয়।',
    },
];

export default function Multimedia() {
    return (
        <>
            <Head title="মাল্টিমিডিয়া" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-photo-video" />
                                বিদ্যালয়ের সুবিধাসমূহ
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                মাল্টিমিডিয়া
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                প্রযুক্তিনির্ভর শিক্ষার মাধ্যমে পাঠদানকে আরও
                                সহজ, আকর্ষণীয় ও কার্যকর করার আধুনিক ব্যবস্থা।
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
                            ডিজিটাল শিক্ষা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            প্রযুক্তির মাধ্যমে আরও আনন্দময় শিক্ষা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            বর্তমান যুগে প্রযুক্তি শিক্ষার একটি গুরুত্বপূর্ণ
                            অংশ। মাল্টিমিডিয়া প্রযুক্তির মাধ্যমে শিক্ষার্থীরা
                            ছবি, ভিডিও, অ্যানিমেশন ও ডিজিটাল কনটেন্টের সাহায্যে
                            পাঠ্যবিষয়কে আরও সহজে বুঝতে পারে। আমাদের বিদ্যালয়ে
                            প্রযুক্তিনির্ভর শিক্ষাদানের মাধ্যমে শিক্ষার্থীদের
                            শেখার অভিজ্ঞতাকে আরও সমৃদ্ধ করার চেষ্টা করা হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    FEATURE HIGHLIGHT
                ====================================================== */}
                <section className="container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
                        <div className="grid items-center md:grid-cols-[180px_1fr]">
                            <div className="flex justify-center p-8 md:p-10">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary-foreground/15 ring-8 ring-primary-foreground/10">
                                    <i className="fas fa-photo-video text-5xl" />
                                </div>
                            </div>

                            <div className="px-6 pb-8 text-center md:px-8 md:py-10 md:text-left">
                                <span className="text-sm font-semibold text-primary-foreground/80">
                                    আধুনিক শিক্ষাব্যবস্থা
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    শ্রেণিকক্ষে প্রযুক্তির ব্যবহার
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                    মাল্টিমিডিয়া প্রযুক্তির সাহায্যে
                                    শিক্ষার্থীদের জন্য পাঠদানকে আরও
                                    ইন্টার‌্যাক্টিভ, আকর্ষণীয় ও বাস্তবধর্মী করার
                                    উদ্যোগ নেওয়া হয়েছে।
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURES
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-layer-group" />
                                মাল্টিমিডিয়া সুবিধা
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                শিক্ষায় প্রযুক্তির গুরুত্বপূর্ণ ভূমিকা
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                আধুনিক প্রযুক্তির বিভিন্ন সুবিধা ব্যবহার করে
                                শিক্ষার্থীদের শেখার প্রক্রিয়াকে আরও কার্যকর করা
                                হয়।
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {multimediaFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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

                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
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
                            প্রযুক্তিনির্ভর কার্যক্রম
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            মাল্টিমিডিয়ার মাধ্যমে শেখার অভিজ্ঞতা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
                        {multimediaActivities.map((activity, index) => (
                            <div
                                key={activity.title}
                                className="group flex items-start gap-5 rounded-2xl border border-dashed border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                    <i className={`${activity.icon} text-xl`} />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <h3 className="text-lg font-bold">
                                            {activity.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm leading-7 text-foreground/70">
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
                <section className="border-t border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                                <div>
                                    <span className="text-sm font-semibold text-primary">
                                        শিক্ষার্থীদের জন্য
                                    </span>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        মাল্টিমিডিয়া শিক্ষার উপকারিতা
                                    </h2>

                                    <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />

                                    <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                                        প্রযুক্তির ব্যবহার শিক্ষার্থীদের শেখার
                                        প্রতি আগ্রহ বৃদ্ধি করে এবং বিভিন্ন জটিল
                                        বিষয়কে সহজভাবে বুঝতে সহায়তা করে।
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        {[
                                            'শিক্ষার্থীদের মনোযোগ বৃদ্ধি',
                                            'কঠিন বিষয় সহজভাবে বোঝানো',
                                            'বাস্তবভিত্তিক শেখার সুযোগ',
                                            'সৃজনশীল চিন্তার বিকাশ',
                                            'প্রযুক্তির সঙ্গে পরিচিতি',
                                        ].map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="flex items-center gap-3 text-sm"
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                    <i className="fas fa-check text-xs" />
                                                </span>

                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative">
                                    <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                                <i className="fas fa-video text-2xl text-primary" />

                                                <h3 className="mt-3 font-bold">
                                                    ভিডিও
                                                </h3>

                                                <p className="mt-1 text-xs text-foreground/60">
                                                    শিক্ষামূলক কনটেন্ট
                                                </p>
                                            </div>

                                            <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                                <i className="fas fa-images text-2xl text-secondary" />

                                                <h3 className="mt-3 font-bold">
                                                    ছবি
                                                </h3>

                                                <p className="mt-1 text-xs text-foreground/60">
                                                    ভিজ্যুয়াল শিক্ষা
                                                </p>
                                            </div>

                                            <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                                <i className="fas fa-laptop text-2xl text-secondary" />

                                                <h3 className="mt-3 font-bold">
                                                    প্রযুক্তি
                                                </h3>

                                                <p className="mt-1 text-xs text-foreground/60">
                                                    ডিজিটাল শিক্ষা
                                                </p>
                                            </div>

                                            <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                                <i className="fas fa-chalkboard-teacher text-2xl text-primary" />

                                                <h3 className="mt-3 font-bold">
                                                    ক্লাস
                                                </h3>

                                                <p className="mt-1 text-xs text-foreground/60">
                                                    ইন্টার‌্যাক্টিভ পাঠদান
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
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-graduation-cap text-2xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                প্রযুক্তির সঙ্গে এগিয়ে চলা
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                আধুনিক প্রযুক্তির সর্বোত্তম ব্যবহার নিশ্চিত করে
                                শিক্ষার্থীদের ভবিষ্যৎ পৃথিবীর জন্য প্রস্তুত করাই
                                আমাদের লক্ষ্য।
                            </p>

                            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/computer-lab"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-desktop" />
                                    কম্পিউটার ল্যাব
                                </Link>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-info-circle" />
                                    আমাদের সম্পর্কে
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
