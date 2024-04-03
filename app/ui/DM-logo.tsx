import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function DMLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/Iso Logo.png"
        width={1000}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
