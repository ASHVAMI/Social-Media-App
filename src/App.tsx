import React from 'react';
import { Github, Twitter, Linkedin, ArrowRight, Code2, Zap, Shield, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Build Something</span>
            <span className="block text-indigo-600">Amazing Today</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create beautiful, responsive web applications with our modern tech stack. Start building your next big idea today.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Code2 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Modern Stack</h3>
              <p className="mt-2 text-gray-500">Built with React, TypeScript, and Vite for lightning-fast development.</p>
            </div>
            
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Performance</h3>
              <p className="mt-2 text-gray-500">Optimized for speed with modern build tools and best practices.</p>
            </div>
            
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Secure & Reliable</h3>
              <p className="mt-2 text-gray-500">Built with security in mind and thoroughly tested components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-72 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Development"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Globe className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;