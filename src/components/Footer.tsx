const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg gradient-text">CK</span>
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Chandrasekhar Kappagantula
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Physics student at Cal Poly SLO • Exploring the cosmos one observation at a time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
