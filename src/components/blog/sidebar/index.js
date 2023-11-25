import LatestPost from "./LatestPost";
import PopularTags from "./PopularTags";
import SearchBox from "./SearchBox";

const BlogSidebar = ({ filterFunctions, latestPosts }) => {
  return (
    <div className="blog-sidebar">
      <SearchBox filterFunctions={filterFunctions} />
      {/* <Categrory filterFunctions={filterFunctions}/> */}
      <LatestPost latestPosts={latestPosts} />
      <PopularTags filterFunctions={filterFunctions} />
    </div>
  );
};

export default BlogSidebar;
