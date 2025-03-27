
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="heading-sm">Mckingtorch Zimbabwe</h3>
            <p className="body-md text-foreground/80 max-w-xs">
              Transforming plastic waste into innovative products that promote
              sustainability and environmental conservation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="heading-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="heading-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground/80">Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">+263 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">info@mckingtorch.co.zw</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="heading-sm">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>© {currentYear} Mckingtorch Zimbabwe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
