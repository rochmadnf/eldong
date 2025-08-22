import { AppLogoIcon } from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useState } from 'react';

export function LandingLayout({ children }: PropsWithChildren) {
    return (
        <main className="h-full w-full">
            <Header />
            {children}
        </main>
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
                'fixed top-0 left-1/2 z-[400] mx-auto flex h-16 w-full max-w-5xl -translate-x-1/2 flex-row items-center justify-between bg-white px-4 shadow shadow-gray-300 transition-all duration-700 ease-in-out xl:rounded-b-2xl',
                visibility ? 'xl:top-4 xl:rounded-t-2xl' : 'xl:rounded-t-none',
            )}
        >
            <Link prefetch href={route('welcome')}>
                <AppLogoIcon className="w-28 fill-slate-900" exclamationMarkColor="#FF0000" />
            </Link>
            <div className="hidden items-center-safe justify-end gap-x-2 lg:flex">
                <Button variant={'none'} className="bg-white font-medium ring-1 ring-pink-400 hover:bg-pink-50" size={'lg'} asChild>
                    <Link prefetch href={route('login')}>
                        Masuk
                    </Link>
                </Button>
                <Button size={'lg'} variant={'pink'} className="font-bold">
                    Daftar!
                </Button>
            </div>
        </header>
    );
}
