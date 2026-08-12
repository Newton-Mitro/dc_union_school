import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

const features = [
    {
        icon: 'fas fa-video',
        title: '২৪/৭ ভিডিও পর্যবেক্ষণ',
        description:
            'বিদ্যালয়ের গুরুত্বপূর্ণ স্থানগুলোতে সার্বক্ষণিক CCTV ক্যামেরার মাধ্যমে নিরাপত্তা পর্যবেক্ষণ করা হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'নিরাপদ ক্যাম্পাস',
        description:
            'শিক্ষার্থী, শিক্ষক ও কর্মীদের জন্য একটি নিরাপদ ও সুশৃঙ্খল শিক্ষার পরিবেশ নিশ্চিত করতে CCTV ব্যবস্থার ব্যবহার করা হয়।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-eye',
        title: 'নিয়মিত পর্যবেক্ষণ',
        description:
            'বিদ্যালয়ের প্রবেশপথ, করিডোর ও অন্যান্য গুরুত্বপূর্ণ স্থান নিয়মিত পর্যবেক্ষণের আওতায় রাখা হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-user-shield',
        title: 'শিক্ষার্থীদের নিরাপত্তা',
        description:
            'বিদ্যালয়ে অবস্থানরত শিক্ষার্থীদের নিরাপত্তা নিশ্চিত করতে CCTV নজরদারি গুরুত্বপূর্ণ ভূমিকা পালন করে।',
        color: 'secondary',
    },
];

const monitoredAreas = [
    {
        icon: 'fas fa-door-open',
        title: 'প্রধান প্রবেশপথ',
        description: 'বিদ্যালয়ে প্রবেশ ও বের হওয়ার স্থান পর্যবেক্ষণ।',
    },
    {
        icon: 'fas fa-school',
        title: 'বিদ্যালয় ভবন',
        description: 'ভবনের গুরুত্বপূর্ণ অংশে নিরাপত্তা পর্যবেক্ষণ।',
    },
    {
        icon: 'fas fa-walking',
        title: 'করিডোর',
        description: 'শিক্ষার্থী ও কর্মীদের চলাচলের স্থান পর্যবেক্ষণ।',
    },
    {
        icon: 'fas fa-users',
        title: 'সাধারণ স্থান',
        description: 'শিক্ষার্থীদের সমাগমস্থল ও গুরুত্বপূর্ণ এলাকা পর্যবেক্ষণ।',
    },
    {
        icon: 'fas fa-parking',
        title: 'পার্কিং এলাকা',
        description: 'যানবাহন ও পার্কিং এলাকার নিরাপত্তা পর্যবেক্ষণ।',
    },
    {
        icon: 'fas fa-building',
        title: 'অন্যান্য গুরুত্বপূর্ণ স্থান',
        description: 'প্রয়োজন অনুযায়ী অন্যান্য গুরুত্বপূর্ণ স্থান পর্যবেক্ষণ।',
    },
];

export default function Cctv() {
    return (
        <>
            <Head title="সিসিটিভি নিরাপত্তা ব্যবস্থা" />

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
                            label: 'সিসিটিভি নিরাপত্তা ব্যবস্থা',
                        },
                    ]}
                    categoryIcon="fas fa-video"
                    category="বিদ্যালয়ের সুবিধাসমূহ"
                    title="সিসিটিভি নিরাপত্তা ব্যবস্থা"
                    subtitle={`নিরাপদ, সুশৃঙ্খল ও শিক্ষাবান্ধব পরিবেশ নিশ্চিত করতে বিদ্যালয়ে আধুনিক CCTV নজরদারি ব্যবস্থা।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            নিরাপত্তা ব্যবস্থা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            নিরাপদ ক্যাম্পাস, নিশ্চিন্ত শিক্ষার পরিবেশ
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            শিক্ষার্থীদের নিরাপত্তা আমাদের অন্যতম প্রধান
                            অগ্রাধিকার। বিদ্যালয়ের গুরুত্বপূর্ণ স্থানগুলোতে CCTV
                            ক্যামেরার মাধ্যমে নিয়মিত নজরদারি করা হয়। এর মাধ্যমে
                            বিদ্যালয়ের সার্বিক নিরাপত্তা ব্যবস্থা আরও কার্যকর ও
                            সুশৃঙ্খল রাখা সম্ভব হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    HIGHLIGHT CARD
                ====================================================== */}
                <section className="container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
                        <div className="grid items-center md:grid-cols-[180px_1fr]">
                            <div className="flex justify-center p-8 md:p-10">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary-foreground/15 ring-8 ring-primary-foreground/10">
                                    <i className="fas fa-video text-5xl" />
                                </div>
                            </div>

                            <div className="px-6 pb-8 text-center md:px-8 md:py-10 md:text-left">
                                <span className="text-sm font-semibold text-primary-foreground/80">
                                    নিরাপত্তাই প্রথম
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    আধুনিক CCTV নজরদারি ব্যবস্থা
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                    বিদ্যালয়ের নিরাপত্তা আরও শক্তিশালী করতে
                                    গুরুত্বপূর্ণ স্থানগুলোতে CCTV ক্যামেরার
                                    মাধ্যমে নিয়মিত পর্যবেক্ষণ করা হয়।
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
                                <i className="fas fa-shield-alt" />
                                নিরাপত্তার বৈশিষ্ট্য
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                আমাদের CCTV ব্যবস্থার সুবিধাসমূহ
                            </h2>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
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
                    MONITORED AREAS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                        <span className="text-sm font-semibold text-primary">
                            পর্যবেক্ষণের আওতাভুক্ত স্থান
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            যেসব স্থান নিয়মিত পর্যবেক্ষণ করা হয়
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {monitoredAreas.map((area, index) => (
                            <div
                                key={area.title}
                                className="flex items-start gap-4 rounded-2xl border border-dashed border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <i className={`${area.icon} text-lg`} />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <h3 className="font-bold">
                                            {area.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    SAFETY MESSAGE
                ====================================================== */}
                <section className="border-t border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                <i className="fas fa-user-shield text-2xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                নিরাপদ পরিবেশ আমাদের অঙ্গীকার
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীরা যেন নিরাপদ, আনন্দময় ও শিক্ষাবান্ধব
                                পরিবেশে তাদের শিক্ষা কার্যক্রম সম্পন্ন করতে
                                পারে—সেই লক্ষ্যেই বিদ্যালয়ের নিরাপত্তা
                                ব্যবস্থাকে গুরুত্ব দেওয়া হয়।
                            </p>

                            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-info-circle" />
                                    আমাদের সম্পর্কে
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-phone-alt" />
                                    যোগাযোগ
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
