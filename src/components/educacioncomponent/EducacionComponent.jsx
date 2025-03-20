import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import CountUp from 'react-countup';
import './EducacionComponent.css'; // Archivo CSS

const EducationComponent = () => {
  const [videoUrl, setVideoUrl] = useState('/videos/video1.mp4');
  const [mainText, setMainText] = useState(
    'La política municipal de educación en Concepción Las Minas busca crear un entorno educativo de primer nivel y accesible para todos los miembros de la comunidad, reconociendo la importancia de la educación en el desarrollo personal principalmente de los niños y jóvenes, ofreciendo múltiples ambientes sanos y seguros.'
  );
  const [stats, setStats] = useState({
    escuelasApoyadas: 123,
    estudiantesBeneficiados: 5125,
    inversionEducacion: 1062336,
  });

  const handleVideoChange = (url, newText, newStats) => {
    setVideoUrl(url);
    setMainText(newText);
    setStats(newStats);
  };

  return (
    <div className="education-container">
      <div className="left-section">
        {/* Números que cambian según el video seleccionado */}
        <div className="dynamic-content">
          <div className="right-numbers">
            <div className="stats-container">
              <p><strong>Escuelas Apoyadas:</strong></p>
              <div className='numbersCount'>
                Q<CountUp start={0} end={stats.escuelasApoyadas} duration={3} separator="," />
              </div>
            </div>
            <div className="stats-container">
              <p><strong>Estudiantes Beneficiados:</strong></p>
              <div className='numbersCount'>
                Q<CountUp start={0} end={stats.estudiantesBeneficiados} duration={3} separator="," />
              </div>
            </div>
            <div className="stats-container">
              <p><strong>Inversión en Educación:</strong> </p>
              <div className='numbersCount'>
                Q<CountUp start={0} end={stats.inversionEducacion} duration={3} separator="," decimals={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Círculos de imágenes para cambiar el video, el texto principal y los números */}
        <div
          className="circle circle-mineduc"
          onClick={() =>
            handleVideoChange(
              '/videos/video1.mp4',
              'La Municipalidad de Concepción Las Minas colabora activamente con el Ministerio de Educación (MINEDUC) para garantizar una educación inclusiva, equitativa y de calidad para todos los niveles educativos en el municipio.',
              {
                escuelasApoyadas: 123,
                estudiantesBeneficiados: 5125,
                inversionEducacion: 1062336,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/1.webp" alt="Mineduc" loading="lazy" />
          </LazyLoad>
          <p>MINEDUC</p>
          <small>Apoyo al Ministerio de Educación</small>
        </div>
        <div
          className="circle circle-cmed"
          onClick={() =>
            handleVideoChange(
              '/videos/video2.mp4',
              'El Colegio Municipal de Educación Diversificada (CMED) brinda a los jóvenes del municipio la oportunidad de cursar una educación secundaria de alta calidad.',
              {
                escuelasApoyadas: 21312,
                estudiantesBeneficiados: 2125,
                inversionEducacion: 486000,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/2.webp" alt="CMED" loading="lazy" />
          </LazyLoad>
          <p>CMED</p>
          <small>Colegio Municipal de Educación Diversificada</small>
        </div>
        <div
          className="circle circle-capacitaciones"
          onClick={() =>
            handleVideoChange(
              '/videos/video3.mp4',
              'La Municipalidad organiza programas de capacitación dirigidos a distintos sectores de la comunidad, incluyendo a niños, jóvenes, mujeres y adultos mayores.',
              {
                escuelasApoyadas: 58,
                estudiantesBeneficiados: 1260,
                inversionEducacion: 293777.89,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/3.webp" alt="Capacitaciones" loading="lazy" />
          </LazyLoad>
          <p>CAPACITACIONES</p>
          <small>Educación a Niños, Jóvenes, Mujeres y Adulto Mayor</small>
        </div>
        <div
          className="circle circle-deportes"
          onClick={() =>
            handleVideoChange(
              '/videos/video4.mp4',
              'La Escuela Municipal de Deportes promueve la actividad física y el deporte entre niños, jóvenes y adultos, con el objetivo de fomentar hábitos de vida saludables.',
              {
                escuelasApoyadas: 950,
                estudiantesBeneficiados: 45,
                inversionEducacion: 392000,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/6.webp" alt="Deportes" loading="lazy" />
          </LazyLoad>
          <p>DEPORTES</p>
          <small>Escuela Municipal de Deportes</small>
        </div>
        <div
          className="circle circle-musica"
          onClick={() =>
            handleVideoChange(
              '/videos/video5.mp4',
              'La Escuela Municipal de Música ofrece un espacio de formación artística para niños y jóvenes, donde pueden aprender a tocar instrumentos musicales y desarrollar su talento.',
              {
                escuelasApoyadas: 150,
                estudiantesBeneficiados: 12,
                inversionEducacion: 394000,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/4.webp" alt="Música" loading="lazy" />
          </LazyLoad>
          <p>MÚSICA</p>
          <small>Escuela Municipal de Música</small>
        </div>
        <div
          className="circle circle-arte"
          onClick={() =>
            handleVideoChange(
              '/videos/video6.mp4',
              'La Escuela Municipal de Arte brinda formación en diversas disciplinas artísticas como pintura, dibujo y escultura, permitiendo que niños y jóvenes exploren su creatividad.',
              {
                escuelasApoyadas: 180,
                estudiantesBeneficiados: 8,
                inversionEducacion: 394000,
              }
            )
          }
        >
          <LazyLoad height={100} offset={100}>
            <img src="/images/5.webp" alt="Arte" loading="lazy" />
          </LazyLoad>
          <p>ARTE</p>
          <small>Escuela Municipal de Arte</small>
        </div>
      </div>

      <div className="right-section">
        <LazyLoad height={400} offset={100}>
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            className="react-player" /* Aplica el tamaño personalizado del video */
          />
        </LazyLoad>
        <h1>EDUCACIÓN</h1>
        <p>{mainText}</p> {/* Texto principal cambia con el video */}
      </div>
    </div>
  );
};

export default EducationComponent;
