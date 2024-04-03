import Image from "next/image";

export default function Details({ devData }) {
  return (
    <>
      <div className="container mbl-hidden">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <h2 className="blog-title">{devData.name}</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <Image
              width={105}
              height={105}
              style={{
                border: "1px solid black",
                borderRadius: "3px",
                padding: "5px",
              }}
              className="mr10 h-100 cover"
              src={`https://www.indusre.com/images/builders/logo/${devData.logo}`}
              alt="blog"
            />
          </div>
        </div>
      </div>
      {/* End .container */}

      <div
        className="mx-auto maxw1600 mt60 mt0-mbl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="row">
          <div className="col-lg-12">
            <div
              className="large-thumb h-20rem-mbl"
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
                src={`https://www.indusre.com/images/builders/main-image/${devData.main_image}`}
                alt="blog"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
