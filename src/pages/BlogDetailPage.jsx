import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import SEO from '../components/SEO';

export default function BlogDetailPage({ onOpenAppointment }) {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug || '');

  const blog = blogsData.find(b => b.slug.toLowerCase() === decodedSlug.toLowerCase()) || blogsData[0];

  return (
    <div className="flex flex-col">
      <SEO title={blog.title} description={blog.excerpt} />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter border-b border-outline-variant relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-label-bold mb-6 hover:underline">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to All Articles
          </Link>
          <div className="mb-4">
            <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
          </div>
          <h1 className="text-display-lg text-on-surface mb-6 md:leading-[1.2]">{blog.title}</h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-sm font-label-bold text-outline">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">person</span> {blog.author}</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">calendar_today</span> {blog.date}</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">schedule</span> {blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-4xl mx-auto w-full">
        <div className="rounded-[24px] overflow-hidden mb-12 shadow-lg">
          <img loading="lazy" src={blog.image} alt={blog.title} className="w-full max-h-[500px] object-cover" />
        </div>

        <div className="bg-surface p-8 md:p-12 rounded-[24px] border border-outline-variant shadow-sm mb-12">
          <div 
            className="prose prose-lg prose-slate max-w-none text-on-surface-variant leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} 
          />
        </div>

        {/* CTA */}
        <div className="bg-primary-container/30 border border-primary-container rounded-[24px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container rounded-full blur-3xl -z-10"></div>
          <h3 className="text-headline-lg text-on-surface mb-4">Have Questions for Our Specialists?</h3>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Book a direct consultation with our expert medical team at CMC Dhanbad.
          </p>
          <button 
            className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md flex items-center gap-2 mx-auto"
            onClick={onOpenAppointment}
          >
            <span className="material-symbols-outlined">calendar_month</span> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
