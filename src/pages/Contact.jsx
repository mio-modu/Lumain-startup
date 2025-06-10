import React from 'react';

export default function Contact({ lang }) {
  return (
    <div className="contact-centered" style={{ minHeight: '40vh', width: '50%', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.8rem', marginBottom: '0.8rem', textAlign: 'center' }}>{lang === 'ko' ? '문의하기' : 'Contact'}</h2>
      <div style={{ width: '90%', maxWidth: '500px', margin: '0 auto' }}>
        <form style={{ marginTop: '0.8rem', display: 'grid', gap: '0.6rem' }}>
          <input type="text" placeholder={lang === 'ko' ? '이름' : 'Your Name'} required style={inputStyle} />
          <input type="email" placeholder={lang === 'ko' ? '이메일' : 'Your Email'} required style={inputStyle} />
          <textarea placeholder={lang === 'ko' ? '문의 내용' : 'Your Message'} required rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
          <button type="submit" style={buttonStyle}>{lang === 'ko' ? '메시지 보내기' : 'Send Message'}</button>
        </form>
        <div style={{ marginTop: '0.8rem', color: 'var(--text-light)', fontSize: '1.3rem', textAlign: 'center' }}>
          <div>Email: <a href="mailto:psen7747@gmail.com" style={{ color: 'var(--accent-blue)' }}>psen7747@gmail.com</a></div>
          <div style={{ marginTop: '0.2rem' }}>{lang === 'ko' ? '위치: 미래도시, 지구' : 'Location: Future City, Earth'}</div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.6rem',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--input-bg)',
  color: 'var(--text-primary)',
  fontSize: '1rem',
  width: '100%'
};

const buttonStyle = {
  padding: '0.6rem 2rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'var(--accent-blue)',
  color: 'white',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
}; 