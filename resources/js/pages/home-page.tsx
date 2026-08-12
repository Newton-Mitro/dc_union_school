import { Head, Link } from '@inertiajs/react';
import { HeroSection } from './hero-secton';

export default function Home() {
    return (
        <>
            <Head title="ঢাকা ক্রেডিট ইউনিয়ন স্কুল" />

            <HeroSection />

            {/* =========================================================
                LATEST NOTICE
            ========================================================= */}
            <section className="bg-background">
                <div className="container mx-auto">
                    <div className="flex overflow-hidden">
                        <div className="relative z-10 flex shrink-0 items-center gap-2 bg-secondary px-4 py-3 font-bold whitespace-nowrap text-secondary-foreground md:px-6">
                            <i className="fas fa-bolt animate-pulse" />
                            <span>সর্বশেষ বিজ্ঞপ্তি</span>
                        </div>

                        <div className="w-full overflow-hidden bg-primary py-3 text-primary-foreground">
                            <div className="animate-marquee flex w-max items-center gap-12 px-8 whitespace-nowrap hover:paused">
                                <Link
                                    href="/notices"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <i className="fas fa-circle text-[7px]" />
                                    <span>
                                        বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা
                                        হয়েছে
                                    </span>
                                </Link>

                                <Link
                                    href="/admission-info"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <i className="fas fa-circle text-[7px]" />
                                    <span>
                                        ২০২৬ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু
                                    </span>
                                </Link>

                                <Link
                                    href="/examination-schedule"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <i className="fas fa-circle text-[7px]" />
                                    <span>
                                        আগামী ১৫ আগস্ট জাতীয় শোক দিবস উপলক্ষে
                                        বিশেষ কর্মসূচি
                                    </span>
                                </Link>

                                <Link
                                    href="/notices/4"
                                    className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
                                >
                                    <i className="fas fa-file-alt text-xs text-accent" />

                                    <span className="font-medium">
                                        শিক্ষার্থীদের মাসিক বেতন ও অন্যান্য ফি
                                        জমাদানের বিজ্ঞপ্তি
                                    </span>
                                </Link>

                                <Link
                                    href="/notices/5"
                                    className="flex items-center gap-2 transition-opacity hover:underline hover:opacity-80"
                                >
                                    <i className="fas fa-users text-xs text-accent" />

                                    <span className="font-medium">
                                        অভিভাবক সমাবেশের সময়সূচী ও প্রয়োজনীয়
                                        নির্দেশনা
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ABOUT
            ========================================================= */}
            <section className="bg-background">
                <div className="container mx-auto px-4 py-16 md:py-20">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        <div>
                            <span className="text-sm font-semibold text-primary">
                                আমাদের সম্পর্কে
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                শিক্ষার মাধ্যমে আলোকিত ভবিষ্যৎ
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল একটি আধুনিক ও
                                মূল্যবোধভিত্তিক শিক্ষা প্রতিষ্ঠান। শিক্ষার্থীদের
                                জ্ঞান অর্জনের পাশাপাশি নৈতিকতা, শৃঙ্খলা,
                                সৃজনশীলতা ও মানবিক মূল্যবোধ বিকাশে আমরা
                                প্রতিশ্রুতিবদ্ধ।
                            </p>

                            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                আমাদের লক্ষ্য হলো শিক্ষার্থীদের এমনভাবে গড়ে
                                তোলা, যাতে তারা ভবিষ্যতের চ্যালেঞ্জ মোকাবিলা করে
                                সমাজ ও দেশের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখতে
                                পারে।
                            </p>

                            <Link
                                href="/about"
                                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                            >
                                বিস্তারিত জানুন
                                <i className="fas fa-arrow-right text-xs" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Purple */}
                            <div className="rounded-2xl border border-dashed border-primary/30 bg-card p-6 transition hover:border-primary">
                                <i className="fas fa-graduation-cap text-2xl text-primary" />

                                <h3 className="mt-4 font-bold">
                                    মানসম্মত শিক্ষা
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    আধুনিক ও কার্যকর শিক্ষা ব্যবস্থা।
                                </p>
                            </div>

                            {/* Yellow */}
                            <div className="rounded-2xl border border-dashed border-accent/60 bg-card p-6 transition hover:border-accent">
                                <i className="fas fa-users text-2xl text-yellow-600" />

                                <h3 className="mt-4 font-bold">দক্ষ শিক্ষক</h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ।
                                </p>
                            </div>

                            {/* Orange */}
                            <div className="rounded-2xl border border-dashed border-secondary/40 bg-card p-6 transition hover:border-secondary">
                                <i className="fas fa-flask text-2xl text-secondary" />

                                <h3 className="mt-4 font-bold">
                                    আধুনিক সুবিধা
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    বিজ্ঞান ও প্রযুক্তিনির্ভর শিক্ষা পরিবেশ।
                                </p>
                            </div>

                            {/* Green */}
                            <div className="rounded-2xl border border-dashed border-green-500/40 bg-card p-6 transition hover:border-green-500">
                                <i className="fas fa-heart text-2xl text-green-600" />

                                <h3 className="mt-4 font-bold">মূল্যবোধ</h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    নৈতিকতা ও মানবিকতার বিকাশ।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PRINCIPAL MESSAGE
            ========================================================= */}
            <section className="bg-card">
                <div className="container mx-auto px-4 py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            শুভেচ্ছা বার্তা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            প্রধান শিক্ষকের বাণী
                        </h2>

                        <div className="mt-8 rounded-3xl border border-dashed border-primary/30 bg-background p-8">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                <i className="fas fa-user-tie text-3xl text-primary" />
                            </div>

                            <p className="mt-6 text-sm leading-8 text-muted-foreground sm:text-base">
                                বর্তমান পরিবর্তনশীল বিশ্বে শুধু পাঠ্যবইয়ের জ্ঞান
                                যথেষ্ট নয়। ঢাকা ক্রেডিট ইউনিয়ন স্কুলের লক্ষ্য
                                হলো শিক্ষার্থীদের সৃজনশীলতা, নৈতিকতা,
                                প্রযুক্তিগত দক্ষতা ও মানবিক মূল্যবোধে সমৃদ্ধ করে
                                গড়ে তোলা। আমরা চাই, শিক্ষার্থীরা ভালো ফলাফলের
                                পাশাপাশি সমস্যা সমাধানে দক্ষ, দায়িত্বশীল ও আদর্শ
                                নাগরিক হিসেবে গড়ে উঠুক। তাই মুখস্থবিদ্যার
                                পরিবর্তে ব্যবহারিক ও অভিজ্ঞতাভিত্তিক শিক্ষার
                                মাধ্যমে তাদের সুপ্ত প্রতিভা বিকাশে আমরা গুরুত্ব
                                দিই। ঢাকা ক্রেডিট ইউনিয়ন স্কুল হলো “দি খ্রীষ্টান
                                কো-অপারেটিভ ক্রেডিট ইউনিয়ন লিঃ, ঢাকা”-এর একটি
                                সামাজিক প্রকল্প। আমাদের মূলমন্ত্র—“যুগোপযোগী
                                শিক্ষা আমাদের লক্ষ্য; আত্মনির্ভরশীল দেশ আমাদের
                                স্বপ্ন।” এই লক্ষ্য অর্জনে আমরা প্রতিষ্ঠালগ্ন
                                থেকেই নিরলসভাবে কাজ করে যাচ্ছি।
                            </p>

                            <p className="mt-5 font-bold text-primary">
                                প্রধান শিক্ষক
                            </p>

                            <span className="text-sm text-muted-foreground">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ACADEMIC
            ========================================================= */}
            <section className="bg-background">
                <div className="container mx-auto px-4 py-16">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold text-primary">
                            একাডেমিক
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            আমাদের একাডেমিক কার্যক্রম
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                            শিক্ষার্থীদের একাডেমিক ও সৃজনশীল বিকাশের জন্য
                            বিভিন্ন কার্যক্রম পরিচালনা করা হয়।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Book */}
                        <Link
                            href="/book-list"
                            className="group rounded-2xl border border-dashed border-primary/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                        >
                            <i className="fas fa-book text-3xl text-primary transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">বই এর তালিকা</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                শ্রেণিভিত্তিক বই ও পাঠ্যসামগ্রী।
                            </p>
                        </Link>

                        {/* Syllabus */}
                        <Link
                            href="/syllabus"
                            className="group rounded-2xl border border-dashed border-green-500/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
                        >
                            <i className="fas fa-book-open text-3xl text-green-600 transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">পাঠ্যসূচি</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                বিভিন্ন শ্রেণির পাঠ্যসূচি।
                            </p>
                        </Link>

                        {/* Class Routine */}
                        <Link
                            href="/class-routine"
                            className="group rounded-2xl border border-dashed border-secondary/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-md"
                        >
                            <i className="fas fa-calendar-check text-3xl text-secondary transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">ক্লাস রুটিন</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                শ্রেণিভিত্তিক ক্লাস রুটিন।
                            </p>
                        </Link>

                        {/* Examination */}
                        <Link
                            href="/examination-schedule"
                            className="group rounded-2xl border border-dashed border-orange-500/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-md"
                        >
                            <i className="fas fa-calendar-alt text-3xl text-orange-500 transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">পরীক্ষার সময়সূচী</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                পরীক্ষার সময়সূচী ও নির্দেশনা।
                            </p>
                        </Link>

                        {/* Class Test */}
                        <Link
                            href="/class-test-routine"
                            className="group rounded-2xl border border-dashed border-primary/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                        >
                            <i className="fas fa-clipboard-list text-3xl text-primary transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">
                                ক্লাস টেস্ট রুটিন
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                ক্লাস টেস্টের সময়সূচী।
                            </p>
                        </Link>

                        {/* Notice */}
                        <Link
                            href="/notices"
                            className="group rounded-2xl border border-dashed border-green-500/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
                        >
                            <i className="fas fa-bell text-3xl text-green-600 transition-transform group-hover:scale-110" />

                            <h3 className="mt-5 font-bold">বিজ্ঞপ্তি</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                গুরুত্বপূর্ণ সকল বিজ্ঞপ্তি।
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CHAIRMAN MESSAGE
            ========================================================= */}
            <section className="bg-card">
                <div className="container mx-auto px-4 py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-secondary">
                            শুভেচ্ছা বার্তা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            সভাপতির বার্তা
                        </h2>

                        <div className="mt-8 rounded-3xl border border-dashed border-secondary/40 bg-background p-8">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
                                <i className="fas fa-user-tie text-3xl text-secondary" />
                            </div>

                            <p className="mt-6 text-sm leading-8 text-muted-foreground sm:text-base">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল দি খ্রিষ্টান
                                কো-অপারেটিভ ক্রেডিট ইউনিয়ন লি: ঢাকার একটি শিক্ষা
                                প্রতিষ্ঠান, যা ২০০৯ সাল থেকে সুনামের সাথে
                                শিক্ষার আলো বিস্তার করে আসছে। জ্ঞান, সততা,
                                নৈতিকতা ও সৃজনশীলতার সমন্বয়ে শিক্ষার্থীদের
                                পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলাই আমাদের প্রধান
                                লক্ষ্য। অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দের
                                তত্ত্বাবধানে একাডেমিক শিক্ষার পাশাপাশি
                                শরীরচর্চা, সংগীত, সাহিত্য, বিতর্ক ও বিভিন্ন
                                সহশিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের
                                সার্বিক বিকাশ নিশ্চিত করা হয়। উন্নত শিক্ষার
                                পরিবেশ, নিরাপত্তা ও মানসম্মত শিক্ষা প্রদানে আমরা
                                প্রতিশ্রুতিবদ্ধ।
                            </p>

                            <p className="mt-5 font-bold text-secondary">
                                সভাপতি
                            </p>

                            <span className="text-sm text-muted-foreground">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FACILITIES
            ========================================================= */}
            <section className="bg-background">
                <div className="container mx-auto px-4 py-16">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold text-primary">
                            সুবিধাসমূহ
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            শিক্ষার্থীদের জন্য আমাদের সুবিধা
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {/* Science */}
                        <Link
                            href="/science-lab"
                            className="group rounded-2xl border border-dashed border-green-500/30 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white"
                        >
                            <i className="fas fa-flask text-3xl text-green-600 transition group-hover:text-white" />

                            <p className="mt-3 text-sm font-semibold">
                                বিজ্ঞানাগার
                            </p>
                        </Link>

                        {/* Computer */}
                        <Link
                            href="/computer-lab"
                            className="group rounded-2xl border border-dashed border-primary/30 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <i className="fas fa-desktop text-3xl text-primary transition group-hover:text-primary-foreground" />

                            <p className="mt-3 text-sm font-semibold">
                                কম্পিউটার ল্যাব
                            </p>
                        </Link>

                        {/* Library */}
                        <Link
                            href="/library"
                            className="group rounded-2xl border border-dashed border-orange-500/30 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            <i className="fas fa-book text-3xl text-orange-500 transition group-hover:text-white" />

                            <p className="mt-3 text-sm font-semibold">
                                লাইব্রেরি
                            </p>
                        </Link>

                        {/* Clubs */}
                        <Link
                            href="/clubs"
                            className="group rounded-2xl border border-dashed border-secondary/30 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                        >
                            <i className="fas fa-users text-3xl text-secondary transition group-hover:text-secondary-foreground" />

                            <p className="mt-3 text-sm font-semibold">ক্লাব</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================================================
                NOTICE + EVENTS
            ========================================================= */}
            <section className="bg-background">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Notices */}
                        <div className="rounded-3xl border border-dashed border-secondary/40 bg-card p-6 transition-all duration-300 hover:border-secondary">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <span className="text-sm font-semibold text-secondary">
                                        আপডেট
                                    </span>

                                    <h2 className="mt-1 text-xl font-bold">
                                        সর্বশেষ বিজ্ঞপ্তি
                                    </h2>
                                </div>

                                <Link
                                    href="/notices"
                                    className="text-sm font-semibold text-secondary hover:underline"
                                >
                                    সকল বিজ্ঞপ্তি
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Link
                                        key={item}
                                        href="/notices"
                                        className="flex gap-4 border-b border-dashed border-border pb-4 transition last:border-0 hover:text-secondary"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-sm font-bold text-secondary">
                                            {String(item).padStart(2, '0')}
                                        </span>

                                        <div>
                                            <h3 className="font-semibold">
                                                গুরুত্বপূর্ণ বিজ্ঞপ্তি
                                            </h3>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Events */}
                        <div className="rounded-3xl border border-dashed border-green-500/30 bg-card p-6 transition-all duration-300 hover:border-green-500">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <span className="text-sm font-semibold text-green-600">
                                        কার্যক্রম
                                    </span>

                                    <h2 className="mt-1 text-xl font-bold">
                                        স্কুলের সাম্প্রতিক কার্যক্রম
                                    </h2>
                                </div>

                                <Link
                                    href="/events"
                                    className="text-sm font-semibold text-green-600 hover:underline"
                                >
                                    সকল কার্যক্রম
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Link
                                        key={item}
                                        href="/events"
                                        className="flex gap-4 border-b border-dashed border-border pb-4 transition last:border-0 hover:text-green-600"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-sm font-bold text-green-600">
                                            {String(item).padStart(2, '0')}
                                        </span>

                                        <div>
                                            <h3 className="font-semibold">
                                                স্কুলের সাম্প্রতিক কার্যক্রম
                                            </h3>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ADMISSION CTA
            ========================================================= */}
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-14">
                    <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                        <div>
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                আপনার সন্তানের সুন্দর ভবিষ্যতের যাত্রা শুরু হোক
                                আজ থেকেই
                            </h2>

                            <p className="mt-2 text-sm opacity-90">
                                ভর্তি সংক্রান্ত বিস্তারিত তথ্য জানতে আমাদের সাথে
                                যোগাযোগ করুন।
                            </p>
                        </div>

                        <Link
                            href="/admission-info"
                            className="shrink-0 rounded-lg bg-accent px-7 py-3 font-semibold text-accent-foreground transition hover:bg-accent/90"
                        >
                            ভর্তি তথ্য দেখুন
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
