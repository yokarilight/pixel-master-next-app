'use client';
import dynamic from 'next/dynamic';

const KonvaCanvas = dynamic(
  () => import('@/components/konvaCanvas'),
  { ssr: false }
);

export default function Home() {
  return <KonvaCanvas />;
}
