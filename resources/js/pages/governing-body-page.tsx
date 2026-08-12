import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface CommitteeMember {
    name: string;
    designation: string;
    icon: string;
    color: 'primary' | 'secondary';
}

const committeeMembers: CommitteeMember[] = [
    {
        name: 'সভাপতি',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user-tie',
        color: 'primary',
    },
    {
        name: 'সদস্য',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user',
        color: 'secondary',
    },
    {
        name: 'সদস্য',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user',
        color: 'primary',
    },
    {
        name: 'সদস্য',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user',
        color: 'secondary',
    },
    {
        name: 'সদস্য',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user',
        color: 'primary',
    },
    {
        name: 'সদস্য সচিব',
        designation: 'ম্যানেজিং কমিটি',
        icon: 'fas fa-user-cog',
        color: 'secondary',
    },
];

const responsibilities = [
    {
        icon: 'fas fa-school',
        title: 'বিদ্যালয় পরিচালনা',
        description:
            'বিদ্যালয়ের সার্বিক প্রশাসনিক ও ব্যবস্থাপনাগত কার্যক্রম সুষ্ঠুভাবে পরিচালনায় দিকনির্দেশনা প্রদান করা।',
    },
    {
        icon: 'fas fa-chart-line',
        title: 'উন্নয়ন পরিকল্পনা',
        description:
            'বিদ্যালয়ের অবকাঠামো, শিক্ষা কার্যক্রম ও সামগ্রিক উন্নয়নের জন্য পরিকল্পনা গ্রহণ ও বাস্তবায়নে সহযোগিতা করা।',
    },
    {
        icon: 'fas fa-user-graduate',
        title: 'শিক্ষার মান উন্নয়ন',
        description:
            'শিক্ষার গুণগত মান বৃদ্ধি এবং শিক্ষার্থীদের জন্য একটি সুন্দর ও নিরাপদ শিক্ষার পরিবেশ নিশ্চিত করা।',
    },
    {
        icon: 'fas fa-users',
        title: 'সমন্বয় ও সহযোগিতা',
        description:
            'শিক্ষক, শিক্ষার্থী, অভিভাবক ও সংশ্লিষ্ট অংশীজনদের মধ্যে সমন্বয় ও সহযোগিতা বৃদ্ধি করা।',
    },
    {
        icon: 'fas fa-clipboard-check',
        title: 'নীতি ও সিদ্ধান্ত',
        description:
            'বিদ্যালয়ের প্রয়োজন অনুযায়ী বিভিন্ন নীতিগত সিদ্ধান্ত গ্রহণ এবং কার্যক্রমের অগ্রগতি পর্যবেক্ষণ করা।',
    },
    {
        icon: 'fas fa-heart',
        title: 'নৈতিক মূল্যবোধ',
        description:
            'শিক্ষার্থীদের নৈতিকতা, মানবিকতা, শৃঙ্খলা ও সামাজিক মূল্যবোধ বিকাশে সহায়ক পরিবেশ তৈরি করা।',
    },
];

