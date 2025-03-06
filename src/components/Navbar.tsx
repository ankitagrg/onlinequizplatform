import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
          <img 
                src="./src/assets/quiz.png" 
                alt="Open Book Icon" 
                className="h-6 w-6"/>
            
            <span className="text-xl font-bold">OnlineQuizPlatform</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/create" className="hover:text-indigo-200">Create Quiz</Link>
                <Link to="/my-quizzes" className="hover:text-indigo-200">My Quizzes</Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-indigo-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;