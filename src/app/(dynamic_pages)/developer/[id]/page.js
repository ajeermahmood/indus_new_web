import Details from "@/components/blog/dev-single/Details";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import Image from "next/image";

// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://indusspeciality.com/api/listings/get_all_developers_ids_for_SSG.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

//   return props.map((p) => ({
//     id: p.id,
//   }));
// }

export async function getDeveloper(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/listings/get_developer_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        dev_id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/listings/get_developer_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        dev_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.name} || Indus Real Estate LLC Dubai`,
  };
}

async function DevelopersPage({ params }) {
  const data = await getDeveloper(params.id);

  const prop_by = data.properties_by ? JSON.parse(data.properties_by) : [];
  const comm_by = data.communities_by ? JSON.parse(data.communities_by) : [];
  const ready_by = data.ready_to_move_by
    ? JSON.parse(data.ready_to_move_by)
    : [];

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Blog Section Area */}
      <section className="our-blog pt130 pt0-mbl">
        <Details devData={data} />

        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <div
                className="mt50 mb50 fz20 max-w-45rem"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              ></div>
              <div
                className="mt50 mb50 fz20 max-w-45rem"
                dangerouslySetInnerHTML={{ __html: data.about_builder }}
              ></div>

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src={`https://www.indusre.com/images/builders/about-image/${data.about_image}`}
                  alt="blog"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="column mt50">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb15">Contact Us</h4>
                  {/* <p className="text">Choose your preferred day</p> */}
                  <ScheduleTour />
                </div>
                {/* End .Schedule a tour */}
              </div>

              {prop_by.length == 0 ? (
                <></>
              ) : (
                <div className="mt50">
                  <h2 className="blog-title mb10">
                    OFF-PLAN PROPERTIES BY {data.name}
                  </h2>
                  {prop_by.map((text) => (
                    <h6>
                      <a className="fz18 fw500" href={text.link}>
                        &gt; {text.name}
                      </a>
                    </h6>
                  ))}
                </div>
              )}
              {comm_by.length == 0 ? (
                <></>
              ) : (
                <div className="mt50">
                  <h2 className="blog-title mb10">
                    COMMUNITIES BY {data.name}
                  </h2>
                  {comm_by.map((text) => (
                    <h6>
                      <a className="fz18 fw500" href={text.link}>
                        &gt; {text.name}
                      </a>
                    </h6>
                  ))}
                </div>
              )}
              {ready_by.length == 0 ? (
                <></>
              ) : (
                <div className="mt50">
                  <h2 className="blog-title mb10">
                    READY TO MOVE BY {data.name}
                  </h2>
                  {ready_by.map((text) => (
                    <h6>
                      {" "}
                      <a className="fz18 fw500" href={text.link}>
                        &gt; {text.name}
                      </a>
                    </h6>
                  ))}
                </div>
              )}
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

export default DevelopersPage;
