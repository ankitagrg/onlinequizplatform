import { create } from 'zustand';

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdBy: string;
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizState {
  quizzes: Quiz[];
  addQuiz: (quiz: Omit<Quiz, 'id'>) => void;
  getQuiz: (id: string) => Quiz | undefined;
}

const useQuizStore = create<QuizState>((set, get) => ({
  quizzes: [],
  addQuiz: (quiz) => {
    const newQuiz = {
      ...quiz,
      id: Math.random().toString(36).substr(2, 9),
    };
    set((state) => ({ quizzes: [...state.quizzes, newQuiz] }));
  },
  getQuiz: (id) => get().quizzes.find((quiz) => quiz.id === id),
}));

export default useQuizStore;
export type { Quiz, Question };