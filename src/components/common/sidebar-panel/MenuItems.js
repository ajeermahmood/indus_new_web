const MenuItems = () => {
  const menuItems = [
    { id: 1, title: "Apartments" },
    { id: 2, title: "Villa" },
    { id: 3, title: "Townhome" },
    { id: 4, title: "Houses" },
    { id: 5, title: "Office" },
    { id: 6, title: "Bungalow" },
    { id: 7, title: "Loft" },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href="#" role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
