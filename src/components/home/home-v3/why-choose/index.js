import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

const WhyChoose = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div className="position-relative mb30-md">
          <Image
            width={591}
            height={685}
            style={{
              borderRadius: "10px",
            }}
            priority
            className="w-100 h-100 cover"
            src="/images/about/output-onlinepngtools (4).png"
            alt="why chosse"
          />
          <Link href="/all-properties">
            <div className="iconbox-style5 d-flex align-items-center">
              <span className="icon flaticon-home flex-shrink-0" />
              <div className="iconbox-content flex-shrink-1 ms-2">
                {/* <p className="text mb-0">Total Rent</p> */}
                <h4 className="title mb-0 ml10">Browse Properties</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* End .col-6 */}

      <div
        className="col-md-6 col-lg-5 offset-lg-1"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="main-title2">
          <h2 className="title">Introducing Self Visit</h2>
          <p className="paragraph fz15">
            You can now visit the property at your convenience,{" "}
            <br className="d-none d-lg-block" />
            and don't need the agent to accompany you.
          </p>
        </div>
        {/* End main-title2 */}

        <div className="why-chose-list">
          <Features />
        </div>
        {/* End .why-chose-list */}
      </div>
      {/* End .col-6 */}
    </>
  );
};

export default WhyChoose;
