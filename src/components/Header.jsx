import React, { useState } from 'react';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sebastian
          </div>
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">CLI AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          <Link to="features" smooth className="hover:text-blue-400 cursor-pointer transition">Features</Link>
          <Link to="howit" smooth className="hover:text-blue-400 cursor-pointer transition">Como Funciona</Link>
          <Link to="comparison" smooth className="hover:text-blue-400 cursor-pointer transition">Comparação</Link>
          <Link to="faq" smooth className="hover:text-blue-400 cursor-pointer transition">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-2 hover:bg-slate-700 rounded transition">
            <FiGithub size={20} />
          </a>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded font-semibold transition">
            Instalar
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-800 border-b border-slate-700 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="features" smooth className="hover:text-blue-400 cursor-pointer">Features</Link>
              <Link to="howit" smooth className="hover:text-blue-400 cursor-pointer">Como Funciona</Link>
              <Link to="comparison" smooth className="hover:text-blue-400 cursor-pointer">Comparação</Link>
              <Link to="faq" smooth className="hover:text-blue-400 cursor-pointer">FAQ</Link>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded font-semibold transition w-full">
                Instalar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
