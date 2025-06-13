import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsList from "./components/NewsList";
import Sidebar from "./components/Sidebar";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <div dir="rtl" className="font-vazirmatn bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                <div className="md:col-span-3">
                  <NewsList />
                </div>
                <div className="md:col-span-1">
                  <Sidebar />
                </div>
              </div>
            } />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App