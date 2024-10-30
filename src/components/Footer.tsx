import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Building2 className="h-8 w-8" />
          </div>
          <span className="text-2xl font-bold">BUD-MAR</span>
        </div>
        <div className="text-center md:text-right text-gray-400">
          <p>&copy; {new Date().getFullYear()} BUD-MAR. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;