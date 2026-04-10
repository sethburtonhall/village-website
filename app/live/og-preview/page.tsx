import { LiveOGImage } from '@/components/live/LiveOGImage';

export default function LiveOGPreviewPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-700 p-8">
      <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
        <LiveOGImage />
      </div>
    </div>
  );
}
