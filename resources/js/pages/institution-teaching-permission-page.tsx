import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface PermissionDocument {
    title: string;
    description: string;
    icon: string;
    meta: string;
    status: 'active' | 'approved';
}

const permissionDocuments: PermissionDocument[] = [
    {
        title: 'শিক্ষাদানের অনুমতিপত্র',
        description:
            'ঢাকা ক্রেডিট ইউনিয়ন স্কুলে নির্ধারিত শ্রেণি ও শিক্ষাক্রম অনুযায়ী পাঠদান কার্যক্রম পরিচালনার জন্য সংশ্লিষ্ট কর্তৃপক্ষ কর্তৃক প্রদত্ত অনুমতিপত্র।',
        icon: 'fas fa-file-signature',
        meta: 'প্রাতিষ্ঠানিক অনুমোদন',
        status: 'approved',
    },
    {
        title: 'প্রতিষ্ঠানের একাডেমিক অনুমোদন',
        description:
            'বিদ্যালয়ের শিক্ষা কার্যক্রম পরিচালনা, শিক্ষার্থী ভর্তি এবং নির্ধারিত পাঠ্যক্রম অনুসরণ সংক্রান্ত প্রাতিষ্ঠানিক অনুমোদনের তথ্য।',
        icon: 'fas fa-school',
        meta: 'একাডেমিক অনুমোদন',
        status: 'active',
    },
    {
        title: 'পাঠদান কার্যক্রমের অনুমোদন',
        description:
            'বিদ্যালয়ের নির্ধারিত শ্রেণিসমূহে নিয়মিত পাঠদান, পরীক্ষা এবং একাডেমিক কার্যক্রম পরিচালনার অনুমোদন সংক্রান্ত তথ্য।',
        icon: 'fas fa-chalkboard-teacher',
        meta: 'শিক্ষা কার্যক্রম',
        status: 'active',
    },
];

const informationItems = [
    {
        icon: 'fas fa-building-columns',
        title: 'প্রতিষ্ঠানের নাম',
        value: 'ঢাকা ক্রেডিট ইউনিয়ন স্কুল',
    },
    {
        icon: 'fas fa-certificate',
        title: 'অনুমোদনের ধরন',
        value: 'শিক্ষাদান ও একাডেমিক কার্যক্রম',
    },
    {
        icon: 'fas fa-calendar-check',
        title: 'অনুমোদনের অবস্থা',
        value: 'অনুমোদিত ও কার্যকর',
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'শিক্ষা কার্যক্রম',
        value: 'নির্ধারিত শ্রেণি ও শিক্ষাক্রম',
    },
];

