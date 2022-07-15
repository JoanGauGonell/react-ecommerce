import Link from "../Link/Link";

const Nav = () => {
  const links = [
    { title: "About Us", url: "#" },
    { title: "Shops", url: "#" },
    { title: "Partnership", url: "#" },
    { title: "Contact", url: "#" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <Link link={link} key={link.title} />
      ))}
    </nav>
  );
};

export default Nav;