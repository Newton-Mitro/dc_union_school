import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, CalendarDays, FileText } from 'lucide-react';
import PageHeader from '../components/page-header';

const results = [
    {
        id: 1,
        title: '২০২৬ শিক্ষাবর্ষের ভর্তি পরীক্ষার ফলাফল',
        date: '১৫ ডিসেম্বর ২০২৫',
        className: '৬ষ্ঠ শ্রেণি',
        description:
            '২০২৬ শিক্ষাবর্ষে ৬ষ্ঠ শ্রেণিতে ভর্তির জন্য অনুষ্ঠিত ভর্তি পরীক্ষার ফলাফল প্রকাশ করা হয়েছে। নির্বাচিত শিক্ষার্থীদের নির্ধারিত সময়ের মধ্যে ভর্তি কার্যক্রম সম্পন্ন করার জন্য অনুরোধ করা হলো।',
        status: 'প্রকাশিত',
        file: '/documents/admission-results-2026.pdf',
    },
    {
        id: 2,
        title: '২০২৬ শিক্ষাবর্ষের ভর্তি লটারির ফলাফল',
        date: '২০ ডিসেম্বর ২০২৫',
        className: '৭ম শ্রেণি',
        description:
            '২০২৬ শিক্ষাবর্ষে ৭ম শ্রেণিতে ভর্তির জন্য অনুষ্ঠিত লটারির ফলাফল প্রকাশ করা হয়েছে। নির্বাচিত শিক্ষার্থীদের নির্ধারিত সময়সূচী অনুযায়ী ভর্তি কার্যক্রম সম্পন্ন করতে হবে।',
        status: 'প্রকাশিত',
        file: '/documents/admission-lottery-result-2026.pdf',
    },
    {
        id: 3,
        title: '২০২৫ শিক্ষাবর্ষের ভর্তি পরীক্ষার ফলাফল',
        date: '১৮ ডিসেম্বর ২০২৪',
        className: '৬ষ্ঠ শ্রেণি',
        description:
            '২০২৫ শিক্ষাবর্ষে ৬ষ্ঠ শ্রেণিতে ভর্তির জন্য অনুষ্ঠিত পরীক্ষার ফলাফল প্রকাশ করা হয়েছে।',
        status: 'পুরাতন',
        file: '/documents/admission-results-2025.pdf',
    },
];

export default function AdmissionResultsPage() {
    return (
        <>
            <Head title="ভর্তির ফলাফল" />

            <PageHeader
                breadcrumbs={[
                    {
                        label: 'হোম',
                        href: '/',
                    },
                    {
                        label: 'ভর্তি সম্পর্কিত',
                    },
                    {
                        label: 'ভর্তি তথ্য',
                    },
                ]}
                categoryIcon="fas fa-poll"
                category="ভর্তি সম্পর্কিত"
                title="ভর্তির ফলাফল"
                subtitle={`ভর্তি পরীক্ষা ও লটারির ফলাফল, নির্বাচিত শিক্ষার্থীদের তালিকা এবং ভর্তি সংক্রান্ত গুরুত্বপূর্ণ তথ্য এখানে পাওয়া যাবে।`}
            />

            {/* Results */}
            <section className="bg-background py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Section heading */}
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            <i className="fas fa-award mr-2" />
                            Admission Results
                        </span>

                        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                            ভর্তি পরীক্ষার ফলাফল
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                            সর্বশেষ প্রকাশিত ভর্তি ফলাফল নিচে দেখুন। ফলাফল দেখতে
                            সংশ্লিষ্ট নথিতে ক্লিক করুন।
                        </p>
                    </div>

                    {/* Result Cards */}
                    <div className="mx-auto grid max-w-5xl gap-6">
                        {results.map((result, index) => (
                            <article
                                key={result.id}
                                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                            >
                                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                    {/* Content */}
                                    <div className="flex min-w-0 gap-4">
                                        {/* Number */}
                                        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary sm:flex">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                    <i className="fas fa-graduation-cap" />
                                                    {result.className}
                                                </span>

                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                                                        result.status ===
                                                        'প্রকাশিত'
                                                            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                                                            : 'bg-muted text-muted-foreground'
                                                    }`}
                                                >
                                                    <i className="fas fa-circle text-[6px]" />
                                                    {result.status}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-xl">
                                                {result.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                {result.description}
                                            </p>

                                            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                                                <CalendarDays className="h-4 w-4 text-primary" />
                                                <span>
                                                    প্রকাশের তারিখ:{' '}
                                                    {result.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex shrink-0 flex-wrap gap-2 md:flex-col lg:flex-row">
                                        <a
                                            href={result.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                        >
                                            <FileText className="h-4 w-4" />
                                            ফলাফল দেখুন
                                        </a>

                                        <a
                                            href={result.file}
                                            download
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                                        >
                                            <i className="fas fa-download" />
                                            ডাউনলোড
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Information */}
            <section className="border-t border-border bg-muted/30 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                            <div className="flex flex-col gap-5 sm:flex-row">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                    <i className="fas fa-info-circle text-lg" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                                        গুরুত্বপূর্ণ নির্দেশনা
                                    </h3>

                                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                নির্বাচিত শিক্ষার্থীদের
                                                নির্ধারিত সময়ের মধ্যে ভর্তি
                                                কার্যক্রম সম্পন্ন করতে হবে।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ভর্তি সংক্রান্ত প্রয়োজনীয়
                                                কাগজপত্র সঙ্গে আনতে হবে।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ফলাফলে কোনো ধরনের ভুল বা অসঙ্গতি
                                                পরিলক্ষিত হলে বিদ্যালয়ের অফিসে
                                                যোগাযোগ করুন।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ভর্তি সংক্রান্ত সর্বশেষ
                                                বিজ্ঞপ্তির জন্য নিয়মিত নোটিশ
                                                বোর্ড দেখুন।
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="bg-background py-12">
                <div className="container mx-auto px-4">
                    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/admission-info"
                            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            ভর্তি তথ্য
                        </Link>

                        <Link
                            href="/admission-forms"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            <FileText className="h-4 w-4" />
                            ভর্তি ফর্ম
                        </Link>

                        <Link
                            href="/notice"
                            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                        >
                            <i className="fas fa-bell" />
                            বিজ্ঞপ্তি
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
