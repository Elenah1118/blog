import React from 'react';
import './ArticleAuthorHeader.css';
import articleData from './articleData'; // 🔹 Asegúrate de que la importación es correcta

const ArticleAuthorHeader = () => {
  return (
    <article className="article">
      {/* Título */}
      <h1 className="article__title">{articleData.title}</h1>

      {/* Contenedor del autor inicial */}
      <div className="article-author">
        <img
          className="article-author__image"
          src={articleData.author.image}
          alt={articleData.author.name}
        />
        <div className="article-author__info">
          <p className="article-author__name">
            Escrito por <a href={articleData.author.profileUrl}>{articleData.author.name}</a>
          </p>
          <p className="article-author__role">{articleData.author.role}</p>
        </div>
      </div>

      {/* Fecha y tiempo de lectura */}
      <div className="article-meta">
        <div className="article-meta__item">
          {/* Icono de calendario */}
          <svg className="icon icon-calendar" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3 4.9 3 6v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V6c0-1.1-.89-2-2-2M5 20V9h14v11H5m2-9h5v5H7V11m7 0h3v2h-3v-2m0 4h3v2h-3v-2Z" />
          </svg>
          <span>Actualizado el <time>{articleData.updatedDate}</time></span>
        </div>
        <div className="article-meta__item">
          {/* Icono de reloj */}
          <svg className="icon icon-clock" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20q1.875 0 3.5-.712t2.85-1.938q1.225-1.225 1.938-2.85T21 11q0-1.875-.712-3.5t-1.938-2.85q-1.225-1.225-2.85-1.938T12 2q-1.875 0-3.5.712T5.65 4.65Q4.425 5.875 3.713 7.5T3 11q0 1.875.713 3.5t1.937 2.85q1.225 1.225 2.85 1.938T12 20m0-2q-2.925 0-4.963-2.038Q5 13.925 5 11t2.038-4.962Q9.075 4 12 4t4.962 2.038Q19 8.075 19 11t-2.038 4.962Q14.925 18 12 18m1-5h5V11h-4V7h-2v6Z" />
          </svg>
          <span>{articleData.readingTime}</span>
        </div>
      </div>

      {/* Espacio en blanco para contenido futuro */}
      <div className="article-content"></div>

      {/* Contenedor final en gris claro */}
      <div className="article-footer">
        <img
          className="article-footer__image"
          src={articleData.author.image}
          alt={articleData.author.name}
        />
        <div className="article-footer__info">
          <p className="article-footer__name">{articleData.author.name}</p>
          <p className="article-footer__desc">{articleData.footer.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleAuthorHeader;