export default function GoverningBody() {
    return (
        <>
            <Head title="ম্যানেজিং কমিটি" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'অফিসিয়াল',
                        },
                        {
                            label: 'ম্যানেজিং কমিটি',
                        },
                    ]}
                    categoryIcon="fas fa-landmark"
                    category="অফিসিয়াল"
                    title="ম্যানেজিং কমিটি"
                    subtitle={`বিদ্যালয়ের সার্বিক পরিচালনা, উন্নয়ন ও শিক্ষার মানোন্নয়নে দায়িত্বশীল ম্যানেজিং কমিটি।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের নেতৃত্ব
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            বিদ্যালয়ের উন্নয়নে দায়িত্বশীল নেতৃত্ব
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একটি শিক্ষা প্রতিষ্ঠানের সুষ্ঠু পরিচালনা ও
                            দীর্ঘমেয়াদি উন্নয়নের জন্য দক্ষ ও দায়িত্বশীল নেতৃত্ব
                            অত্যন্ত গুরুত্বপূর্ণ। ঢাকা ক্রেডিট ইউনিয়ন স্কুলের
                            ম্যানেজিং কমিটি বিদ্যালয়ের শিক্ষা, প্রশাসন ও উন্নয়ন
                            কার্যক্রমে প্রয়োজনীয় দিকনির্দেশনা প্রদান করে থাকে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    COMMITTEE MEMBERS
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            <SectionHeading
                                icon="fas fa-users-cog"
                                eyebrow="ম্যানেজিং কমিটি"
                                title="কমিটির সদস্যবৃন্দ"
                                description="বিদ্যালয়ের সার্বিক কার্যক্রম পরিচালনায় দায়িত্বপ্রাপ্ত কমিটির সদস্যবৃন্দ।"
                            />

                            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {committeeMembers.map((member, index) => (
                                    <CommitteeCard
                                        key={`${member.name}-${index}`}
                                        member={member}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RESPONSIBILITIES
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <SectionHeading
                            icon="fas fa-tasks"
                            eyebrow="দায়িত্ব ও কার্যক্রম"
                            title="ম্যানেজিং কমিটির দায়িত্ব"
                            description="বিদ্যালয়ের শিক্ষা ও প্রশাসনিক কার্যক্রমকে আরও কার্যকর ও উন্নত করতে কমিটি বিভিন্ন গুরুত্বপূর্ণ দায়িত্ব পালন করে।"
                        />

                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {responsibilities.map((item) => (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                        <i className={`${item.icon} text-lg`} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    VALUES
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16">
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                            <ValueCard
                                icon="fas fa-balance-scale"
                                title="স্বচ্ছতা"
                                description="সুষ্ঠু ও স্বচ্ছ ব্যবস্থাপনার মাধ্যমে বিদ্যালয়ের কার্যক্রম পরিচালনা।"
                            />

                            <ValueCard
                                icon="fas fa-handshake"
                                title="সহযোগিতা"
                                description="শিক্ষক, শিক্ষার্থী ও অভিভাবকদের সঙ্গে সমন্বিতভাবে কাজ করা।"
                            />

                            <ValueCard
                                icon="fas fa-award"
                                title="মানোন্নয়ন"
                                description="শিক্ষার মান ও বিদ্যালয়ের সার্বিক পরিবেশ উন্নয়নে গুরুত্ব প্রদান।"
                            />
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
                                <i className="fas fa-school text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে
                                শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করাই
                                আমাদের সম্মিলিত প্রত্যয়।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/teachers"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    <i className="fas fa-chalkboard-teacher" />
                                    শিক্ষকমন্ডলী
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
    COMMITTEE CARD
===================================================== */

interface CommitteeCardProps {
    member: CommitteeMember;
    index: number;
}

function CommitteeCard({ member, index }: CommitteeCardProps) {
    const isPrimary = member.color === 'primary';

    return (
        <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Top Accent */}
            <div
                className={`h-1.5 ${isPrimary ? 'bg-primary' : 'bg-secondary'}`}
            />

            <div className="p-6 text-center sm:p-7">
                {/* Avatar */}
                <div
                    className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-background shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                        isPrimary
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                    }`}
                >
                    <i className={`${member.icon} text-3xl`} />
                </div>

                {/* Number */}
                <span
                    className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        isPrimary
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                    }`}
                >
                    সদস্য {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>

                <p className="mt-1 text-sm text-foreground/60">
                    {member.designation}
                </p>

                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-border transition-all duration-300 group-hover:w-16" />
            </div>
        </div>
    );
}

/* =====================================================
    VALUE CARD
===================================================== */

interface ValueCardProps {
    icon: string;
    title: string;
    description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <i className={`${icon} text-lg`} />
            </div>

            <h3 className="mt-4 font-bold">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
                {description}
            </p>
        </div>
    );
}
