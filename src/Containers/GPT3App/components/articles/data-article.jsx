import React from "react";
import "./articles.styles.scss";
import { ArticlesInfo } from "../../simpleConstants/simpleConstants";

function DataArticle() {
  return <div>{ArticlesInfo.data}</div>;
}

export default DataArticle;
