import { AppLogoIcon } from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { FileSearchIcon, HomeIcon, LineSquiggleIcon, MegaphoneIcon, PlusIcon } from 'lucide-react';
import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';

export function LandingLayout({ children }: PropsWithChildren) {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    return (
        <main className="relative mx-auto h-full max-w-[428px]">
            <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            {children}
            <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
                <DrawerContent>
                    <h5 className="mt-4 px-4 font-bold">Menu</h5>
                    <div className="flex w-full flex-row gap-4 overflow-x-auto p-4">
                        <button className="flex size-28 shrink-0 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-md border border-pink-300 bg-pink-100 text-pink-700 hover:bg-pink-200/75 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                            <HomeIcon className="size-9" />
                            <span className="text-sm">Beranda</span>
                        </button>
                        <button className="flex size-28 shrink-0 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl border border-pink-200 bg-pink-50 text-pink-400 transition duration-200 hover:border-pink-300 hover:bg-pink-100 hover:text-pink-700 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                            <MegaphoneIcon className="size-9" />
                            <span className="text-sm">Lapor!</span>
                        </button>
                        <button className="flex size-28 shrink-0 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl border border-pink-200 bg-pink-50 text-pink-400 transition duration-200 hover:border-pink-300 hover:bg-pink-100 hover:text-pink-700 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                            <FileSearchIcon className="size-9" />
                            <span className="text-sm">Cek Laporan</span>
                        </button>
                        <button className="flex size-28 shrink-0 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl border border-pink-200 bg-pink-50 text-pink-400 transition duration-200 hover:border-pink-300 hover:bg-pink-100 hover:text-pink-700 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                            <LineSquiggleIcon className="size-9" />
                            <span className="text-sm">Alur Lapor</span>
                        </button>
                    </div>

                    <DrawerFooter className="max-w-[428px]">
                        <h5 className="mb-2 font-bold">Akun</h5>
                        <div className="flex max-w-[428px] items-center-safe gap-x-2">
                            <Button variant={'none'} className="w-1/2 bg-white font-medium ring-1 ring-pink-400 hover:bg-pink-50" size={'xl'} asChild>
                                <Link prefetch href={route('login')}>
                                    Masuk
                                </Link>
                            </Button>
                            <Button size={'xl'} variant={'pink'} className="w-1/2 font-bold">
                                Daftar!
                            </Button>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </main>
    );
}

interface HeaderProps {
    openDrawer: boolean;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export function Header({ openDrawer, setOpenDrawer }: HeaderProps) {
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
                'fixed top-0 left-1/2 z-[400] mx-auto flex h-16 w-[428px] max-w-5xl -translate-x-1/2 flex-row items-center justify-between bg-white px-4 shadow shadow-gray-300 transition-all duration-700 ease-in-out',
            )}
        >
            <Link prefetch href={route('welcome')}>
                <AppLogoIcon className="w-28 fill-slate-900" exclamationMarkColor="#FF0000" />
            </Link>
            <div className="hidden items-center-safe justify-end gap-x-2">
                <Button variant={'none'} className="bg-white font-medium ring-1 ring-pink-400 hover:bg-pink-50" size={'lg'} asChild>
                    <Link prefetch href={route('login')}>
                        Masuk
                    </Link>
                </Button>
                <Button size={'lg'} variant={'pink'} className="font-bold">
                    Daftar!
                </Button>
            </div>

            <button
                onClick={() => setOpenDrawer(!openDrawer)}
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-xs border-2 border-white bg-gray-200 text-slate-700 ring-1 ring-black/30 transition duration-150 hover:bg-gray-300"
            >
                <PlusIcon
                    className={cn('pointer-events-none size-5 transform transition-transform duration-300', openDrawer ? 'rotate-45' : 'rotate-0')}
                />
            </button>
        </header>
    );
}
