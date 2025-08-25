import { Highlighter } from '@/components/magicui/highlighter';
import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-aprimary/50 to-aprimary/90 px-4 xl:px-32 [@media(height<=480px)and(width<=400)]:pt-22">
            <h1 className="w-full text-4xl font-bold tracking-tight text-slate-950 xl:max-w-4xl xl:text-center xl:text-6xl/tight">
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
            <h3 className="mt-5 text-sm/6 font-medium text-slate-800 xl:mt-10 xl:max-w-4xl xl:text-center xl:text-lg xl:font-normal">
                <strong>E-Lapor Bupati!</strong> adalah platform layanan digital yang diperuntukkan bagi masyarakat{' '}
                <strong>Kabupaten Donggala</strong> untuk menyampaikan keluhan maupun aspirasi secara langsung kepada pimpinan dengan akses yang
                mudah, cepat, dan aman melalui situs web atau aplikasi <em>mobile</em>.
            </h3>

            <div className="z-1 mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:mt-6 xl:max-w-md xl:gap-8">
                <Button className="col-span-1 font-bold tracking-wide" variant="pink" size="xl">
                    Yuk Lapor!
                </Button>
                <Button className="col-span-1 bg-secondary/65 font-bold text-[#ec3489] hover:bg-secondary/80" variant="secondary" size="xl">
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
