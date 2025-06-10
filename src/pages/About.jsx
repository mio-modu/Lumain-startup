import React from 'react';

function About({ lang }) {
  return (
    <section style={{ transform: 'translateY(-35px)' }}>
      <h1 style={{ 
        fontSize: '5.1rem', 
        marginBottom: '3.2rem',
        textAlign: 'center'
      }}>
        {lang === 'ko' ? '회사소개' : 'About Us'}
      </h1>
      <div style={{ 
        width: '95%', 
        maxWidth: '1800px', 
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.4rem'
      }}>
        <p style={{ 
          fontSize: '2.1rem', 
          lineHeight: '1.8',
          textAlign: 'center',
          width: '100%',
          whiteSpace: 'nowrap'
        }}>
          {lang === 'ko' ? 'Lumain은 인공지능이 인간을 위해 존재해야 한다는 신념을 바탕으로 설립되었습니다.' : 
           'Lumain was founded on the belief that artificial intelligence should exist for humanity.'}
        </p>
        <p style={{ 
          fontSize: '2.1rem', 
          lineHeight: '1.8',
          textAlign: 'center',
          width: '100%'
        }}>
          {lang === 'ko' ? '우리는 기술의 발전이 인간의 삶을 더 풍요롭게 만들어야 한다고 믿습니다.' :
           'We believe that technological advancement should enrich human life.'}
        </p>
        <p style={{ 
          fontSize: '2.1rem', 
          lineHeight: '1.8',
          textAlign: 'center',
          width: '100%'
        }}>
          {lang === 'ko' ? '이를 위해 우리는 최첨단 AI 기술을 개발하고,' :
           'To this end, we are developing cutting-edge AI technology,'}
        </p>
        <p style={{ 
          fontSize: '2.1rem', 
          lineHeight: '1.8',
          textAlign: 'center',
          width: '100%'
        }}>
          {lang === 'ko' ? '이를 통해 더 나은 미래를 만들어가고 있습니다.' :
           'to create a better future.'}
        </p>
      </div>
    </section>
  );
}

export default About; 