import React from 'react';

function Services({ lang }) {
  const services = [
    {
      title: lang === 'ko' ? 'AI 기반 데이터 분석' : 'AI-Powered Data Analysis',
      description:
        lang === 'ko'
          ? '빅데이터를 활용한 인공지능 분석으로\n비즈니스 인사이트를 도출합니다.'
          : 'Derive business insights through\nAI analysis of big data.'
    },
    {
      title: lang === 'ko' ? '맞춤형 솔루션 개발' : 'Custom Solution Development',
      description:
        lang === 'ko'
          ? '고객사의 요구사항에 맞는 최적화된\n솔루션을 제공합니다.'
          : 'Provide optimized solutions\ntailored to client requirements.'
    },
    {
      title: lang === 'ko' ? '시스템 통합 및 구축' : 'System Integration & Implementation',
      description:
        lang === 'ko'
          ? '기존 시스템과의 원활한 통합 및 새로운\n시스템 구축을 지원합니다.'
          : 'Support seamless integration with\nexisting systems and implementation.'
    }
  ];

  return (
    <section style={{ transform: 'translateY(-65px)' }}>
      <h1 style={{
        fontSize: '4.8rem',
        marginBottom: '3.2rem',
        textAlign: 'center',
        fontWeight: 700
      }}>
        {lang === 'ko' ? '주요서비스' : 'Our Services'}
      </h1>
      <div style={{
        width: '98%',
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3.2rem'
      }}>
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '3.2rem',
              borderRadius: '1rem',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)'
            }}
          >
            <h2
              style={{
                fontSize: '2.4rem',
                fontWeight: 600,
                marginBottom: '2.4rem',
                textAlign: 'center'
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: '1.4rem',
                lineHeight: 1.7,
                textAlign: 'center',
                whiteSpace: 'pre-line',
                margin: 0
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 