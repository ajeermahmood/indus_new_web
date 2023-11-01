import Image from "next/image";

const LatestPost = ({latestPosts}) => {
  return (
    <div className="sidebar-widget mb30">
      <h6 className="widget-title">Latest Posts</h6>
      {latestPosts.map((post, index) => (
        <div
          className="list-news-style d-flex align-items-center mt20 mb20"
          key={index}
        >
          <div className="news-img flex-shrink-0">
            <Image width={100} height={65} src={`https://www.indusre.com/images/videos/${post.video_image}`} alt="blog" />
          </div>
          <div className="news-content flex-shrink-1 ms-3">
            <p className="new-text mb0 fz14">
              <a target="_blank" href={post.video_link} >{post.video_title}</a>
            </p>
            {/* <a className="body-light-color" href="#">
              {post.date.day}{' '}{post.date.month}, {' '}{post.date.year}
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
