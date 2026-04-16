import { MotionWrapper } from '@/components/MotionWrapper';
import { steps } from '@/lib/data';

export function VillageHowItWorks({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-[4.3rem] py-16">
      <div className="mx-auto max-w-2xl space-y-16">
        <MotionWrapper>
          <div className="stack md:text-center">
            <p className="font-bold text-primary-600">How it works</p>
            <h2 className="text-3xl font-bold md:text-4xl">Up and running in minutes</h2>
          </div>
        </MotionWrapper>

        <div className="relative">
          {steps.map((step, index) => (
            <MotionWrapper key={index} index={index}>
              <div className="relative flex gap-8">
                {/* Step number + connecting line */}
                <div className="flex flex-col items-center">
                  <span className="font-signature text-5xl font-bold leading-none text-primary-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="mt-3 w-px flex-1 bg-primary-600/20" />
                  )}
                </div>

                {/* Content — pb creates the gap, line stretches to fill it */}
                <div className={`space-y-2 pt-1 ${index < steps.length - 1 ? 'pb-16' : ''}`}>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-stone-500">{step.description}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
