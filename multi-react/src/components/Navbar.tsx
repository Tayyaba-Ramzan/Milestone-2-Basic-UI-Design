import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-black text-[#ADB7BE] p-4">
      <nav className="flex justify-between">
        <h1 className="text-lg font-extrabold text-white">TR</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className='hover:text-white'>Home</Link></li>
          <li><Link href="/about" className='hover:text-white'>About</Link></li>
          <li><Link href="/projects" className='hover:text-white'>Projects</Link></li>
          <li><Link href="/contact" className='hover:text-white'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
