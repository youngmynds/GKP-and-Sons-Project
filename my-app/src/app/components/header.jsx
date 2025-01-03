import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <header className="flex items-center justify-between p-4 bg-gray-800 w-full">
        <Image src="/MenuIcon.svg" alt="MenuIcon" className=" " width={25} height={25} />
        <div className="flex-grow text-center">
          <Image src="/Logo.svg" alt="Logo" className="inline-block" width={200} height={200} />
        </div>
      </header>
      <div className='bg-black w-full h-52 flex flex-col items-center justify-center'>
        <h1 className="text-white font-serif text-7xl">Gallery</h1>
        <p className="h-4 text-gold">_______________________</p>
      </div>
      <Image src="/Polygon.svg" alt="Triangle" className="horizontal-center" width="100" height="100" />
      <div className='bg-white w-full h-52 flex flex-col items-center justify-center'>
        <h1 className="text-gold  font-parisienne text-7xl">Elegance</h1>
        <p className="h-4 text-slate-800  text-4xl">A Gallery Of</p>
      </div>
    </div>
  );
}