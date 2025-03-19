import React, { useState } from 'react';
import { Student } from './types';
import { students } from './data';
import { StudentCard } from './components/StudentCard';
import { StudentDetails } from './components/StudentDetails';
import { GraduationCap, Search } from 'lucide-react';

function App() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Student Progress Tracker</h1>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onClick={setSelectedStudent}
            />
          ))}
        </div>

        {selectedStudent && (
          <StudentDetails
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;