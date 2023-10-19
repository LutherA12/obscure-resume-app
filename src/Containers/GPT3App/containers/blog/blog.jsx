import "./blog.styles.scss";
import { BlogInfo, BlogInfo1 } from "../../simpleConstants/simpleConstants.jsx";
import { Article } from "../../components/componentExports";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">{BlogInfo.heading}</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
              <img src={BlogInfo.blogpic} alt="image not found" />
            </div>
            <div className="gpt3__blog-container_article-content">
              <div>
                <p>{BlogInfo.date}</p>
                <h3>{BlogInfo.title}</h3>
              </div>
              <p>{BlogInfo.link}</p>
            </div>
          </div>
        </div>

        <div className="gpt3__blog-container_groupB">
          {BlogInfo1.map((bloginfo1) => {
            return (
              <Article
                blogpic={bloginfo1.blogpic}
                title={bloginfo1.title}
                date={bloginfo1.date}
                link={bloginfo1.link}
                key={Math.random()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;

/*

<Article
            imgUrl={BlogInfo.blogpics[1]}
            date={BlogInfo.dates[1]}
            title={BlogInfo.titles[1]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[2]}
            date={BlogInfo.dates[2]}
            title={BlogInfo.titles[2]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[3]}
            date={BlogInfo.dates[3]}
            title={BlogInfo.titles[3]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[4]}
            date={BlogInfo.dates[4]}
            title={BlogInfo.titles[4]}
          />


                    <Article
            imgUrl={BlogInfo.blogpics[0]}
            date={BlogInfo.dates[0]}
            title={BlogInfo.titles[0]}
          />


          import "./article.styles.scss";
import { ArticleInfo } from "../../simpleConstants/simpleConstants";

function Article({ imgUrl, date, title }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="image not found" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{ArticleInfo.text}</p>
      </div>
    </div>
  );
}

export default Article;
*/
