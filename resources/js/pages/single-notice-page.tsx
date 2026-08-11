import { Head, Link } from '@inertiajs/react';

interface Notice {
    id: number;
    title: string;
    date: string;
    category: string;
    description?: string;
    content?: string;
    file?: string;
}

interface NoticeShowProps {
    notice: Notice;
}

export default function NoticeShow({ notice }: NoticeShowProps) {
    return (
        <>
            <Head title={notice.title} />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-12 sm:py-14 md:py-16">
                        <div className="mx-auto max-w-4xl">
                            {/* Breadcrumb */}
                            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-primary-foreground/70 sm:text-sm">
                                <Link
                                    href="/"
                                    className="transition hover:text-white"
                                >
                                    হোম
                                </Link>

                                <i className="fas fa-chevron-right text-[9px]" />

                                <Link
                                    href="/notice"
                                    className="transition hover:text-white"
                                >
                                    বিজ্ঞপ্তি
                                </Link>

                                <i className="fas fa-chevron-right text-[9px]" />

                                <span className="truncate text-primary-foreground/90">
                                    বিস্তারিত
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-xs font-semibold backdrop-blur-sm sm:text-sm">
                                    <i className="fas fa-bell" />
                                    {notice.category}
                                </span>
                            </div>

                            <h1 className="mt-5 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                                {notice.title}
                            </h1>

                            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
                                <span className="inline-flex items-center gap-2">
                                    <i className="fas fa-calendar-alt" />
                                    {notice.date}
                                </span>

                                <span className="inline-flex items-center gap-2">
                                    <i className="fas fa-school" />
                                    ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    NOTICE CONTENT
                ====================================================== */}
                <section className="container mx-auto px-4 py-10 sm:py-14 md:py-16">
                    <div className="mx-auto max-w-4xl">
                        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                            {/* Notice Meta */}
                            <div className="border-b border-border bg-muted/30 px-5 py-5 sm:px-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <i className="fas fa-file-lines text-lg" />
                                        </div>

                                        <div>
                                            <p className="text-xs text-foreground/50">
                                                বিজ্ঞপ্তি প্রকাশের তারিখ
                                            </p>

                                            <p className="mt-1 text-sm font-semibold">
                                                {notice.date}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                                        <i className="fas fa-tag" />
                                        {notice.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10">
                                {notice.description && (
                                    <p className="mb-7 text-base leading-8 text-foreground/75 sm:text-lg">
                                        {notice.description}
                                    </p>
                                )}

                                {notice.content ? (
                                    <div
                                        className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground"
                                        dangerouslySetInnerHTML={{
                                            __html: notice.content,
                                        }}
                                    />
                                ) : (
                                    <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
                                        <i className="fas fa-file-alt text-2xl text-primary/60" />

                                        <p className="mt-3 text-sm text-foreground/60">
                                            এই বিজ্ঞপ্তির বিস্তারিত তথ্য
                                            প্রকাশিত হয়নি।
                                        </p>
                                    </div>
                                )}

                                {/* Attachment */}
                                {notice.file && (
                                    <div className="mt-10 rounded-xl border border-border bg-muted/20 p-5">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600">
                                                    <i className="fas fa-file-pdf text-lg" />
                                                </div>

                                                <div>
                                                    <h3 className="text-sm font-semibold">
                                                        সংযুক্ত ফাইল
                                                    </h3>

                                                    <p className="mt-1 text-xs text-foreground/50">
                                                        বিজ্ঞপ্তির বিস্তারিত
                                                        ডকুমেন্ট
                                                    </p>
                                                </div>
                                            </div>

                                            <a
                                                href={notice.file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                            >
                                                <i className="fas fa-download" />
                                                ডাউনলোড করুন
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>

                        {/* =================================================
                            ACTIONS
                        ================================================== */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href="/notice"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                                <i className="fas fa-arrow-left" />
                                সকল বিজ্ঞপ্তি
                            </Link>

                            <button
                                type="button"
                                onClick={() => window.print()}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                                <i className="fas fa-print" />
                                প্রিন্ট করুন
                            </button>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RELATED INFORMATION
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-10 sm:py-14">
                        <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-background p-6 text-center sm:p-8">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-bell text-xl" />
                            </div>

                            <h2 className="mt-5 text-xl font-bold sm:text-2xl">
                                আরও বিজ্ঞপ্তি দেখুন
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-foreground/65">
                                বিদ্যালয়ের সর্বশেষ বিজ্ঞপ্তি, ঘোষণা ও
                                গুরুত্বপূর্ণ তথ্য দেখতে বিজ্ঞপ্তি পেজে ফিরে যান।
                            </p>

                            <div className="mt-5">
                                <Link
                                    href="/notice"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-list" />
                                    সকল বিজ্ঞপ্তি
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
