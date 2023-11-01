import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Understanding your budget",
      text: "Whether you are new to the city, or simply looking to upgrade, your budget is of utmost importance in determining where you choose to live.",
      linkText: "Find a home",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Exploring the Communities",
      text: "Whether you are new to the city, or simply looking to upgrade, a right community is equally important.",
      linkText: "Place an ad",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Browsing for Properties",
      text: "You can narrow your search to specific property types once you have shortlisted the communities to live in. Keep in mind the following things before renting your property: property condition, landlord issues and other additional costs.",
      linkText: "Find a rental",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link href="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
