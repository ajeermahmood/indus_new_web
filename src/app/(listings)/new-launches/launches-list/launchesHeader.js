import Image from "next/image";

export default function LaunchesHeader({ launchData }) {
  return (
    <>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <h2 className="blog-title">{launchData.launch_title}</h2>
            <div className="blog-single-meta">
              <div className="post-author d-sm-flex align-items-center">
                {/* <Image
                  width={40}
                  height={40}
                  className="mr10"
                  src="/images/blog/author-1.png"
                  alt="blog"
                />
                <a className="pr15 bdrr1" href="#">
                  Leslie Alexander
                </a>
                <a className="ml15 pr15 bdrr1" href="#">
                  Home Improvement
                </a> */}
                <a className="ml0" href="#">
                  {/* {data.date.month} {data.date.day}, {data.date.year || 2022} */}
                  {
                    new Date(launchData.launch_date)
                      .toDateString()
                      .split(" ")[0]
                  }{" "}
                  {
                    new Date(launchData.launch_date)
                      .toDateString()
                      .split(" ")[1]
                  }{" "}
                  {new Date(launchData.launch_date).getDate() + 1},{" "}
                  {
                    new Date(launchData.launch_date)
                      .toDateString()
                      .split(" ")[3]
                  }
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div
        className="mx-auto maxw1600 mt60"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="row">
          <div className="col-lg-12">
            <div
              className="large-thumb"
              style={{
                height: "40rem",
              }}
            >
              <Image
                width={1200}
                height={600}
                priority
                className="w-100 h-100 cover"
                // style={{maxHeight:'600px',objectFit:'cover'}}
                src={`https://www.indusre.com/new-launches-img/${launchData.launch_mainimage}`}
                alt="launch"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
