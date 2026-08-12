import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

const games = [
    {
        icon: 'fas fa-table-tennis-paddle-ball',
        title: 'টেবিল টেনিস',
        description:
            'দ্রুত সিদ্ধান্ত গ্রহণ, মনোযোগ ও হাত-চোখের সমন্বয় উন্নত করতে টেবিল টেনিস একটি চমৎকার ইনডোর খেলা।',
        color: 'primary',
    },
    {
        icon: 'fas fa-chess',
        title: 'দাবা',
        description:
            'দাবা শিক্ষার্থীদের কৌশলগত চিন্তা, ধৈর্য, পরিকল্পনা ও সমস্যা সমাধানের দক্ষতা বিকাশে সহায়তা করে।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-circle-dot',
        title: 'ক্যারম',
        description:
            'ক্যারম আনন্দের পাশাপাশি শিক্ষার্থীদের মনোযোগ, নির্ভুলতা ও হাত-চোখের সমন্বয় বৃদ্ধি করে।',
        color: 'primary',
    },
    {
        icon: 'fas fa-puzzle-piece',
        title: 'বুদ্ধিবৃত্তিক খেলা',
        description:
            'বিভিন্ন ধাঁধা ও বুদ্ধিবৃত্তিক খেলাধুলার মাধ্যমে শিক্ষার্থীদের চিন্তাশক্তি ও সৃজনশীলতা বৃদ্ধি করা হয়।',
        color: 'secondary',
    },
];

const benefits = [
    {
        icon: 'fas fa-brain',
        title: 'মানসিক দক্ষতা',
        description:
            'দাবা ও বুদ্ধিবৃত্তিক খেলাগুলো শিক্ষার্থীদের চিন্তা ও সমস্যা সমাধানের দক্ষতা বাড়ায়।',
    },
    {
        icon: 'fas fa-eye',
        title: 'মনোযোগ বৃদ্ধি',
        description:
            'খেলাধুলার মাধ্যমে দীর্ঘ সময় মনোযোগ ধরে রাখার সক্ষমতা তৈরি হয়।',
    },
    {
        icon: 'fas fa-users',
        title: 'সামাজিক দক্ষতা',
        description:
            'সহপাঠীদের সঙ্গে খেলাধুলার মাধ্যমে সহযোগিতা, সৌহার্দ্য ও পারস্পরিক সম্মান বৃদ্ধি পায়।',
    },
    {
        icon: 'fas fa-heart',
        title: 'আনন্দ ও বিনোদন',
        description:
            'পড়াশোনার পাশাপাশি আনন্দদায়ক পরিবেশে সময় কাটানোর সুযোগ তৈরি হয়।',
    },
];

const activities = [
    'ইনডোর গেম প্রতিযোগিতা',
    'দাবা প্রতিযোগিতা',
    'ক্যারম প্রতিযোগিতা',
    'টেবিল টেনিস অনুশীলন',
    'বুদ্ধিবৃত্তিক গেম',
    'শিক্ষার্থী-শিক্ষক বন্ধুত্বপূর্ণ ম্যাচ',
];

