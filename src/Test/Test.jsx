import { useState } from 'react';

export default function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10">
      {/* Button to open modal */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
            <p className="mb-4">Hello! I'm a simple modal built with Tailwind CSS.</p>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
