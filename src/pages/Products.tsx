
import { useState } from "react";
import SectionHeader from "@/components/ui/shared/SectionHeader";
import ProductCard from "@/components/products/ProductCard";
import ProductModal from "@/components/products/ProductModal";
import { Product } from "@/components/products/ProductModal";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "EcoStep – Sustainable Shoes",
      description: "Introducing EcoStep Shoes, made from 100% recycled plastic. We take discarded plastic, melt it down, and transform it into comfortable, durable, and stylish footwear—all for just $10!",
      details: "Affordable & Sustainable – Save money while saving the planet Durable & Lightweight – Designed for everyday comfort ,Water-Resistant – Perfect for all weather conditions,Eco-Friendly Choice – Reducing plastic waste, one step at a time,Join the movement! Get your pair today for just $10 and make every step count.Limited stock available – Order now!",
      price: "$10",
      image: "/lovable-uploads/shoes.jpeg"
    },
    {
      id: 2,
      name: "EcoCarry – Sustainable Bags",
      description: "Say hello to EcoCarry Bags, made from 100% recycled plastic. We melt down discarded plastic and turn it into strong, stylish, and eco-friendly bags—all for just $10!",
      details: "Affordable & Sustainable – An eco-friendly bag at a budget-friendly price,Durable & Lightweight – Built to last and easy to carry,Water-Resistant – Perfect for daily use, rain or shine, Eco-Friendly Choice – Reduce plastic waste with every use",
      price: "$10",
      image: "/lovable-uploads/bags.jpeg"
    },
    {
      id: 3,
      name: "EcoBin – Durable Recycled Plastic Trash Bins",
      description: "Upgrade your space with EcoBin Trash Bins, made from 100% recycled plastic. These bins are designed for durability, functionality, and sustainability—available in various sizes from $30 to $80",
      details: "Eco-Friendly & Sustainable – Made from melted-down plastic waste,Strong & Durable – Built to withstand daily use,Water & Weather-Resistant – Ideal for indoor & outdoor spaces,Multiple Sizes Available – Choose the perfect fit for your home, office, or outdoor area",
      price: "$30-$80",
      image: "/lovable-uploads/bin.jpeg"
    },
    {
      id: 4,
      name: "EcoTree – Recycled Plastic Bottle Christmas Trees",
      description: "Introducing EcoTree, a unique and eco-friendly Christmas tree made entirely from recycled plastic bottles! Designed to bring festive joy while reducing waste, these trees are available in different sizes, ranging from $60 to $400.",
      details: "Eco-Friendly & Sustainable – Made from repurposed plastic bottles,Durable & Reusable – Use it year after year,Indoor & Outdoor Friendly – Weather-resistant for any setting,Unique & Stylish – A modern twist on holiday decor",
      price: "$60 - $400",
      image: "/lovable-uploads/tree.jpeg"
    },
    {
      id: 5,
      name: "EcoMat – Durable Recycled Plastic Mats for Just",
      description: "Upgrade your space with EcoMat, a versatile and eco-friendly mat made from 100% recycled plastic. Perfect for home, office, or outdoor use—available for just $6!",
      details: "Eco-Friendly & Sustainable – Made from repurposed plastic waste,Durable & Lightweight – Built to last and easy to carry,Water-Resistant & Easy to Clean – Ideal for any setting,Multi-Purpose Use – Great for floors, yoga, picnics, and more",
      price: "$6",
      image: "/lovable-uploads/mats.jpeg"
    },
    {
      id: 6,
      name: "EcoPack – Recycled Plastic Backpack for Just",
      description: "Meet EcoPack, a durable and stylish backpack made from 100% recycled plastic. Designed for everyday use—whether for school, work, or travel—all for just $8!",
      details: "Eco-Friendly & Sustainable – Made from repurposed plastic waste, Lightweight & Comfortable – Easy to carry all day,Water-Resistant & Durable – Built to last in any weather,Spacious & Functional – Perfect for books, laptops,or essentials, Sustainability meets affordability! Get your EcoPack today for only $8.",
      price: "$8",
      image: "/lovable-uploads/backpack.jpeg"
    },
    {
      id: 7,
      name: "EcoBelt – Sustainable Recycled Plastic Belts",
      description: "Upgrade your wardrobe with EcoBelt, a durable and eco-friendly belt made from 100% recycled plastic. Available in multiple styles and sizes, priced from just $5 to $15!",
      details: "Eco-Friendly & Sustainable – Made from repurposed plastic waste,Strong & Long-Lasting – Built for durability and daily wear,Water-Resistant & Lightweight – Perfect for any occasion,Stylish & Versatile – Ideal for casual and formal outfits,Look good while doing good! Get your EcoBelt today and take a step toward a greener future.",
      price: "$5-$15",
      image: "/lovable-uploads/balt.jpeg"
    },
    {
      id: 8,
      name: "EcoStep – Sustainable Shoes for Just",
      description: "Introducing EcoStep Shoes, made from 100% recycled plastic. We take discarded plastic, melt it down, and transform it into comfortable, durable, and stylish footwear—all for just $10!",
      details: "Affordable & Sustainable – Save money while saving the planet,Durable & Lightweight – Designed for everyday comfort,Water-Resistant – Perfect for all weather conditions,Eco-Friendly Choice – Reducing plastic waste, one step at a time,Join the movement! Get your pair today for just $10 and make every step count.",
      price: "$10",
      image: "/lovable-uploads/shoes2.jpeg"
    },
    {
      id: 9,
      name: "EcoStep – Sustainable Shoes for Just",
      description: "Introducing EcoStep Shoes, made from 100% recycled plastic. We take discarded plastic, melt it down, and transform it into comfortable, durable, and stylish footwear—all for just $10!",
      details: "Affordable & Sustainable – Save money while saving the planet,Durable & Lightweight – Designed for everyday comfort,Water-Resistant – Perfect for all weather conditions,Eco-Friendly Choice – Reducing plastic waste, one step at a time,Join the movement! Get your pair today for just $10 and make every step count.",
      price: "$10",
      image: "/lovable-uploads/shoes3.jpeg"
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container-padding mx-auto">
        <SectionHeader
          title="Our Products"
          subtitle="Each of our products represents plastic waste diverted from landfills and waterways, transformed into beautiful, functional items that serve a purpose while helping the environment."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="heading-md mb-4">Custom Orders</h3>
            <p className="text-muted-foreground mb-6">
              Don't see exactly what you're looking for? We accept custom orders for larger quantities or specific design requirements. Contact us to discuss your needs.
            </p>
            <AnimatedButton text="Contact Us" href="/contact" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
