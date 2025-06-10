import React from 'react';

function Cases({ lang }) {
  const cases = {
    ko: [
      {
        title: '제조업 AI 도입',
        description: '생산라인 최적화 및 품질관리 자동화를 통한 생산성 향상'
      },
      {
        title: '금융 서비스 혁신',
        description: 'AI 기반 리스크 관리 및 고객 서비스 개선'
      },
      {
        title: '헬스케어 솔루션',
        description: '의료 데이터 분석을 통한 진단 정확도 향상'
      }
    ],
    en: [
      {
        title: 'Manufacturing AI Integration',
        description: 'Enhanced productivity through production line optimization and quality control automation'
      },
      {
        title: 'Financial Service Innovation',
        description: 'AI-based risk management and customer service improvement'
      },
      {
        title: 'Healthcare Solutions',
        description: 'Improved diagnostic accuracy through medical data analysis'
      }
    ]
  };

  return (
    <section style={{ transform: 'translateY(-65px)' }}>
      <h1 style={{ 
        fontSize: '4.8rem', 
        marginBottom: '3.2rem',
        transform: 'translateY(-10%)',
        textAlign: 'center'
      }}>
        {lang === 'ko' ? '활용사례' : 'Use Cases'}
      </h1>
      <div style={{ 
        width: '95%', 
        maxWidth: '1800px', 
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.4rem'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2.4rem',
          borderRadius: '1rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <h2 style={{ 
            fontSize: '2.4rem', 
            marginBottom: '1.6rem',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? '금융 서비스' : 'Financial Services'}
          </h2>
          <p style={{ 
            fontSize: '1.6rem', 
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? 'AI 기반의 위험 평가 및 투자 분석 솔루션을 제공합니다.' :
             'Providing AI-based risk assessment and investment analysis solutions.'}
          </p>
        </div>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2.4rem',
          borderRadius: '1rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <h2 style={{ 
            fontSize: '2.4rem', 
            marginBottom: '1.6rem',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? '제조업' : 'Manufacturing'}
          </h2>
          <p style={{ 
            fontSize: '1.6rem', 
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? '생산성 향상과 품질 관리를 위한 AI 솔루션을 구현합니다.' :
             'Implementing AI solutions for productivity improvement and quality control.'}
          </p>
        </div>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2.4rem',
          borderRadius: '1rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <h2 style={{ 
            fontSize: '2.4rem', 
            marginBottom: '1.6rem',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? '헬스케어' : 'Healthcare'}
          </h2>
          <p style={{ 
            fontSize: '1.6rem', 
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            {lang === 'ko' ? '의료 데이터 분석과 진단 지원 시스템을 개발합니다.' :
             'Developing medical data analysis and diagnostic support systems.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cases; 