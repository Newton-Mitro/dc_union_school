import { Link } from '@inertiajs/react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
    category?: string;
    categoryIcon?: string;
    title: string;
    subtitle?: string;
    status?: {
        label: string;
        active?: boolean;
    };
    className?: string;
}

export default function PageHeader({
    breadcrumbs = [],
    category,
    categoryIcon,
    title,
    subtitle,
    status,
    className = '',
}: PageHeaderProps) {
    return (
        <section
            className={`relative overflow-hidden bg-primary/30 text-white ${className}`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />

            <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Breadcrumb */}
                    {breadcrumbs.length > 0 && (
                        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                            {breadcrumbs.map((item, index) => (
                                <div
                                    key={`${item.label}-${index}`}
                                    className="flex items-center gap-2"
                                >
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="text-white/65 transition hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="font-medium text-white/95">
                                            {item.label}
                                        </span>
                                    )}

                                    {index < breadcrumbs.length - 1 && (
                                        <i className="fas fa-chevron-right text-[9px] text-white/40" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Category */}
                    {category && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                            {categoryIcon && (
                                <i className={`${categoryIcon} text-white`} />
                            )}

                            <span className="text-white">{category}</span>
                        </span>
                    )}

                    {/* Title */}
                    <h1 className="mt-5 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-white/75 sm:text-base">
                            {subtitle}
                        </p>
                    )}

                    {/* Status */}
                    {status && (
                        <div className="mt-5 flex justify-center">
                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                                    status.active
                                        ? 'bg-green-500 text-white'
                                        : 'border border-white/10 bg-white/10 text-white/75'
                                }`}
                            >
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        status.active
                                            ? 'bg-white'
                                            : 'bg-white/50'
                                    }`}
                                />

                                {status.label}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
