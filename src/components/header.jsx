import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="flex flex-col pt-4 items-center h-1/6 font-sans">
      <h1 className="text-5xl font-serif text-center w-full ">Mordownia</h1>
      <nav className="flex justify-center pt-4 border-b-2 w-full">
        <Link to="/projects" className="p-2 px-8 text-xl">Projekty</Link>
        <Link to="/" className="p-2 px-8 text-xl">Strona główna</Link>
        <Link to="/about" className="p-2 px-8 text-xl">O nas</Link>
      </nav>
    </header>
  );
}