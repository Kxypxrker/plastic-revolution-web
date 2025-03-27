
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/shared/AnimatedButton";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  details?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleWhatsAppContact = () => {
    const message = `Hello, I'm interested in the ${product.name} priced at ${product.price}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/263771234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello,\n\nI'm interested in the ${product.name} priced at ${product.price}. Can you provide more information?\n\nThank you.`;
    const mailtoUrl = `mailto:info@mckingtorch.co.zw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-4">
              <DialogTitle className="heading-lg">{product.name}</DialogTitle>
              <DialogDescription className="mt-2 text-lg font-medium text-primary">
                {product.price}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mb-8">
              <p className="body-md">{product.description}</p>
              {product.details && <p className="body-md">{product.details}</p>}
            </div>

            <div className="space-y-3">
              <AnimatedButton 
                text="Contact via WhatsApp" 
                onClick={handleWhatsAppContact}
                className="w-full"
              />
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleEmailContact}
              >
                Contact via Email
              </Button>
            </div>

            <DialogClose className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center bg-background/80 hover:bg-background transition-colors">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
