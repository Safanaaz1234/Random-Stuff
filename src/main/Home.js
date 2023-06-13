import React from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Banner from "./Banner";
import "../css/styles.css";
import burrito from "../assets/burrito.jpg";
import SmallBanner from "./SmallBanner";
import foodPacket from "../assets/foodPacket.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ResponsiveNavbar />
      <Banner
        imgUrl="https://images.pexels.com/photos/2878711/pexels-photo-2878711.jpeg?auto=compress&cs=tinysrgb&w=600"
        altVal="banner1"
        colorVal="bg-brown"
        content=" 'Le café fait partie du rituel du matin. Il enivre l'âme, stimule les sens et éveille l'esprit.'"
        description=" - Honoré de Balzac"
        fontFam="Dancing Script"
        reverse={true}
      />
      <Banner
        imgUrl={burrito}
        altVal="banner2"
        colorVal="bg-mustard"
        content=" 'Taco Lovers Unite!' "
        description="Delight in our mouthwatering tacos, expertly crafted with the finest ingredients, bursting with bold flavors that will transport your taste buds to culinary bliss."
        fontFam="Dancing Script"
        reverse={false}
      />
      <Link to="/menu/product/butter-bliss">
        <Banner
          imgUrl="https://images.pexels.com/photos/15937218/pexels-photo-15937218/free-photo-of-plate-with-croissant.jpeg?auto=compress&cs=tinysrgb&w=600"
          altVal="banner3"
          colorVal="bg-cream"
          content="Butter Bliss just dropped"
          description="Introducing our buttery, flaky croissant baked to golden perfection"
          fontFam="Dancing Script"
          reverse={true}
        />
      </Link>
      <SmallBanner
        imgUrl="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600"
        altVal="banner4"
        colorVal="bg-skin"
        content="Sandwiches: Layers of Deliciousness!"
        description="Experience the perfect harmony of premium ingredients, delectable flavors, and satisfying textures in every bite of our mouthwatering, made-to-order sandwiches."
        fontFam="Dancing Script"
        reverse={false}
      />
      <SmallBanner
        imgUrl={foodPacket}
        altVal="banner5"
        colorVal="bg-brown"
        content="Delivery, from our place to yours"
        description="Get a Jolt of Joy with 10% Off! Sip, Save, and Savor the Savings!"
        fontFam="Dancing Script"
        reverse={true}
      />
      <Footer />
    </div>
  );
}

export default Home;
