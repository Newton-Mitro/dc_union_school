import { Head } from '@inertiajs/react';
import PageHeader from '../components/page-header';

type StaffColor = 'primary' | 'secondary' | 'green' | 'orange';

interface Staff {
    name: string;
    designation: string;
    department: string;
    qualification: string;
    image?: string;
    color: StaffColor;
}

const staffs: Staff[] = [
    {
        name: 'মোঃ আব্দুর রহমান',
        designation: 'অফিস সহকারী',
        department: 'প্রশাসনিক বিভাগ',
        qualification: 'স্নাতক',
        color: 'primary',
    },
    {
        name: 'মোছাঃ শারমিন আক্তার',
        designation: 'হিসাব সহকারী',
        department: 'হিসাব বিভাগ',
        qualification: 'স্নাতক',
        color: 'secondary',
    },
    {
        name: 'মোঃ কামরুল হাসান',
        designation: 'ল্যাব সহকারী',
        department: 'বিজ্ঞান ও কম্পিউটার ল্যাব',
        qualification: 'ডিপ্লোমা',
        color: 'green',
    },
    {
        name: 'মোঃ সোহেল রানা',
        designation: 'অফিস সহায়ক',
        department: 'প্রশাসনিক বিভাগ',
        qualification: 'উচ্চ মাধ্যমিক',
        color: 'orange',
    },
    {
        name: 'মোছাঃ রেহানা পারভীন',
        designation: 'লাইব্রেরি সহকারী',
        department: 'লাইব্রেরি',
        qualification: 'স্নাতক',
        color: 'primary',
    },
    {
        name: 'মোঃ জাকির হোসেন',
        designation: 'নিরাপত্তাকর্মী',
        department: 'নিরাপত্তা বিভাগ',
        qualification: 'মাধ্যমিক',
        color: 'secondary',
    },
    {
        name: 'মোঃ রফিকুল ইসলাম',
        designation: 'পরিচ্ছন্নতাকর্মী',
        department: 'সাপোর্ট সার্ভিস',
        qualification: 'মাধ্যমিক',
        color: 'green',
    },
    {
        name: 'মোছাঃ নাসরিন আক্তার',
        designation: 'সহায়ক কর্মী',
        department: 'সাপোর্ট সার্ভিস',
        qualification: 'মাধ্যমিক',
        color: 'orange',
    },
];

const colorClasses = {
    primary: {
        icon: 'bg-primary/10 text-primary',
        badge: 'bg-primary/10 text-primary',
        line: 'bg-primary',
    },
    secondary: {
        icon: 'bg-secondary/10 text-secondary',
        badge: 'bg-secondary/10 text-secondary',
        line: 'bg-secondary',
    },
    green: {
        icon: 'bg-green-500/10 text-green-600',
        badge: 'bg-green-500/10 text-green-600',
        line: 'bg-green-500',
    },
    orange: {
        icon: 'bg-orange-500/10 text-orange-600',
        badge: 'bg-orange-500/10 text-orange-600',
        line: 'bg-orange-500',
    },
};

