function PageHeader({
    parent_page_icon,
    parent_page_title,
    page_title,
    page_subtitle,
}: any) {
    return (
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
            {/* Theme-aware overlay */}
            <div className="absolute inset-0 bg-foreground/10" />

            {/* Subtle theme color overlay */}
            <div className="absolute inset-0 bg-primary/20" />

            <div className="relative container mx-auto px-4 py-16 text-center sm:py-20 md:py-24">
                {/* Parent Page */}
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    <i className="fas fa-images" />
                    {parent_page_title ?? 'ঢাকা ক্রেডিট ইউনিয়ন স্কুল'}
                </span>

                {/* Page Title */}
                <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                    {page_title}
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                    {page_subtitle}
                </p>

                {/* Decorative line */}
                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
            </div>
        </section>
    );
}

export default PageHeader;
