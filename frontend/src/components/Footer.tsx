const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Pixell River Financial.</p>
    </footer>
  );
};

export default Footer;
