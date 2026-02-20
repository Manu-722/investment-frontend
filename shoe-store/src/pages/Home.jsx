import React from 'react';

const Home = () => {
  const textShadowStyle = {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="bg-cover bg-center bg-no-repeat text-rose-400 py-32 px-6 text-center h-[90vh]"
        style={{
          backgroundImage: "url('src/assets/pexels-pixabay-373638.jpg')",
          ...textShadowStyle,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ElectroCity</h1>
        <p className="text-lg max-w-xl mx-auto">
          Powering your world with reliable, modern electricity solutions.
        </p>
      </section>

      {/* MISSION & VISION SECTION */}
      <section
        className="bg-cover bg-center bg-no-repeat text-rose-400 py-28 px-6 text-center h-[80vh]"
        style={{
          backgroundImage: "url('/src/assets/pexels-tima-miroshnichenko-6765524.jpg')",
          ...textShadowStyle,
        }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          At ElectroCity, our mission is to deliver safe, affordable, and sustainable electricity services
          that empower homes, businesses, and communities.
        </p>
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="max-w-2xl mx-auto">
          To become Africa’s most trusted electricity provider, driving innovation and energy access for all.
        </p>
      </section>

      {/* ABOUT US SECTION */}
      <section
        className="bg-cover bg-center bg-no-repeat text-rose-400 py-28 px-6 text-center h-[80vh]"
        style={{
          backgroundImage: "url('/src/assets/pexels-mnzoutfits-1598505.jpg')",
          ...textShadowStyle,
        }}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          ElectroCity is more than a utility—we’re a commitment to progress.
          Built in Nairobi, powered by African expertise, and guided by global energy standards,
          we deliver electricity solutions that keep your world moving.
        </p>
      </section>
    </main>
  );
};

export default Home;