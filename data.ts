import { Student } from './types';

export const students: Student[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    grade: '10th Grade',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    performance: 85,
    attendance: 92,
    subjects: [
      { name: 'Mathematics', grade: 88, progress: 75 },
      { name: 'Science', grade: 92, progress: 85 },
      { name: 'English', grade: 85, progress: 80 },
    ],
  },
  {
    id: '2',
    name: 'James Wilson',
    grade: '10th Grade',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    performance: 78,
    attendance: 88,
    subjects: [
      { name: 'Mathematics', grade: 75, progress: 70 },
      { name: 'Science', grade: 82, progress: 75 },
      { name: 'English', grade: 88, progress: 85 },
    ],
  },
  {
    id: '3',
    name: 'Sophia Chen',
    grade: '10th Grade',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    performance: 92,
    attendance: 95,
    subjects: [
      { name: 'Mathematics', grade: 95, progress: 90 },
      { name: 'Science', grade: 90, progress: 88 },
      { name: 'English', grade: 92, progress: 85 },
    ],
  },
];