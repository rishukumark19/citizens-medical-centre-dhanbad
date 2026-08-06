import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogsData } from '../data/blogs';

export default function BlogListPage() {
  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Patient Resources & Health Blog</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Articles, wellness tips, surgical advancements, and patient recovery guides written by medical experts.
        </p>
      </div>

      <div className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {blogsData.map(blog => (
            <div key={blog.slug} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#0d9488',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {blog.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', color: '#0f172a', margin: '8px 0 12px', lineHeight: 1.4 }}>
                    {blog.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '20px' }}>
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 24px 24px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  marginBottom: '16px',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '12px'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {blog.author}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {blog.readTime}</span>
                </div>

                <Link
                  to={`/blog-detail/${encodeURIComponent(blog.slug)}`}
                  className="link-arrow"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
