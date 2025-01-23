import { MotionWrapper } from '@/components/MotionWrapper';

export function Hero() {
  return (
    <MotionWrapper type="section">
      <div className="p-8 pb-0 md:pt-12 lg:px-16 lg:pt-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-7xl">
            Group <span className="font-signature text-8xl text-primary-600">sign-ups</span> made
            simple.
          </h1>
          <p className="text-lg">
            Most group signup apps are overcomplicated.{' '}
            <span className="font-logo font-extrabold text-primary-600">Village</span> eliminates
            complexity and streamlines the process of organizing community events.
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}
