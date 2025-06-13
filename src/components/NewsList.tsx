import React from "react";
import { news } from "../data/news";
import { Link } from "react-router-dom";

export default function NewsList() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rtl">
      {news.map((item) => (
        <article key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
          <Link to={`/article/${item.id}`}>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          </Link>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">{item.date}</span>
              <span className="text-xs bg-red-100 text-red-600 rounded px-2 py-0.5">{item.category}</span>
            </div>
            <Link to={`/article/${item.id}`}>
              <h2 className="text-lg font-bold mb-2 hover:text-red-600 cursor-pointer transition-colors duration-150">{item.title}</h2>
            </Link>
            <p className="text-gray-700 text-sm flex-1">{item.summary}</p>
            <Link to={`/article/${item.id}`} className="mt-4 text-red-600 hover:underline self-start text-sm font-medium">ادامه خبر</Link>
          </div>
        </article>
      ))}
    </section>
  );
}
