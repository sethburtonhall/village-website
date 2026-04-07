import { VillageLiveOGImage } from '@/components/VillageLiveOGImage';

export default function VillageLiveOGPreviewPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-700 p-8">
      <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
        <VillageLiveOGImage />
      </div>
    </div>
  );
}
