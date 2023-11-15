const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      iconClass: "fab fa-facebook-f",
      href: "https://www.facebook.com/IndusRealEstate",
    },
    {
      id: 2,
      iconClass: "fab fa-twitter",
      href: "https://twitter.com/indusREdubai",
    },
    {
      id: 3,
      iconClass: "fab fa-instagram",
      href: "https://www.instagram.com/indusredubai/",
    },
    {
      id: 4,
      iconClass: "fab fa-linkedin-in",
      href: "https://linkedin.com/company/indusre",
    },
  ];

  return (
    <>
      {socialLinks.map((link) => (
        <a className="me-3" href={link.href} key={link.id} target="_blank">
          <i className={link.iconClass}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
