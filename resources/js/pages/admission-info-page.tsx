import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

export default function AdmissionInfo() {
    const admissionSteps = [
        {
            number: '০১',
            icon: 'fas fa-info-circle',
            title: 'ভর্তি তথ্য সংগ্রহ',
            description:
                'ভর্তির যোগ্যতা, প্রয়োজনীয় কাগজপত্র, আসন সংখ্যা ও অন্যান্য গুরুত্বপূর্ণ তথ্য জেনে নিন।',
        },
        {
            number: '০২',
            icon: 'fas fa-file-alt',
            title: 'ভর্তি ফর্ম পূরণ',
            description:
                'নির্ধারিত ভর্তি ফর্ম সঠিক তথ্য দিয়ে পূরণ করে প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন।',
        },
        {
            number: '০৩',
            icon: 'fas fa-user-check',
            title: 'আবেদন যাচাই',
            description:
                'জমাকৃত আবেদন ও প্রয়োজনীয় তথ্য বিদ্যালয় কর্তৃপক্ষ যাচাই করবে।',
        },
        {
            number: '০৪',
            icon: 'fas fa-check-circle',
            title: 'ভর্তি সম্পন্ন',
            description:
                'নির্বাচিত হলে নির্ধারিত সময়ের মধ্যে প্রয়োজনীয় ভর্তি কার্যক্রম সম্পন্ন করুন।',
        },
    ];

    const requiredDocuments = [
        {
            icon: 'fas fa-id-card',
            title: 'জন্ম নিবন্ধন সনদ',
            description: 'শিক্ষার্থীর জন্ম নিবন্ধন সনদের কপি।',
        },
        {
            icon: 'fas fa-user',
            title: 'শিক্ষার্থীর ছবি',
            description: 'নির্ধারিত সাইজের সাম্প্রতিক পাসপোর্ট সাইজের ছবি।',
        },
        {
            icon: 'fas fa-file-alt',
            title: 'পূর্ববর্তী বিদ্যালয়ের তথ্য',
            description:
                'প্রযোজ্য ক্ষেত্রে পূর্ববর্তী বিদ্যালয়ের প্রয়োজনীয় কাগজপত্র।',
        },
        {
            icon: 'fas fa-users',
            title: 'অভিভাবকের তথ্য',
            description:
                'অভিভাবকের জাতীয় পরিচয়পত্র ও যোগাযোগের প্রয়োজনীয় তথ্য।',
        },
    ];

    const admissionPoints = [
        'ভর্তির জন্য নির্ধারিত যোগ্যতা পূরণ করতে হবে।',
        'ভর্তি ফর্মে শিক্ষার্থীর সঠিক ও সম্পূর্ণ তথ্য প্রদান করতে হবে।',
        'প্রয়োজনীয় সকল কাগজপত্র নির্ধারিত সময়ের মধ্যে জমা দিতে হবে।',
        'বিদ্যালয় কর্তৃপক্ষের সিদ্ধান্ত ও ভর্তি সংক্রান্ত নির্দেশনা অনুসরণ করতে হবে।',
        'নির্ধারিত সময়ের মধ্যে ভর্তি কার্যক্রম সম্পন্ন করতে হবে।',
    ];

    return (
        <>
            <Head title="ভর্তি তথ্য" />

            <main className="min-h-screen bg-background text-foreground">
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
                    categoryIcon="fas fa-user-plus"
                    category="ভর্তি সম্পর্কিত"
                    title="ভর্তি তথ্য"
                    subtitle={`ঢাকা ক্রেডিট ইউনিয়ন স্কুলে ভর্তি সংক্রান্ত প্রয়োজনীয় তথ্য, নিয়মাবলি ও ভর্তি প্রক্রিয়া।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            ভর্তি কার্যক্রম
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            আপনার সন্তানের সুন্দর ভবিষ্যতের পথে প্রথম ধাপ
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            ঢাকা ক্রেডিট ইউনিয়ন স্কুলে শিক্ষার্থীদের মানসম্মত
                            শিক্ষা, নৈতিকতা, সৃজনশীলতা ও মানবিক মূল্যবোধ বিকাশের
                            উপযোগী পরিবেশ প্রদান করা হয়। ভর্তি সংক্রান্ত
                            কার্যক্রম সহজ ও স্বচ্ছভাবে সম্পন্ন করার জন্য নিচের
                            তথ্যগুলো অনুসরণ করুন।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    ADMISSION HIGHLIGHTS
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            <InfoCard
                                icon="fas fa-calendar-alt"
                                title="ভর্তি সময়"
                                description="বিদ্যালয়ের নির্ধারিত ভর্তি সময়সূচি অনুযায়ী আবেদন করতে হবে।"
                                color="primary"
                            />

                            <InfoCard
                                icon="fas fa-user-graduate"
                                title="ভর্তির যোগ্যতা"
                                description="শ্রেণিভেদে নির্ধারিত যোগ্যতা পূরণ করতে হবে।"
                                color="secondary"
                            />

                            <InfoCard
                                icon="fas fa-file-signature"
                                title="আবেদন"
                                description="নির্ধারিত নিয়মে ভর্তি ফর্ম পূরণ ও জমা দিতে হবে।"
                                color="primary"
                            />

                            <InfoCard
                                icon="fas fa-check-double"
                                title="ভর্তি নিশ্চিতকরণ"
                                description="নির্ধারিত সময়ের মধ্যে ভর্তি প্রক্রিয়া সম্পন্ন করতে হবে।"
                                color="secondary"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ADMISSION PROCESS
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <SectionHeading
                            icon="fas fa-route"
                            eyebrow="ভর্তি প্রক্রিয়া"
                            title="সহজ চার ধাপে ভর্তি কার্যক্রম"
                            description="ভর্তি কার্যক্রম সম্পন্ন করতে নিচের ধাপগুলো অনুসরণ করুন।"
                        />

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {admissionSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <i
                                                className={`${step.icon} text-lg`}
                                            />
                                        </div>

                                        <span className="text-3xl font-black text-primary/10">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ELIGIBILITY + RULES
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* Eligibility */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <i className="fas fa-user-graduate text-lg" />
                                    </div>

                                    <div>
                                        <span className="text-xs font-semibold text-primary">
                                            ADMISSION
                                        </span>

                                        <h2 className="text-xl font-bold">
                                            ভর্তির যোগ্যতা
                                        </h2>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {[
                                        'শ্রেণিভেদে নির্ধারিত বয়স ও শিক্ষাগত যোগ্যতা থাকতে হবে।',
                                        'প্রয়োজনীয় কাগজপত্র সঠিক ও বৈধ হতে হবে।',
                                        'বিদ্যালয়ের ভর্তি নীতিমালা ও নির্দেশনা মেনে চলতে হবে।',
                                        'আসন সংখ্যা ও বিদ্যালয়ের নির্ধারিত নিয়ম অনুযায়ী ভর্তি সম্পন্ন হবে।',
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-3">
                                            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-check text-[10px]" />
                                            </div>

                                            <p className="text-sm leading-7 text-foreground/75">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Important Rules */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                        <i className="fas fa-clipboard-check text-lg" />
                                    </div>

                                    <div>
                                        <span className="text-xs font-semibold text-secondary">
                                            IMPORTANT
                                        </span>

                                        <h2 className="text-xl font-bold">
                                            গুরুত্বপূর্ণ নির্দেশনা
                                        </h2>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {admissionPoints.map((point, index) => (
                                        <div key={index} className="flex gap-3">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                                                {index + 1}
                                            </span>

                                            <p className="text-sm leading-7 text-foreground/75">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    REQUIRED DOCUMENTS
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <SectionHeading
                            icon="fas fa-folder-open"
                            eyebrow="প্রয়োজনীয় কাগজপত্র"
                            title="ভর্তির সময় যেসব কাগজপত্র প্রয়োজন"
                            description="ভর্তি প্রক্রিয়া দ্রুত সম্পন্ন করতে প্রয়োজনীয় কাগজপত্র আগে থেকেই প্রস্তুত রাখুন।"
                        />

                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {requiredDocuments.map((document) => (
                                <div
                                    key={document.title}
                                    className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <i
                                            className={`${document.icon} text-lg`}
                                        />
                                    </div>

                                    <h3 className="mt-5 font-bold">
                                        {document.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                                        {document.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    NOTICE
                ====================================================== */}
                <section className="container mx-auto px-4 pb-14 sm:pb-16">
                    <div className="mx-auto max-w-5xl rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6 sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600">
                                <i className="fas fa-exclamation-triangle" />
                            </div>

                            <div>
                                <h2 className="font-bold">
                                    গুরুত্বপূর্ণ নোটিশ
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-foreground/70">
                                    ভর্তি সংক্রান্ত সময়সূচি, আসন সংখ্যা, ফি,
                                    যোগ্যতা এবং অন্যান্য নিয়মাবলি বিদ্যালয়
                                    কর্তৃপক্ষের সিদ্ধান্ত অনুযায়ী পরিবর্তিত হতে
                                    পারে। সর্বশেষ তথ্যের জন্য বিদ্যালয়ের নোটিশ ও
                                    অফিসিয়াল নির্দেশনা অনুসরণ করুন।
                                </p>
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
                                <i className="fas fa-file-alt text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                ভর্তি ফর্মের জন্য প্রস্তুত?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                ভর্তি সংক্রান্ত তথ্য দেখে আবেদন করতে চাইলে
                                আমাদের ভর্তি ফর্ম পেজে প্রবেশ করুন।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/admission-forms"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    <i className="fas fa-file-signature" />
                                    ভর্তি ফর্ম
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
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

/* =====================================================
   SECTION HEADING
===================================================== */

interface SectionHeadingProps {
    icon: string;
    eyebrow: string;
    title: string;
    description: string;
}

function SectionHeading({
    icon,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <i className={icon} />
                {eyebrow}
            </span>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                {title}
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                {description}
            </p>
        </div>
    );
}

/* =====================================================
   INFO CARD
===================================================== */

interface InfoCardProps {
    icon: string;
    title: string;
    description: string;
    color: string;
}

function InfoCard({ icon, title, description, color }: InfoCardProps) {
    const isPrimary = color === 'primary';

    return (
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${
                    isPrimary
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                }`}
            >
                <i className={`${icon} text-lg`} />
            </div>

            <h3 className="mt-4 font-bold">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
                {description}
            </p>
        </div>
    );
}
