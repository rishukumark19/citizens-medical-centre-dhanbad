import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock, Share2 } from 'lucide-react';
import { blogsData } from '../data/blogs';

export default function BlogDetailPage({ onOpenAppointment }) {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug || '');

  const blog = blogsData.find(b => b.slug.toLowerCase() === decodedSlug.toLowerCase()) || blogsData[0];

  return (
    <div>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#06b6d4', fontWeight: 600, marginBottom: '20px' }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.1)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            marginBottom: '12px'
          }}>
            {blog.category}
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>{blog.title}</h1>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', opacity: 0.9 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> {blog.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {blog.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="section-padding" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-lg)' }}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} />
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', lineHeight: 1.8, fontSize: '1.05rem', color: '#334155' }}>
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />
        </div>

        <div style={{ marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, #0f172a, #0d9488)', borderRadius: '20px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Have Questions for Our Specialists?</h3>
          <p style={{ opacity: 0.9, marginBottom: '20px' }}>Book a direct consultation with our expert medical team at CMC Dhanbad.</p>
          <button className="btn-primary-teal" style={{ background: 'white', color: '#0f172a' }} onClick={onOpenAppointment}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
