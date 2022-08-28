import React from "react";
import { BlogList } from "../components/blog/blogList";
import { BasicLayout } from "../layouts/basicLayout";

const Blog = () => {
  return (
    <BasicLayout footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto py-5">
            <h1 className="py-3 py-lg-5 fs-1 text-center">
              Blog list big style
            </h1>
            <BlogList />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Blog;
