import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import { Article } from "../../components/componentExports";
import { Link } from "react-router-dom";
import "./blog.styles.scss";

export default function Blog() {
  const BlogGroupB = [
    {
      blogpic: blog02,
      title: <Link to="/AiDangerArticle">Is AI really dangerous?</Link>,
      date: "Jan 22 2022",
      link: <Link to="/AiDangerArticle">Read Full Article</Link>,
    },
    {
      blogpic: blog03,
      title: (
        <Link to="/BreakingArticle">Breaking off the chains of the past!</Link>
      ),
      date: "Oct 10, 2021",
      link: <Link to="/BreakingArticle">Read Full Article</Link>,
    },
    {
      blogpic: blog04,
      title: <Link to="/DataArticle">Data, Data and more Data!</Link>,
      date: "Jul 25, 2021",
      link: <Link to="/DataArticle">Read Full Article</Link>,
    },
    {
      blogpic: blog05,
      title: <Link to="/PointArticle">What's the point?!</Link>,
      date: "Jan 6, 2019",
      link: <Link to="/PointArticle">Read Full Article</Link>,
    },
  ];

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening and we are blogging about it!
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
              <img src={blog01} alt="image not found" />
            </div>
            <div className="gpt3__blog-container_article-content">
              <div>
                <p>Sept 8, 2023</p>
                <h3>
                  <Link to="/Gpt3Article">
                    GPT-3 and Open AI is the future. Come journey with us and
                    explore how it works!
                  </Link>
                </h3>
              </div>
              <p>
                <Link to="/Gpt3Article">Read Full Article</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="gpt3__blog-container_groupB">
          {BlogGroupB.map((blog, index) => {
            return (
              <Article
                blogpic={blog.blogpic}
                title={blog.title}
                date={blog.date}
                link={blog.link}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * const BlogGroupBTest = [
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
    </div>,
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
    </div>,
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
    </div>,
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
    </div>,
  ];
 * 
 */
