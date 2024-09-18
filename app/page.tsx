'use client';
import dynamic from 'next/dynamic';

const KonvaCanvas = dynamic(
  () => import('@Components/konvaCanvas'),
  { ssr: false }
);

export default function Home() {
  return <KonvaCanvas />;
}
