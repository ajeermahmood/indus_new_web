import LaunchesHeader from "@/app/(listings)/new-launches/launches-list/launchesHeader";
import LaunchesPagination from "@/app/(listings)/new-launches/launches-list/launches_pagination";
import Social from "@/components/blog/blog-single/Social";
import Tags from "@/components/blog/blog-single/Tags";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MoreBtnsLaunch from "./more-btns";

export async function getLaunch(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/listings/get_launch_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        launch_id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/listings/get_launch_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        launch_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.data.launch_title}`,
  };
}

async function LaunchPage({ params }) {
  const raw_data = await getLaunch(params.id);
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
        <LaunchesHeader launchData={data} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <MoreBtnsLaunch />
              <div
                className="mt50 mb50 fz20 links-from-blogs-news"
                dangerouslySetInnerHTML={{ __html: data.launch_description }}
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

              <LaunchesPagination next={next} prev={prev} />
            </div>
          </div>
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
}

export default LaunchPage;
