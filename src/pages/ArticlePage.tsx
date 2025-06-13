import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../data/news";

export default function ArticlePage() {
  const { id } = useParams();
  const articleId = parseInt(id || "0", 10);
  const article = news.find((item) => item.id === articleId);

  if (!article) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8 rtl">
        <h1 className="text-2xl font-bold text-red-600">خبر یافت نشد</h1>
        <p className="text-gray-700 mt-4">متاسفانه خبری با این شناسه پیدا نشد.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 rtl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{article.title}</h1>
      <div className="flex items-center justify-between mb-6 text-gray-600 text-sm">
        <span>تاریخ انتشار: {article.date}</span>
        <span className="bg-red-100 text-red-600 rounded px-2 py-0.5">{article.category}</span>
      </div>
      <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-gray-800 leading-relaxed">
        <p>{article.summary}</p>
        {/* Placeholder for full article content */}
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        <p>این متن شامل بخش‌های بیشتری از خبر اصلی است که برای نمایش کامل خبر در صفحه جداگانه قرار داده شده است. هدف از این بخش، شبیه‌سازی صفحه خبر تکی با محتوای بیشتر است.</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
      </div>
      {/* Add a section for related articles here later */}
    </div>
  );
}
