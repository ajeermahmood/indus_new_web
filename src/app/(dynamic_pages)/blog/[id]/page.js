import BlogHeader from "@/components/blog/blog-list/BlogHeader";
import BlogsPagination from "@/components/blog/blog-list/blogs_pagination";
import Social from "@/components/blog/blog-single/Social";
import Tags from "@/components/blog/blog-single/Tags";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://indusspeciality.com/api/listings/get_all_blogs_ids_for_SSG.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

//   return props.map((p) => ({
//     id: p.blogs_id,
//   }));
// }

export async function getBlog(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/listings/get_blog_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        blog_id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/listings/get_blog_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        blog_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.data.blogs_title}`,
  };
}

async function BlogPage({ params }) {
  const raw_data = await getBlog(params.id);
  const data = raw_data.data;
  const prev = raw_data.prev;
  const next = raw_data.next;

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Blog Section Area */}
      <section className="our-blog pt130">
        <BlogHeader blogData={data} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div
                className="mt50 mb50 fz20"
                dangerouslySetInnerHTML={{ __html: data.blogs_description }}
              ></div>

              <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="mr30">Share this post</span>
                  <Social id={params} />
                </div>
                <div className="bsp_tags d-flex">
                  <Tags />
                </div>
              </div>

              <BlogsPagination next={next} prev={prev} />
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Details */}

      {/* Related Blog Post */}
      {/* <section className="pb90 pb20-md pt-0">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 m-auto"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="main-title text-start text-md-center">
              <h2 className="title">Latest Posts</h2>
              <p className="paragraph">
                Read latest news about Real Estate in Dubai
              </p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <Blog />
        </div>
      </div>
    </section> */}
      {/* end Related Blog Post */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
}

export default BlogPage;
