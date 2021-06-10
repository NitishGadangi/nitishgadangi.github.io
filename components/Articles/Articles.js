import React, { Component } from "react";

import { GRID_LIMIT } from "../../config";

import OtherArticlesHeader from "./ArticlesHeader";
import OtherArticlesWrapper from "./ArticlesWrapper";
import MoreArticlesButton from "./MoreArticlesButton";

class OtherArticles extends Component {
  constructor(props) {
    super(props);
    this.state = { hasOtherArticlesExpanded: false };
  }

  expandArticles = (status) => {
    this.setState({ hasOtherArticlesExpanded: status });
  };

  render() {
    const { content } = this.props;
    if (!content.length) {
      return null;
    }
    const { hasOtherArticlesExpanded } = this.state;
    const shownGrid = content.slice(0, GRID_LIMIT);
    const ArticlesToShow = hasOtherArticlesExpanded ? content : shownGrid;

    return (
      <section id="blogs">
        <div className="wrapper">
          <OtherArticlesHeader />
          <OtherArticlesWrapper
            projects={ArticlesToShow}
            itemsHidden={!hasOtherArticlesExpanded}
          />
          <MoreArticlesButton
            expandProjects={this.expandArticles}
            hasExpanded={hasOtherArticlesExpanded}
          />
        </div>
      </section>
    );
  }
}

export default OtherArticles;