export default function Staffs() {
    return (
        <>
            <Head title="অন্যান্য কর্মীবৃন্দ" />

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
                            label: 'অন্যান্য কর্মীবৃন্দ',
                        },
                    ]}
                    categoryIcon="fas fa-user-tie"
                    category="অফিসিয়াল"
                    title="অন্যান্য কর্মীবৃন্দ"
                    subtitle={`বিদ্যালয়ের প্রশাসনিক, একাডেমিক ও সহায়ক কার্যক্রম সুষ্ঠুভাবে পরিচালনায় নিয়োজিত কর্মীবৃন্দ।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের সহায়ক টিম
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            বিদ্যালয়ের কার্যক্রমে গুরুত্বপূর্ণ ভূমিকা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একটি শিক্ষা প্রতিষ্ঠানের সফল পরিচালনার জন্য
                            শিক্ষকদের পাশাপাশি দক্ষ প্রশাসনিক ও সহায়ক
                            কর্মীবৃন্দের ভূমিকা অত্যন্ত গুরুত্বপূর্ণ। আমাদের
                            কর্মীবৃন্দ নিষ্ঠা, দায়িত্বশীলতা ও আন্তরিকতার সঙ্গে
                            বিদ্যালয়ের দৈনন্দিন কার্যক্রম পরিচালনায় সহযোগিতা করে
                            যাচ্ছেন।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    STAFF STATISTICS
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto px-4 py-8 sm:py-10">
                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                            <StatCard
                                icon="fas fa-users"
                                value="০৮+"
                                label="কর্মীবৃন্দ"
                                color="primary"
                            />

                            <StatCard
                                icon="fas fa-building"
                                value="০৫+"
                                label="বিভাগ"
                                color="secondary"
                            />

                            <StatCard
                                icon="fas fa-user-check"
                                value="১০০%"
                                label="দায়িত্বশীল"
                                color="green"
                            />

                            <StatCard
                                icon="fas fa-hands-helping"
                                value="২৪/৭"
                                label="সহযোগিতা"
                                color="orange"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    STAFF LIST
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-users-cog" />
                                আমাদের টিম
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                                কর্মীবৃন্দ
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                বিদ্যালয়ের সার্বিক কার্যক্রম পরিচালনায় নিয়োজিত
                                আমাদের কর্মীবৃন্দ।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {staffs.map((staff) => (
                                <StaffCard
                                    key={`${staff.name}-${staff.designation}`}
                                    staff={staff}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RESPONSIBILITY SECTION
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-8 text-center">
                                <span className="text-sm font-semibold text-primary">
                                    আমাদের দায়িত্ব
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    সম্মিলিত প্রচেষ্টায় একটি সুন্দর শিক্ষা
                                    পরিবেশ
                                </h2>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                <ResponsibilityCard
                                    icon="fas fa-clipboard-check"
                                    title="প্রশাসনিক সহযোগিতা"
                                    description="বিদ্যালয়ের প্রশাসনিক ও দাপ্তরিক কার্যক্রম সুষ্ঠুভাবে পরিচালনায় সহযোগিতা করা।"
                                    color="primary"
                                />

                                <ResponsibilityCard
                                    icon="fas fa-tools"
                                    title="সেবা ও রক্ষণাবেক্ষণ"
                                    description="বিদ্যালয়ের বিভিন্ন সুবিধা, অবকাঠামো ও দৈনন্দিন কার্যক্রম সচল রাখতে সহযোগিতা করা।"
                                    color="secondary"
                                />

                                <ResponsibilityCard
                                    icon="fas fa-user-shield"
                                    title="নিরাপদ পরিবেশ"
                                    description="শিক্ষার্থী ও শিক্ষকসহ সকলের জন্য নিরাপদ ও পরিচ্ছন্ন শিক্ষা পরিবেশ নিশ্চিত করতে সহযোগিতা করা।"
                                    color="green"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-card p-6 text-center sm:p-8 md:p-10">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <i className="fas fa-school text-xl" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                            আমাদের সম্মিলিত অঙ্গীকার
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                            শিক্ষার্থী, শিক্ষক, অভিভাবক ও কর্মীবৃন্দের সম্মিলিত
                            প্রচেষ্টায় একটি সুন্দর, নিরাপদ ও শিক্ষাবান্ধব পরিবেশ
                            গড়ে তোলাই আমাদের লক্ষ্য।
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

/* =====================================================
    STAFF CARD
====================================================== */

interface StaffCardProps {
    staff: Staff;
}

function StaffCard({ staff }: StaffCardProps) {
    const colors = colorClasses[staff.color];

    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image / Avatar */}
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-muted/40">
                {staff.image ? (
                    <img
                        src={staff.image}
                        alt={staff.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`flex h-28 w-28 items-center justify-center rounded-full ${colors.icon}`}
                    >
                        <i className="fas fa-user-tie text-5xl" />
                    </div>
                )}

                <div className="absolute top-4 left-4">
                    <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${colors.badge}`}
                    >
                        {staff.designation}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 text-center">
                <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                    {staff.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                    {staff.department}
                </p>

                <p className="mt-2 text-xs leading-6 text-foreground/60">
                    {staff.qualification}
                </p>

                <div
                    className={`mx-auto mt-4 h-1 w-10 rounded-full ${colors.line} transition-all duration-300 group-hover:w-16`}
                />
            </div>
        </article>
    );
}

/* =====================================================
    STAT CARD
====================================================== */

interface StatCardProps {
    icon: string;
    value: string;
    label: string;
    color: StaffColor;
}

function StatCard({ icon, value, label, color }: StatCardProps) {
    const colors = colorClasses[color];

    return (
        <div className="rounded-xl border border-border bg-background p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${colors.icon}`}
            >
                <i className={icon} />
            </div>

            <div className="mt-3 text-xl font-bold sm:text-2xl">{value}</div>

            <div className="mt-1 text-xs text-foreground/60 sm:text-sm">
                {label}
            </div>
        </div>
    );
}

/* =====================================================
    RESPONSIBILITY CARD
====================================================== */

interface ResponsibilityCardProps {
    icon: string;
    title: string;
    description: string;
    color: StaffColor;
}

function ResponsibilityCard({
    icon,
    title,
    description,
    color,
}: ResponsibilityCardProps) {
    const colors = colorClasses[color];

    return (
        <div className="group rounded-2xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${colors.icon}`}
            >
                <i className={`${icon} text-xl`} />
            </div>

            <h3 className="mt-5 text-lg font-bold">{title}</h3>

            <p className="mt-3 text-sm leading-7 text-foreground/70">
                {description}
            </p>
        </div>
    );
}
