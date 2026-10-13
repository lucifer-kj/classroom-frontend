import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamental concepts of programming, algorithms, and computational problem-solving.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra & Differential Equations",
    department: "Maths",
    description: "Vector spaces, matrices, linear transformations, eigenvalues, and ordinary differential equations.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG102",
    name: "Academic Writing & Research",
    department: "English",
    description: "Critical thinking, academic argumentation, textual analysis, and scholarly research methods.",
    createdAt: new Date().toISOString(),
  },
];
