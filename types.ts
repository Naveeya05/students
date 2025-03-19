export interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  performance: number;
  attendance: number;
  subjects: Subject[];
}

export interface Subject {
  name: string;
  grade: number;
  progress: number;
}