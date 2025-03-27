
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
      name: "Recycled Plastic Paver Blocks",
      description: "Durable paver blocks made from recycled plastic, perfect for pathways and outdoor spaces.",
      details: "Our paver blocks are made from 100% recycled plastic and are more durable than traditional concrete pavers. They're weather-resistant, don't crack, and come with a 10-year warranty.",
      price: "$12 per square foot",
      image: "https://images.unsplash.com/photo-1642459215441-0019142ec5ee?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 2,
      name: "Eco-Friendly Furniture",
      description: "Stylish and durable outdoor furniture crafted from recycled plastic waste.",
      details: "Each piece of furniture is handcrafted from sorted and processed HDPE plastic waste. The furniture is UV-resistant, weatherproof, and requires minimal maintenance.",
      price: "$75 - $300",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 3,
      name: "Recycled Plastic Lumber",
      description: "Versatile plastic lumber for construction projects that's more durable than wood.",
      details: "Our plastic lumber is made from high-density polyethylene (HDPE) plastic waste and is ideal for outdoor structures, garden furniture, and more. It doesn't rot, splinter, or need painting.",
      price: "$8 per foot",
      image: "https://images.unsplash.com/photo-1629513621549-11e1dd291003?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 4,
      name: "Decorative Wall Panels",
      description: "Beautiful textured wall panels that add character while reducing plastic waste.",
      details: "These decorative panels are made from a mix of plastic types and can be used for interior wall cladding, partitions, or artistic installations. Each panel has a unique pattern created during the molding process.",
      price: "$45 per panel",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=3869"
    },
    {
      id: 5,
      name: "School Desks",
      description: "Sturdy and colorful school desks made from recycled plastic bottles.",
      details: "Each desk is made from approximately 60 recycled plastic bottles. These desks are distributed to schools throughout Zimbabwe, improving educational infrastructure while reducing plastic pollution.",
      price: "$35 per desk",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=3122"
    },
    {
      id: 6,
      name: "Recycled Plastic Roof Tiles",
      description: "Durable roof tiles that outperform traditional materials and reduce plastic waste.",
      details: "Our roof tiles are lightweight yet stronger than many conventional roofing materials. They're fire-resistant, waterproof, and have excellent insulation properties, helping reduce energy costs.",
      price: "$5 per tile",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 7,
      name: "Garden Planters",
      description: "Colorful and durable planters perfect for home gardens and public spaces.",
      details: "These planters are made from mixed plastic waste and come in various shapes, sizes, and colors. They're UV-resistant, don't degrade in sunlight, and help plants thrive with good drainage properties.",
      price: "$15 - $40",
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 8,
      name: "Eco-Bricks",
      description: "Alternative building materials made from compressed plastic waste.",
      details: "Our eco-bricks are made by compressing clean, dry plastic into durable building blocks. They can be used for non-load bearing walls, garden features, and community projects.",
      price: "$2 per brick",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 9,
      name: "Recycled Plastic Art Pieces",
      description: "Unique art installations and decorative pieces from colorful plastic waste.",
      details: "Created by local artisans, each piece is a one-of-a-kind artwork that tells a story about plastic pollution and transformation. Perfect for homes, offices, or as meaningful gifts.",
      price: "$25 - $200",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=3270"
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