export default function IndoorGames() {
    return (
        <>
            <Head title="ইনডোর গেমস" />

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
                            label: 'ইনডোর গেমস',
                        },
                    ]}
                    categoryIcon="fas fa-gamepad"
                    category="শিক্ষার্থীদের বিনোদন"
                    title="ইনডোর গেমস"
                    subtitle={`আনন্দ, মনোযোগ, বুদ্ধিমত্তা ও বন্ধুত্বপূর্ণ প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের বিকাশ।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            ইনডোর গেমস
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            খেলাধুলায় আনন্দ, দক্ষতায় উন্নতি
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-foreground/75 sm:text-base">
                            শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের পাশাপাশি অবসর
                            সময়কে আনন্দময় ও ফলপ্রসূ করতে ইনডোর গেমসের
                            গুরুত্বপূর্ণ ভূমিকা রয়েছে। বিভিন্ন ইনডোর খেলাধুলার
                            মাধ্যমে শিক্ষার্থীরা মনোযোগ, ধৈর্য, কৌশল, নেতৃত্ব ও
                            পারস্পরিক সহযোগিতার মতো গুরুত্বপূর্ণ দক্ষতা অর্জন
                            করে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    FEATURE BANNER
                ====================================================== */}
                <section className="container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <div className="grid md:grid-cols-2">
                            {/* Visual */}
                            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/15 p-8 sm:min-h-[360px]">
                                <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-secondary/10" />

                                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-primary/10" />

                                <div className="relative z-10 text-center">
                                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm sm:h-28 sm:w-28">
                                        <i className="fas fa-gamepad text-4xl sm:text-5xl" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                                        খেলাধুলার মাধ্যমে শেখা
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-foreground/65">
                                        প্রতিযোগিতা, আনন্দ ও অভিজ্ঞতার মাধ্যমে
                                        শিক্ষার্থীদের আত্মবিশ্বাস ও দক্ষতা
                                        বৃদ্ধি।
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 md:p-10">
                                <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
                                    সহশিক্ষা কার্যক্রম
                                </span>

                                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                    সুস্থ বিনোদনের একটি সুন্দর মাধ্যম
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                                    ইনডোর গেমস শিক্ষার্থীদের পড়াশোনার চাপ থেকে
                                    কিছুটা স্বস্তি দেওয়ার পাশাপাশি তাদের
                                    বুদ্ধিবৃত্তিক ও সামাজিক দক্ষতা উন্নয়নে
                                    সহায়তা করে। বন্ধুত্বপূর্ণ প্রতিযোগিতার
                                    মাধ্যমে শিক্ষার্থীরা জয়-পরাজয়কে ইতিবাচকভাবে
                                    গ্রহণ করতেও শেখে।
                                </p>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-primary/5 p-3">
                                        <i className="fas fa-brain text-primary" />

                                        <p className="mt-2 text-xs font-semibold">
                                            বুদ্ধিবৃত্তিক বিকাশ
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-secondary/5 p-3">
                                        <i className="fas fa-users text-secondary" />

                                        <p className="mt-2 text-xs font-semibold">
                                            দলগত দক্ষতা
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    GAMES
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-puzzle-piece" />
                                আমাদের খেলাধুলা
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                                বিভিন্ন ধরনের ইনডোর গেমস
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-foreground/65 sm:text-base">
                                শিক্ষার্থীদের বয়স ও আগ্রহ অনুযায়ী বিভিন্ন
                                আনন্দদায়ক ও বুদ্ধিবৃত্তিক খেলাধুলার সুযোগ।
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {games.map((game) => (
                                <div
                                    key={game.title}
                                    className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div
                                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                                            game.color === 'primary'
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-secondary/10 text-secondary'
                                        } transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <i
                                            className={`${game.icon} text-2xl`}
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {game.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                                        {game.description}
                                    </p>

                                    <div
                                        className={`mx-auto mt-5 h-1 w-10 rounded-full ${
                                            game.color === 'primary'
                                                ? 'bg-primary'
                                                : 'bg-secondary'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    BENEFITS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                        <span className="text-sm font-semibold text-primary">
                            উপকারিতা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            ইনডোর গেমস কেন গুরুত্বপূর্ণ?
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <i className={`${benefit.icon} text-lg`} />
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-foreground/65">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITIES
                ====================================================== */}
                <section className="bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-10 md:grid-cols-2 md:items-center">
                                <div>
                                    <span className="inline-flex rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                                        <i className="fas fa-trophy mr-2" />
                                        আমাদের কার্যক্রম
                                    </span>

                                    <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
                                        খেলাধুলার পাশাপাশি প্রতিযোগিতা
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                        শিক্ষার্থীদের আগ্রহ ও প্রতিভা বিকাশের
                                        জন্য নিয়মিত অনুশীলন, প্রতিযোগিতা এবং
                                        বিভিন্ন বন্ধুত্বপূর্ণ খেলাধুলার আয়োজন
                                        করা হয়।
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {activities.map((activity, index) => (
                                        <div
                                            key={activity}
                                            className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/10 p-4 backdrop-blur-sm"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <span className="text-sm">
                                                {activity}
                                            </span>
                                        </div>
                                    ))}
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
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                <i className="fas fa-gamepad text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                আনন্দের সঙ্গে শিখি, খেলি ও এগিয়ে যাই
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                ইনডোর গেমসের মাধ্যমে শিক্ষার্থীদের প্রতিভা,
                                সৃজনশীলতা, মনোযোগ ও আত্মবিশ্বাস বিকাশে ঢাকা
                                ক্রেডিট ইউনিয়ন স্কুল প্রতিশ্রুতিবদ্ধ।
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
