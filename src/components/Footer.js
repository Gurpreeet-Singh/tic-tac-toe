const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-3  text-indigo-400">
      <p>Copyright {year}</p>
    </footer>
  );
};

export default Footer;
