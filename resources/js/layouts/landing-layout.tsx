import { AppLogoIcon } from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useState } from 'react';

export function LandingLayout({ children }: PropsWithChildren) {
    return (
        <section className="flex min-h-screen w-full flex-col items-center">
            <Header />
            {children}
        </section>
    );
}

export function Header() {
    const [visibility, setVisibility] = useState<boolean>(false);

    useEffect(() => {
        const section = document.querySelector('#why_section');

        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibility(true);
                } else {
                    setVisibility(false);
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={cn(
                'fixed top-4 z-[400] mx-auto flex h-20 w-full max-w-5xl flex-row items-center justify-between rounded-2xl border border-slate-300/30 bg-white px-4 shadow shadow-gray-300 transition-all duration-700 ease-in-out',
                visibility ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-6 opacity-0',
            )}
        >
            <Link prefetch href={route('welcome')}>
                <AppLogoIcon className="w-32 fill-slate-900" exclamationMarkColor="#FF0000" />
            </Link>
            <div className="hidden items-center-safe justify-end gap-x-2 lg:flex">
                <Button variant={'outline'} size={'lg'} asChild>
                    <Link prefetch href={route('login')}>
                        Masuk
                    </Link>
                </Button>
                <Button size={'lg'}>Daftar!</Button>
            </div>
        </header>
    );
}
