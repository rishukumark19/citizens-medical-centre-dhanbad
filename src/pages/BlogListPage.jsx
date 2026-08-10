import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import SEO from '../components/SEO';

export default function BlogListPage() {
  return (
    <div className="flex flex-col">
      <SEO title="Health Blog & News | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Health & Wellness Blog</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Stay informed with the latest health tips, medical news, and insights from our experts.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map(blog => (
            <article key={blog.id} className="group bg-surface border border-outline-variant rounded-[24px] overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img loading="lazy" src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-label-bold text-outline mb-3">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {blog.date}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> {blog.readTime}</span>
                </div>
                <h3 className="text-headline-md text-on-surface text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-3 mb-6 flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                  <div className="flex items-center gap-2 text-sm text-on-surface font-label-bold">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">person</span>
                    </div>
                    {blog.author}
                  </div>
                  <Link to={`/blog/${blog.slug}`} className="text-primary font-label-bold text-sm flex items-center gap-1 hover:underline">
                    Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
