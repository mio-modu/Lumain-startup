import React from 'react';

export default function Home({ lang }) {
  return (
    <section style={{
      textAlign: 'center', 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      zIndex: 0
    }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        width: '90%',
        maxWidth: '1200px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}>
        {lang === 'ko' ? (
          <>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}>
              AI와 함께 인간의 잠재력을 확장합니다
            </h1>
            <p style={{
              fontSize: '1.4rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 auto',
              lineHeight: 1.4,
              fontWeight: 300,
              maxWidth: '900px'
            }}>
              Lumain은 미래지향적 AI 기업으로, 사람과 조직이 지능적이고 인간 중심적인 솔루션을 통해 성장할 수 있도록 돕습니다. 우리는 기술이 인간의 잠재력을 대체하는 것이 아니라, 증폭시키는 데에 있다고 믿습니다.
            </p>
          </>
        ) : (
          <>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}>
              Expanding Human Potential with AI
            </h1>
            <p style={{
              fontSize: '1.4rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 auto',
              lineHeight: 1.4,
              fontWeight: 300,
              maxWidth: '900px'
            }}>
              Lumain is a future-oriented AI company dedicated to empowering people and organizations through intelligent, human-centered solutions. We believe in technology that amplifies, not replaces, human potential.
            </p>
          </>
        )}
      </div>
    </section>
  );
} 