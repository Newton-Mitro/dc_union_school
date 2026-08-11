import { Head, Link } from '@inertiajs/react';

interface NoticeItem {
    id: number;
    title: string;
    date: string;
    category: string;
    description?: string;
    file?: string;
    isNew?: boolean;
}

const notices: NoticeItem[] = [
    {
        id: 1,
        title: 'বার্ষিক পরীক্ষার সময়সূচী প্রকাশ',
        date: '১০ আগস্ট ২০২৬',
        category: 'পরীক্ষা',
        description:
            'ঢাকা ক্রেডিট ইউনিয়ন স্কুলের বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা হয়েছে। সকল শিক্ষার্থীকে নির্ধারিত সময়সূচী অনুযায়ী পরীক্ষায় অংশগ্রহণের জন্য নির্দেশ দেওয়া হলো।',
        isNew: true,
    },
    {
        id: 2,
        title: 'অভিভাবক সমাবেশ সংক্রান্ত বিজ্ঞপ্তি',
        date: '০৭ আগস্ট ২০২৬',
        category: 'সাধারণ',
        description:
            'শিক্ষার্থীদের শিক্ষাগত অগ্রগতি ও সার্বিক বিষয় নিয়ে আলোচনা করার জন্য অভিভাবক সমাবেশের আয়োজন করা হয়েছে। সকল অভিভাবককে যথাসময়ে উপস্থিত থাকার জন্য অনুরোধ করা হলো।',
        isNew: true,
    },
    {
        id: 3,
        title: 'ক্লাস রুটিনে সাময়িক পরিবর্তন',
        date: '০৫ আগস্ট ২০২৬',
        category: 'একাডেমিক',
        description:
            'বিশেষ কারণে কয়েকটি শ্রেণির নিয়মিত ক্লাস রুটিনে সাময়িক পরিবর্তন করা হয়েছে। সংশ্লিষ্ট শিক্ষার্থীদের নতুন রুটিন অনুসরণ করার জন্য বলা হলো।',
    },
    {
        id: 4,
        title: 'শিক্ষা সফর সংক্রান্ত বিজ্ঞপ্তি',
        date: '০১ আগস্ট ২০২৬',
        category: 'সহশিক্ষা',
        description:
            'বিদ্যালয়ের শিক্ষার্থীদের জন্য আয়োজিত শিক্ষা সফর সংক্রান্ত প্রয়োজনীয় তথ্য ও নির্দেশনা এই বিজ্ঞপ্তিতে প্রদান করা হয়েছে।',
    },
    {
        id: 5,
        title: 'বিজ্ঞান মেলা আয়োজন সংক্রান্ত বিজ্ঞপ্তি',
        date: '২৮ জুলাই ২০২৬',
        category: 'কার্যক্রম',
        description:
            'শিক্ষার্থীদের সৃজনশীলতা ও বৈজ্ঞানিক চিন্তাভাবনা বিকাশের লক্ষ্যে বিদ্যালয়ে বিজ্ঞান মেলার আয়োজন করা হয়েছে।',
    },
    {
        id: 6,
        title: 'বৃত্তি পরীক্ষায় অংশগ্রহণ সংক্রান্ত বিজ্ঞপ্তি',
        date: '২৫ জুলাই ২০২৬',
        category: 'পরীক্ষা',
        description:
            'বৃত্তি পরীক্ষায় অংশগ্রহণে আগ্রহী শিক্ষার্থীদের নির্ধারিত সময়ের মধ্যে নাম নিবন্ধন করার জন্য অনুরোধ করা হলো।',
    },
];

const categoryStyles: Record<string, string> = {
    পরীক্ষা: 'bg-primary/10 text-primary',
    একাডেমিক: 'bg-secondary/10 text-secondary',
    সাধারণ: 'bg-blue-500/10 text-blue-600',
    সহশিক্ষা: 'bg-orange-500/10 text-orange-600',
    কার্যক্রম: 'bg-green-500/10 text-green-600',
};

