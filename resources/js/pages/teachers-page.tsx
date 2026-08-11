import { Head } from '@inertiajs/react';

interface Teacher {
    name: string;
    designation: string;
    subject: string;
    qualification: string;
    image?: string;
    color: 'primary' | 'secondary' | 'green' | 'orange';
}

const teachers: Teacher[] = [
    {
        name: 'মোঃ আব্দুল্লাহ',
        designation: 'প্রধান শিক্ষক',
        subject: 'প্রশাসন ও একাডেমিক',
        qualification: 'এম.এড., এম.এ',
        color: 'primary',
    },
    {
        name: 'মোছাঃ ফারজানা আক্তার',
        designation: 'সহকারী প্রধান শিক্ষক',
        subject: 'বাংলা',
        qualification: 'এম.এ, বি.এড.',
        color: 'secondary',
    },
    {
        name: 'মোঃ রাকিবুল ইসলাম',
        designation: 'সহকারী শিক্ষক',
        subject: 'গণিত',
        qualification: 'এম.এসসি., বি.এড.',
        color: 'green',
    },
    {
        name: 'মোছাঃ নাজমা আক্তার',
        designation: 'সহকারী শিক্ষক',
        subject: 'বাংলা',
        qualification: 'এম.এ, বি.এড.',
        color: 'orange',
    },
    {
        name: 'মোঃ সাইফুল ইসলাম',
        designation: 'সহকারী শিক্ষক',
        subject: 'বিজ্ঞান',
        qualification: 'এম.এসসি., বি.এড.',
        color: 'primary',
    },
    {
        name: 'মোছাঃ শারমিন আক্তার',
        designation: 'সহকারী শিক্ষক',
        subject: 'ইংরেজি',
        qualification: 'এম.এ, বি.এড.',
        color: 'secondary',
    },
    {
        name: 'মোঃ মাহফুজুর রহমান',
        designation: 'সহকারী শিক্ষক',
        subject: 'কম্পিউটার ও তথ্যপ্রযুক্তি',
        qualification: 'এম.এসসি. ইন সিএসই',
        color: 'green',
    },
    {
        name: 'মোছাঃ সুমাইয়া আক্তার',
        designation: 'সহকারী শিক্ষক',
        subject: 'সামাজিক বিজ্ঞান',
        qualification: 'এম.এ, বি.এড.',
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

export default function Teachers() {
    return (
        <>
            <Head title="শিক্ষকমন্ডলী" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <i className="fas fa-chalkboard-teacher" />
                                অফিসিয়াল
                            </span>

                            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                                শিক্ষকমন্ডলী
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                দক্ষ, অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমন্ডলীর
                                তত্ত্বাবধানে শিক্ষার্থীদের জ্ঞান ও মূল্যবোধের
                                বিকাশ।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের শিক্ষকবৃন্দ
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            জ্ঞান ও আদর্শের আলোকবর্তিকা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একজন শিক্ষকের দায়িত্ব শুধু পাঠদান করা নয়; বরং
                            শিক্ষার্থীদের চিন্তাশক্তি, সৃজনশীলতা, নৈতিকতা ও
                            মানবিক মূল্যবোধ বিকাশে সহায়তা করা। আমাদের
                            শিক্ষকমন্ডলী আন্তরিকতা ও দায়িত্বশীলতার সঙ্গে
                            শিক্ষার্থীদের ভবিষ্যৎ গঠনে কাজ করে যাচ্ছেন।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    TEACHER STATISTICS
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto px-4 py-8 sm:py-10">
                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                            <StatCard
                                icon="fas fa-chalkboard-teacher"
                                value="০৮+"
                                label="শিক্ষক"
                                color="primary"
                            />

                            <StatCard
                                icon="fas fa-book-open"
                                value="০৮+"
                                label="বিষয়"
                                color="secondary"
                            />

                            <StatCard
                                icon="fas fa-user-graduate"
                                value="১০০%"
                                label="দক্ষ শিক্ষক"
                                color="green"
                            />

                            <StatCard
                                icon="fas fa-award"
                                value="অভিজ্ঞ"
                                label="শিক্ষকমন্ডলী"
                                color="orange"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    TEACHER LIST
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-users" />
                                আমাদের টিম
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                                আমাদের শিক্ষকমন্ডলী
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানে আমাদের
                                নিবেদিতপ্রাণ শিক্ষকবৃন্দ।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {teachers.map((teacher) => (
                                <TeacherCard
                                    key={`${teacher.name}-${teacher.subject}`}
                                    teacher={teacher}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    TEACHING PHILOSOPHY
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-5xl rounded-2xl border border-dashed border-border bg-background p-6 sm:p-8 md:p-10">
                            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                                <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-0">
                                    <i className="fas fa-lightbulb text-3xl" />
                                </div>

                                <div className="text-center md:text-left">
                                    <span className="text-sm font-semibold text-primary">
                                        আমাদের অঙ্গীকার
                                    </span>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        শিক্ষার্থীর ভবিষ্যৎ গঠনে আমরা
                                        প্রতিশ্রুতিবদ্ধ
                                    </h2>

                                    <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                                        আধুনিক শিক্ষাপদ্ধতি, প্রযুক্তির ব্যবহার
                                        এবং নৈতিক শিক্ষার সমন্বয়ের মাধ্যমে
                                        প্রতিটি শিক্ষার্থীকে তার সম্ভাবনার
                                        সর্বোচ্চ পর্যায়ে পৌঁছাতে সহায়তা করাই
                                        আমাদের শিক্ষকদের প্রধান লক্ষ্য।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

/* =====================================================
    TEACHER CARD
====================================================== */

interface TeacherCardProps {
    teacher: Teacher;
}

function TeacherCard({ teacher }: TeacherCardProps) {
    const colors = colorClasses[teacher.color];

    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Teacher Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-muted/40">
                {teacher.image ? (
                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`flex h-28 w-28 items-center justify-center rounded-full ${colors.icon}`}
                    >
                        <i className="fas fa-user-tie text-5xl" />
                    </div>
                )}

                {/* Designation Badge */}
                <div className="absolute top-4 left-4">
                    <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${colors.badge}`}
                    >
                        {teacher.designation}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 text-center">
                <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                    {teacher.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                    {teacher.subject}
                </p>

                <p className="mt-2 text-xs leading-6 text-foreground/60">
                    {teacher.qualification}
                </p>

                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
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
    color: 'primary' | 'secondary' | 'green' | 'orange';
}

function StatCard({ icon, value, label, color }: StatCardProps) {
    const colors = colorClasses[color];

    return (
        <div className="rounded-xl border border-border bg-background p-4 text-center transition hover:-translate-y-1 hover:shadow-md sm:p-5">
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
