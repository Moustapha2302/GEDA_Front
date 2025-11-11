// src/components/SidebarMenu.jsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SidebarMenu({ icon, label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-gray-700 text-left"
      >
        {icon}
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}