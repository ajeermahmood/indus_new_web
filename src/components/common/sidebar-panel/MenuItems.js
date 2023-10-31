const MenuItems = () => {
  const menuItems = [
    { label: "Apartment", value: 1 },
    { label: "Townhouse", value: 3 },
    { label: "Office Space", value: 26 },
    { label: "Villa", value: 2 },
    { label: "Penthouse", value: 4 },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a
            className="nav-link"
            href={`/all-properties?t=${item.value}`}
            role="button"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
