"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  X,
  MapPin,
  Star,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define outlet data structure
interface OutletData {
  id: string;
  name: string;
  description: string;
  phone: string;
  rating: number;
  imageUrl: string;
  menuImages: string[];
  location: string;
}

// Sample data for the 5 outlets
const outletData: OutletData[] = [
  {
    id: "mini-meals",
    name: "Mini Meals",
    description: "Quick, delicious meals for people on the go",
    phone: "8112257659",
    rating: 4.5,
    imageUrl: "/miniMeals.jpeg",
    menuImages: ["/miniMealsMenu1.jpeg", "/miniMealsMenu2.jpeg"],
    location: "B1 Block",
  },
  {
    id: "saras",
    name: "Saras",
    description: "Authentic regional cuisine with a modern twist",
    phone: "7357549601",
    rating: 4.5,
    imageUrl: "/saras.jpeg",
    menuImages: ["/sarasMenu1.jpeg"],
    location: "G1 Block",
  },
  {
    id: "kebab-nation",
    name: "Kebab Nation",
    description: "Premium grilled kababs and Middle Eastern delicacies",
    phone: "9001282566",
    rating: 4.7,
    imageUrl: "/kebabnation.jpeg",
    menuImages: ["/kebabNationMenu1.jpeg"],
    location: "G1 Block",
  },
  {
    id: "sanchay",
    name: "Sanchay",
    description: "Farm-to-table healthy eating options",
    phone: "",
    rating: 4.6,
    imageUrl: "/sanchay.jpeg",
    menuImages: ["/sanchayMenu1.jpeg", "/sanchayMenu2.jpeg"],
    location: "G1 Block",
  },
  {
    id: "poori-bhaji",
    name: "Poori Bhaji",
    description: "Traditional breakfast and snack items",
    phone: "",
    rating: 4.4,
    imageUrl: "/kebabnation.jpeg",
    menuImages: ["/pooriBhajiMenu1.jpeg", "/pooriBhajiMenu2.jpeg"],
    location: "G1 Block",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function OutletShowcase() {
  const [selectedOutlet, setSelectedOutlet] = useState<OutletData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenuImageIndex, setCurrentMenuImageIndex] = useState(0);

  const handleCallClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openMenu = (outlet: OutletData) => {
    setSelectedOutlet(outlet);
    setCurrentMenuImageIndex(0);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const nextMenuImage = () => {
    if (selectedOutlet) {
      setCurrentMenuImageIndex((prev) =>
        prev === selectedOutlet.menuImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMenuImage = () => {
    if (selectedOutlet) {
      setCurrentMenuImageIndex((prev) =>
        prev === 0 ? selectedOutlet.menuImages.length - 1 : prev - 1
      );
    }
  };

  const handleFeaturedOutletsClick = () => {
    window.open("https://chat.whatsapp.com/Ky5bvOTkBAy9FVtj6IUBIu", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Section */}
      <motion.div
        className="relative h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/restaurantBanner.jpeg"
          alt="Food Outlets Banner"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Taste The Best Around Campus
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Handpicked Food Outlets Loved By Students, Now Just a Click Away!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleFeaturedOutletsClick}
            >
              Dialy Food Deals
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Food Outlets</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our partner restaurants and food outlets
          </p>
        </motion.div>

        {/* Outlets Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {outletData.map((outlet) => (
            <motion.div
              key={outlet.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-56">
                <Image
                  src={outlet.imageUrl}
                  alt={`${outlet.name} outlet`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Star
                    className="h-4 w-4 text-yellow-500 mr-1"
                    fill="#FBBF24"
                  />
                  <span className="text-sm font-medium">{outlet.rating}</span>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {outlet.name}
                </h3>

                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{outlet.location}</span>
                </div>

                <div className="flex space-x-3">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => openMenu(outlet)}
                    >
                      Menu <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => handleCallClick(outlet.phone)}
                    >
                      Call <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Menu Modal */}
      {isMenuOpen && selectedOutlet && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <motion.div
            className="relative z-10 bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="sticky top-0 flex justify-between items-center p-4 bg-white border-b z-10">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {selectedOutlet.name} Menu
                </h2>
                <p className="text-gray-500">{selectedOutlet.location}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6">
              {/* Improved menu image display */}
              <div className="relative mb-8">
                <motion.div
                  key={currentMenuImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  {/* Image container with adjusted styles for better visibility */}
                  <div className="relative max-h-[70vh] w-auto">
                    <Image
                      src={selectedOutlet.menuImages[currentMenuImageIndex]}
                      alt={`${selectedOutlet.name} Menu`}
                      width={800}
                      height={1200}
                      className="object-contain max-h-[70vh] rounded-lg"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />

                    {/* Zoom controls */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                          window.open(
                            selectedOutlet.menuImages[currentMenuImageIndex],
                            "_blank"
                          )
                        }
                        className="bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation controls - now positioned on the sides for better visibility */}
                {selectedOutlet.menuImages.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="pointer-events-auto"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevMenuImage}
                        className="bg-white/80 rounded-full shadow-md"
                      >
                        <ArrowLeftCircle className="h-8 w-8 text-blue-600" />
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="pointer-events-auto"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextMenuImage}
                        className="bg-white/80 rounded-full shadow-md"
                      >
                        <ArrowRightCircle className="h-8 w-8 text-blue-600" />
                      </Button>
                    </motion.div>
                  </div>
                )}

                {/* Page indicator */}
                {selectedOutlet.menuImages.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {selectedOutlet.menuImages.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === currentMenuImageIndex
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                        whileHover={{ scale: 1.5 }}
                        animate={
                          index === currentMenuImageIndex
                            ? { scale: [1, 1.2, 1], opacity: 1 }
                            : { opacity: 0.6 }
                        }
                        onClick={() => setCurrentMenuImageIndex(index)}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Call button at bottom */}
              <div className="mt-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                    onClick={() => handleCallClick(selectedOutlet.phone)}
                  >
                    <Phone className="mr-2 h-5 w-5" /> Call{" "}
                    {selectedOutlet.name}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
