
import { Product } from "./ProductModal";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-2">{product.name}</h3>
        <p className="text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <p className="text-primary font-medium">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