export default function Notice() {
    const latestNotice = notices[0];
    const otherNotices = notices.slice(1);

    return (
        <>
            <Head title="বিজ্ঞপ্তি" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-bell" />
                                একাডেমিক
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                বিজ্ঞপ্তি
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                বিদ্যালয়ের সকল গুরুত্বপূর্ণ বিজ্ঞপ্তি, ঘোষণা ও
                                তথ্য এখানে পাওয়া যাবে।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONTENT
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        {/* =================================================
                            SEARCH / FILTER
                        ================================================== */}
                        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-lg font-bold">
                                    সকল বিজ্ঞপ্তি
                                </h2>

                                <p className="mt-1 text-sm text-foreground/60">
                                    সর্বশেষ বিজ্ঞপ্তি ও গুরুত্বপূর্ণ তথ্যসমূহ
                                </p>
                            </div>

                            <div className="relative w-full sm:max-w-xs">
                                <i className="fas fa-search absolute top-1/2 left-4 -translate-y-1/2 text-sm text-foreground/40" />

                                <input
                                    type="search"
                                    placeholder="বিজ্ঞপ্তি খুঁজুন..."
                                    className="w-full rounded-lg border border-border bg-background py-2.5 pr-4 pl-10 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                        </div>

                        {/* =================================================
                            LATEST NOTICE
                        ================================================== */}
                        {latestNotice && (
                            <div className="mb-10 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-md">
                                <div className="flex flex-col md:flex-row">
                                    {/* Left */}
                                    <div className="flex shrink-0 flex-col items-center justify-center bg-primary p-6 text-center text-primary-foreground md:w-48">
                                        <span className="text-xs font-medium tracking-wider uppercase opacity-80">
                                            সর্বশেষ
                                        </span>

                                        <i className="fas fa-bell mt-3 text-3xl" />

                                        <span className="mt-3 text-xs font-semibold">
                                            {latestNotice.date}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                                        <div>
                                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                        categoryStyles[
                                                            latestNotice
                                                                .category
                                                        ] ??
                                                        'bg-primary/10 text-primary'
                                                    }`}
                                                >
                                                    {latestNotice.category}
                                                </span>

                                                {latestNotice.isNew && (
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-600">
                                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                                                        নতুন
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className="text-xl font-bold sm:text-2xl">
                                                {latestNotice.title}
                                            </h2>

                                            <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
                                                {latestNotice.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <Link
                                                href={`/notices/${latestNotice.id}`}
                                                type="button"
                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                            >
                                                <i className="fas fa-eye" />
                                                বিস্তারিত দেখুন
                                            </Link>

                                            {latestNotice.file && (
                                                <a
                                                    href={latestNotice.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                                >
                                                    <i className="fas fa-download" />
                                                    ডাউনলোড
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* =================================================
                            NOTICE LIST
                        ================================================== */}
                        <div className="space-y-4">
                            {otherNotices.map((notice) => (
                                <article
                                    key={notice.id}
                                    className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-6"
                                >
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                        {/* Date */}
                                        <div className="flex shrink-0 items-center gap-3 sm:block sm:w-24 sm:text-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mx-auto">
                                                <i className="fas fa-file-lines text-lg" />
                                            </div>

                                            <div className="sm:mt-2">
                                                <p className="text-xs font-medium text-foreground/50">
                                                    প্রকাশিত
                                                </p>

                                                <p className="mt-0.5 text-xs font-semibold text-foreground/70">
                                                    {notice.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                        categoryStyles[
                                                            notice.category
                                                        ] ??
                                                        'bg-primary/10 text-primary'
                                                    }`}
                                                >
                                                    {notice.category}
                                                </span>

                                                {notice.isNew && (
                                                    <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-[11px] font-bold text-red-600">
                                                        নতুন
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="mt-3 text-lg font-bold transition-colors group-hover:text-primary sm:text-xl">
                                                {notice.title}
                                            </h3>

                                            {notice.description && (
                                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-foreground/65">
                                                    {notice.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Action */}
                                        <div className="flex shrink-0 items-center gap-2 sm:pt-1">
                                            <Link
                                                href={`/notices/${notice.id}`}
                                                aria-label="বিস্তারিত দেখুন"
                                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/60 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                            >
                                                <i className="fas fa-eye text-sm" />
                                            </Link>

                                            {notice.file && (
                                                <a
                                                    href={notice.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="ডাউনলোড"
                                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/60 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                                >
                                                    <i className="fas fa-download text-sm" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* =================================================
                            EMPTY STATE
                        ================================================== */}
                        {notices.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <i className="fas fa-bell-slash text-2xl" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    কোনো বিজ্ঞপ্তি পাওয়া যায়নি
                                </h3>

                                <p className="mt-2 text-sm text-foreground/60">
                                    বর্তমানে প্রদর্শনের জন্য কোনো বিজ্ঞপ্তি নেই।
                                </p>
                            </div>
                        )}

                        {/* =================================================
                            PAGINATION
                        ================================================== */}
                        {notices.length > 0 && (
                            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                                <p className="text-sm text-foreground/60">
                                    মোট {notices.length}টি বিজ্ঞপ্তি
                                </p>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        disabled
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/30"
                                    >
                                        <i className="fas fa-chevron-left text-xs" />
                                    </button>

                                    <button
                                        type="button"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
                                    >
                                        ১
                                    </button>

                                    <button
                                        type="button"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition hover:border-primary hover:text-primary"
                                    >
                                        ২
                                    </button>

                                    <button
                                        type="button"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
                                    >
                                        <i className="fas fa-chevron-right text-xs" />
                                    </button>
                                </div>
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
                                <i className="fas fa-info-circle text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                আরও তথ্য প্রয়োজন?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                বিদ্যালয়ের যেকোনো বিজ্ঞপ্তি বা একাডেমিক
                                কার্যক্রম সম্পর্কে বিস্তারিত জানতে আমাদের সঙ্গে
                                যোগাযোগ করুন।
                            </p>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-phone" />
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