export default function InstitutionTeachingPermission() {
    return (
        <>
            <Head title="প্রতিষ্ঠানের শিক্ষাদানের অনুমতি" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'আমাদের সম্পর্কে',
                        },
                        {
                            label: 'স্টুডেন্টস্ গ্যালারি',
                        },
                    ]}
                    categoryIcon="fas fa-certificate text-accent"
                    category="প্রাতিষ্ঠানিক তথ্য"
                    title="প্রতিষ্ঠানের শিক্ষাদানের অনুমতি"
                    subtitle={`ঢাকা ক্রেডিট ইউনিয়ন স্কুলের শিক্ষাদান ও একাডেমিক কার্যক্রম পরিচালনার অনুমোদন সংক্রান্ত তথ্য।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            অনুমোদন ও স্বীকৃতি
                        </span>

                        <h2 className="mt-2 font-bangla-heading text-2xl font-bold sm:text-3xl">
                            শিক্ষাদানের অনুমোদন সম্পর্কে
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-foreground/70 sm:text-base">
                            একটি শিক্ষা প্রতিষ্ঠানের নিয়মিত পাঠদান ও একাডেমিক
                            কার্যক্রম পরিচালনার জন্য সংশ্লিষ্ট কর্তৃপক্ষের
                            অনুমোদন অত্যন্ত গুরুত্বপূর্ণ। এই পৃষ্ঠায়
                            প্রতিষ্ঠানের শিক্ষাদানের অনুমতি ও সংশ্লিষ্ট একাডেমিক
                            অনুমোদনের সংক্ষিপ্ত তথ্য তুলে ধরা হয়েছে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    INSTITUTION INFORMATION
                ====================================================== */}
                <section className="border-y border-border bg-muted/30">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8 text-center">
                                <span className="text-sm font-semibold text-primary">
                                    প্রতিষ্ঠানের তথ্য
                                </span>

                                <h2 className="mt-2 font-bangla-heading text-2xl font-bold sm:text-3xl">
                                    অনুমোদনের মৌলিক তথ্য
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {informationItems.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <i
                                                className={`${item.icon} text-lg`}
                                            />
                                        </div>

                                        <p className="mt-4 text-xs font-semibold text-foreground/50">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 font-bangla-heading text-base font-semibold">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DOCUMENTS
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-folder-open" />
                                অনুমোদনের তথ্য
                            </span>

                            <h2 className="mt-4 font-bangla-heading text-2xl font-bold sm:text-3xl md:text-4xl">
                                শিক্ষাদান সংক্রান্ত অনুমোদন
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/65 sm:text-base">
                                প্রতিষ্ঠানের শিক্ষা কার্যক্রম পরিচালনার সঙ্গে
                                সম্পর্কিত গুরুত্বপূর্ণ অনুমোদন ও তথ্যসমূহ।
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {permissionDocuments.map((document) => (
                                <article
                                    key={document.title}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:scale-110">
                                                <i
                                                    className={`${document.icon} text-xl`}
                                                />
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                                                <i className="fas fa-check-circle" />
                                                {document.status === 'approved'
                                                    ? 'অনুমোদিত'
                                                    : 'কার্যকর'}
                                            </span>
                                        </div>

                                        <p className="mt-5 text-xs font-semibold text-primary">
                                            {document.meta}
                                        </p>

                                        <h3 className="mt-2 font-bangla-heading text-xl font-bold">
                                            {document.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-foreground/65">
                                            {document.description}
                                        </p>

                                        <div className="mt-6 border-t border-border pt-4">
                                            <div className="flex items-center gap-2 text-xs text-foreground/55">
                                                <i className="fas fa-shield-alt text-primary" />

                                                <span>
                                                    অনুমোদিত প্রাতিষ্ঠানিক তথ্য
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DOCUMENT NOTICE
                ====================================================== */}
                <section className="container mx-auto px-4 pb-14 sm:pb-20">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-xl">
                        <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                                <i className="fas fa-file-contract text-2xl text-accent" />
                            </div>

                            <div>
                                <h2 className="font-bangla-heading text-xl font-bold sm:text-2xl">
                                    অনুমোদন সংক্রান্ত নথি
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-primary-foreground/75">
                                    শিক্ষাদানের অনুমোদন সংক্রান্ত বিস্তারিত নথি
                                    বা সনদ ভবিষ্যতে অনলাইনে প্রকাশ করা হলে এখান
                                    থেকে তা দেখা বা ডাউনলোড করা যাবে।
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="/images/permission/permission.jpg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/20"
                                >
                                    <i className="fas fa-eye" />
                                    নথি দেখুন
                                </a>

                                <a
                                    href="/images/permission/permission.jpg"
                                    download="institution-teaching-permission.jpg"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/20 px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                                >
                                    <i className="fas fa-download" />
                                    ডাউনলোড
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FOOTER CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-school text-xl" />
                            </div>

                            <h2 className="mt-5 font-bangla-heading text-2xl font-bold sm:text-3xl">
                                আমাদের প্রতিষ্ঠান সম্পর্কে আরও জানুন
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                বিদ্যালয়ের ইতিহাস, লক্ষ্য ও উদ্দেশ্য এবং
                                অন্যান্য প্রাতিষ্ঠানিক তথ্য জানতে আমাদের
                                সম্পর্কিত পৃষ্ঠাগুলো দেখুন।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/history"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-history" />
                                    প্রতিষ্ঠানের ইতিহাস
                                </Link>

                                <Link
                                    href="/governing-body"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-users-cog" />
                                    পরিচালনা পর্ষদ
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
