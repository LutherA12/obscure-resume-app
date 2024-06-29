import "./article.styles.scss";

export default function Article({ blogpic, date, title, link }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={blogpic} alt="image not found" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{link}</p>
      </div>
    </div>
  );
}
