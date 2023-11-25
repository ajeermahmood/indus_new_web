import Details from "@/components/blog/dev-single/Details";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
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
      // cache: "force-cache",
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
      // cache: "force-cache",
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
        <Details devData={data} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div
                className="mt50 mb50 fz20"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              ></div>
              <div
                className="mt50 mb50 fz20"
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
