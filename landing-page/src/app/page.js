// pages/index.js
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import banner from "../../public/images/banner.jpg";
import product1 from "../../public/images/product1.jpg";
import product2 from "../../public/images/product2.jpg";
import wind from "../../public/images/wind.jpg";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Motherland Textile India</title>
      </Head>

      {/* Navbar */}
      <div>
        <Image
          src={logo}
          alt="Motherland Textile India Logo"
          width={100}
          height={50}
        />

        <nav className="bg-customPurple text-white p-4 flex justify-center">
          <ul className="flex space-x-10 ">
            <li>Home</li>
            <li>Group Profile</li>
            <li>Infrastructure</li>
            <li>Products</li>
            <li>Quality</li>
            <li>Wind Energy</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 text-center">
        <Image
          src={banner}
          alt="Motherland Textile India Banner"
          objectFit="cover"
          className="w-full h-12"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">
            Threads of <span className="text-yellow-600">Quality</span>, Woven
            with Pride
          </h1>
          <p className="mt-4 text-lg text-white">
            Welcome to Motherland Textile India
          </p>
          <button className="mt-4 bg-customPurple text-white py-2 px-4 rounded">
            Know More
          </button>
        </div>
      </section>

      {/* About Section */}
      <div>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">
            Welcome to Motherland Textile India
          </h2>
          <p className="mt-4">
            Motherland Textile Industries Limited has etched a commendable
            position...
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="p-4 bg-customPurple rounded">
              <p className="text-2xl font-bold">40+</p>
              <p>Years of Experience</p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <p className="text-2xl font-bold">1K+</p>
              <p>Fabrics Per Day Production</p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <p className="text-2xl font-bold">16</p>
              <p>Acre Campus</p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <p className="text-2xl font-bold">30</p>
              <p>People Employed</p>
            </div>
          </div>
        </section>
      </div>

      {/* Infrastructure Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold">Infrastructure</h2>
        <p className="mt-4">Dur et labor et dolore magna aliqua...</p>
        <ul className="mt-8 flex justify-center space-x-8 list-none">
          <li className="p-4 rounded shadow  bg-customPurple">
            <h3 className="mt-2 font-bold ">Warping</h3>
          </li>
          <li className="p-4 bg-white rounded shadow">
            <h3 className="mt-2 font-bold">Sizing</h3>
          </li>
          <li className="p-4 bg-white rounded shadow">
            <h3 className="mt-2 font-bold">Weaving</h3>
          </li>
          <li className="p-4 bg-white rounded shadow">
            <h3 className="mt-2 font-bold">Packing</h3>
          </li>
        </ul>
      </section>

      {/* Products Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="p-4 bg-white rounded shadow">
            <Image
              src={product1}
              alt="Motherland Textile India Logo"
              // width={100}
              // height={50}
            />
            <h3 className="mt-2 font-bold">Stock Fabric</h3>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <Image
              src={product2}
              alt="Motherland Textile India Logo"
              // width={100}
              // height={50}
            />
            <h3 className="mt-2 font-bold">Power Loom Fabric</h3>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold">Quality</h2>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="p-4 bg-customPurple rounded shadow">
            <h3 className="font-bold">Elementum Integer</h3>
            <p>Do eiusmod tempor incididunt ut labore...</p>
          </div>
          <div className="p-4 bg-customPurple rounded shadow">
            <h3 className="font-bold">Mauris Augue</h3>
            <p>Excepteur sint occaecat cupidatat non...</p>
          </div>
          <div className="p-4 bg-customPurple rounded shadow">
            <h3 className="font-bold">Turpis Massa Sed</h3>
            <p>Vervica mases norem ipsum...</p>
          </div>
          <div className="p-4 bg-customPurple rounded shadow">
            <h3 className="font-bold">Commodo Vulputate</h3>
            <p>Sed do eiusmod tempor incididunt ut labore...</p>
          </div>
        </div>
      </section>

      {/* Wind Energy Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Wind Energy</h2>
        <p className="mt-4">Fuelled by Nature, Powered by Innovation</p>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="p-4 bg-white rounded shadow">
            <Image
              src={wind}
              alt="Motherland Textile India Logo"
              // width={100}
              // height={50}
            />
            <h3 className="mt-2 font-bold">Wind Energy</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-customPurple text-white p-4 text-center">
        <p>&copy; 2024 Motherland Textile. All rights reserved.</p>
      </footer>
    </div>
  );
}
