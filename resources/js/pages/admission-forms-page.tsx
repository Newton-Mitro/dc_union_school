import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Download,
    FileText,
    Info,
    Upload,
} from 'lucide-react';
import PageHeader from '../components/page-header';

const forms = [
    {
        id: 1,
        title: 'ভর্তি আবেদন ফর্ম — ৬ষ্ঠ শ্রেণি',
        session: '২০২৬ শিক্ষাবর্ষ',
        date: '০১ ডিসেম্বর ২০২৫',
        status: 'চলমান',
        description:
            '২০২৬ শিক্ষাবর্ষে ৬ষ্ঠ শ্রেণিতে ভর্তির জন্য নির্ধারিত আবেদন ফর্ম। ফর্মটি ডাউনলোড করে প্রয়োজনীয় তথ্য পূরণ করে বিদ্যালয়ের নির্দেশনা অনুযায়ী জমা দিন।',
        file: '/documents/admission-form-class-6-2026.pdf',
    },
    {
        id: 2,
        title: 'ভর্তি আবেদন ফর্ম — ৭ম শ্রেণি',
        session: '২০২৬ শিক্ষাবর্ষ',
        date: '০১ ডিসেম্বর ২০২৫',
        status: 'চলমান',
        description:
            '২০২৬ শিক্ষাবর্ষে ৭ম শ্রেণিতে ভর্তির জন্য নির্ধারিত আবেদন ফর্ম।',
        file: '/documents/admission-form-class-7-2026.pdf',
    },
    {
        id: 3,
        title: 'স্থানান্তরিত শিক্ষার্থীর ভর্তি ফর্ম',
        session: '২০২৬ শিক্ষাবর্ষ',
        date: '০১ ডিসেম্বর ২০২৫',
        status: 'চলমান',
        description:
            'অন্য শিক্ষা প্রতিষ্ঠান থেকে স্থানান্তরিত হয়ে ভর্তি হতে ইচ্ছুক শিক্ষার্থীদের জন্য নির্ধারিত আবেদন ফর্ম।',
        file: '/documents/transfer-admission-form-2026.pdf',
    },
];

const requiredDocuments = [
    'শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি',
    'পূর্ববর্তী শ্রেণির ফলাফল/প্রশংসাপত্রের ফটোকপি',
    'পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)',
    'শিক্ষার্থীর সাম্প্রতিক পাসপোর্ট সাইজের ছবি',
    'অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি',
    'প্রয়োজনীয় অন্যান্য কাগজপত্র',
];

export default function AdmissionFormsPage() {
    return (
        <>
            <Head title="ভর্তি ফর্ম" />

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
                        label: 'ভর্তি ফর্ম',
                    },
                ]}
                categoryIcon="fas fa-file-alt"
                category="ভর্তি সম্পর্কিত"
                title="ভর্তি ফর্ম"
                subtitle={`শিক্ষার্থী ভর্তির জন্য প্রয়োজনীয় আবেদন ফর্ম, নির্দেশনা এবং প্রয়োজনীয় কাগজপত্রের তথ্য এখানে পাওয়া যাবে।`}
            />

            {/* =========================================================
                FORMS
            ========================================================= */}
            <section className="bg-background py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            <i className="fas fa-file-signature mr-2" />
                            Admission Forms
                        </span>

                        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                            প্রয়োজনীয় ভর্তি ফর্ম
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                            আপনার প্রয়োজন অনুযায়ী ফর্মটি নির্বাচন করে দেখুন অথবা
                            ডাউনলোড করুন।
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-6">
                        {forms.map((form, index) => (
                            <article
                                key={form.id}
                                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                            >
                                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                    {/* Form information */}
                                    <div className="flex min-w-0 gap-4">
                                        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                                            <FileText className="h-5 w-5" />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                    ফর্ম{' '}
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>

                                                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                                                    <i className="fas fa-circle mr-1 text-[6px]" />
                                                    {form.status}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-xl">
                                                {form.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                {form.description}
                                            </p>

                                            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <i className="fas fa-graduation-cap text-primary" />
                                                    {form.session}
                                                </span>

                                                <span className="inline-flex items-center gap-1.5">
                                                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                                                    প্রকাশিত: {form.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex shrink-0 flex-wrap gap-2">
                                        <a
                                            href={form.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                        >
                                            <i className="fas fa-eye" />
                                            ফর্ম দেখুন
                                        </a>

                                        <a
                                            href={form.file}
                                            download
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                                        >
                                            <Download className="h-4 w-4" />
                                            ডাউনলোড
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                ONLINE APPLICATION
            ========================================================= */}
            <section className="border-y border-border bg-primary/5 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm">
                        <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                    <Upload className="h-5 w-5" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground">
                                        অনলাইন ভর্তি আবেদন
                                    </h2>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                                        অনলাইনে ভর্তি আবেদন করার সুবিধা চালু
                                        থাকলে নিচের বাটনে ক্লিক করে আবেদন
                                        প্রক্রিয়া শুরু করুন।
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/admission-apply"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                            >
                                <i className="fas fa-edit" />
                                অনলাইনে আবেদন করুন
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                REQUIRED DOCUMENTS
            ========================================================= */}
            <section className="bg-background py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-8">
                            <span className="text-sm font-semibold text-primary">
                                <i className="fas fa-folder-open mr-2" />
                                Required Documents
                            </span>

                            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                                প্রয়োজনীয় কাগজপত্র
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                ভর্তি ফর্ম জমা দেওয়ার সময় সাধারণত নিচের
                                কাগজপত্রগুলো প্রয়োজন হতে পারে।
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {requiredDocuments.map((document, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />

                                    <span className="text-sm leading-6 text-card-foreground">
                                        {document}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                INSTRUCTIONS
            ========================================================= */}
            <section className="bg-muted/30 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                            <div className="flex flex-col gap-5 sm:flex-row">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                    <Info className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                                        ভর্তি ফর্ম পূরণের নির্দেশনা
                                    </h3>

                                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ফর্মে প্রদত্ত সকল তথ্য সঠিক ও
                                                নির্ভুলভাবে পূরণ করুন।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                শিক্ষার্থীর নাম ও জন্মতারিখ জন্ম
                                                নিবন্ধন সনদ অনুযায়ী লিখুন।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                প্রয়োজনীয় কাগজপত্রের ফটোকপি
                                                নির্ধারিত নিয়ম অনুযায়ী সংযুক্ত
                                                করুন।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ফর্ম জমা দেওয়ার আগে সকল তথ্য
                                                পুনরায় যাচাই করুন।
                                            </span>
                                        </li>

                                        <li className="flex gap-2">
                                            <i className="fas fa-check mt-1 text-primary" />
                                            <span>
                                                ভর্তি সংক্রান্ত সর্বশেষ
                                                নির্দেশনার জন্য বিদ্যালয়ের নোটিশ
                                                নিয়মিত অনুসরণ করুন।
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                QUICK LINKS
            ========================================================= */}
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
                            href="/admission-results"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            <i className="fas fa-poll" />
                            ভর্তির ফলাফল
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
