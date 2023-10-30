import Image from "next/image";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      icon: "/images/guides/buy-property.svg",
      title: "Buy a property",
      text: "Buying a home can be both exciting and daunting whether you are a first-time buyer or a seasoned investor. We have culminated a list of factors to consider before you become a homeowner in Dubai.",
      linkText: "Read Guide",
    },
    {
      icon: "/images/guides/sell-property.svg",
      title: "Sell a property",
      text: "Selling your property is a crucial period with so many decisions to make that can act as a key determiner which could either lead you to a profit or a loss. It can be a hectic time period but if done right can lead to a smooth sale transaction.",
      linkText: "Read Guide",
    },
    {
      icon: "/images/guides/rent-property.svg",
      title: "Rent a property",
      text: "Renting a property has become a popular choice for many. Tourists and corporate officers visiting Dubai prefer to rent. Moreover, expats and nationals working in Dubai can also find long and short-term rentals in Dubai. ",
      linkText: "Read Guide",
    },
  ];

  return (
    <>
      {iconboxData.map((item, index) => (
        <div
          className="col-sm-6 col-lg-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100} // Increase delay for each item
        >
          <div
            className="iconbox-style3 text-center"
            style={{
              minHeight: "40rem !important",
            }}
          >
            <div className="icon">
              <Image width={250} height={250} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <a href="#" className="ud-btn btn-thm3">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
