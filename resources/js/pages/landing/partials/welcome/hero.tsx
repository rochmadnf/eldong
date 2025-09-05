import { Highlighter } from '@/components/magicui/highlighter';
import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export function HeroSection() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-white via-aprimary/50 to-aprimary/90 px-4 pt-26 2sm:px-8 2sm:pt-30">
            <h1 className="z-1 w-full text-4xl font-bold tracking-tight text-slate-950 2sm:text-5xl/15">
                Lapor setiap kejadian dengan{' '}
                <Highlighter action="underline" color="#E60076" iterations={3} animationDuration={2000}>
                    mudah,
                </Highlighter>
                &nbsp;
                <Highlighter action="underline" color="#E60076" iterations={3} animationDuration={2000}>
                    cepat
                </Highlighter>{' '}
                dan{' '}
                <Highlighter action="underline" color="#E60076" iterations={3} animationDuration={2000}>
                    aman.{' '}
                </Highlighter>
            </h1>
            <h3 className="mt-5 text-sm/6 font-medium text-slate-800 2sm:mt-10 2sm:text-base/8">
                <strong>E-Lapor Bupati!</strong> adalah platform layanan digital yang diperuntukkan bagi masyarakat{' '}
                <strong>Kabupaten Donggala</strong> untuk menyampaikan keluhan maupun aspirasi secara langsung kepada pimpinan dengan akses yang
                mudah, cepat, dan aman melalui situs web atau aplikasi <em>mobile</em>.
            </h3>

            <div className="z-1 mt-8 grid w-full grid-cols-1 gap-4">
                <Button className="col-span-1 font-bold tracking-wide" variant="pink" size="xl" asChild>
                    <Link href={route('report.new')}>Yuk Lapor!</Link>
                </Button>
                <Button className="col-span-1 font-bold" variant="pinkSecondary" size="xl">
                    Cek Laporan
                </Button>
            </div>

            <InteractiveGridPattern
                height={60}
                width={65}
                squares={[50, 50]}
                className={cn(
                    '[mask-image:radial-gradient(var(--radius-mask)_circle_at_center,white,transparent)] [--radius-mask:400px] sm:[--radius-mask:700px]',
                    'inset-x-0 h-[120%]',
                )}
                squaresClassName="stroke-red-400/30 hover:fill-red-300/50"
            />
        </div>
    );
}
