// COPY THIS FILE INTO src/App.jsx
// THEN RUN:
// npm install
// npm run dev
//
// FOR FREE LIVE WEBSITE:
// 1. Upload to GitHub
// 2. Import project in Vercel
// 3. Click Deploy
//
// REQUIRED:
// npm create vite@latest my-business-site -- --template react
// cd my-business-site
// npm install
// npm install tailwindcss @tailwindcss/vite
// Replace src/App.jsx with this file
//
// EASY FREE DEPLOY:
// https://vercel.com

export default function BusinessWebsite() {
  const cartCount = 2
  const businessName = 'YourBrand'
  const whatsappNumber = '+8801700000000'

  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT.appspot.com',
    messagingSenderId: '123456789',
    appId: 'YOUR_APP_ID'
  }
  const products = [
    {
      id: 1,
      name: 'Premium Product',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Modern Item',
      price: '$95',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Luxury Collection',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{businessName}</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative bg-gray-100 px-4 py-2 rounded-2xl font-semibold">
              Cart ({cartCount})
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-2xl transition shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-blue-200 text-sm mb-4">
              Professional Business Website
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Grow Your Business Online
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              A fully customizable modern business website with product showcase,
              online ordering system, payment section, and responsive design.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Shop Products
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
              alt="Business"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold mb-3">Order System</h3>
            <p className="text-gray-600 leading-relaxed">
              Customers can place orders directly from your website.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-2xl font-bold mb-3">Payment Gateway</h3>
            <p className="text-gray-600 leading-relaxed">
              Easily connect Stripe, PayPal, SSLCommerz, or bKash.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-3">Easy Customization</h3>
            <p className="text-gray-600 leading-relaxed">
              Change colors, logo, products, prices, and content anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">
              Showcase your products professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold text-xl mb-5">
                    {product.price}
                  </p>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-4">Place Your Order</h2>
              <p className="text-gray-600">
                Customers can order products directly from here.
              </p>
            </div>

            <div className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-semibold">
              Free Delivery Available
            </div>
          </div>

          <div className="hidden">
            <h2 className="text-4xl font-bold mb-4">Place Your Order</h2>
            <p className="text-gray-600">
              Customers can order products directly from here.
            </p>
          </div>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Product Name"
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Payment Options */}
            <div>
              <h3 className="text-xl font-bold mb-4">Payment Method</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <label className="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <span>bKash</span>
                </label>

                <label className="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <span>Nagad</span>
                </label>

                <label className="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <span>Card Payment</span>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold transition shadow-lg">
                Confirm Order
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition shadow-lg text-center"
              >
                Order via WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">About Your Business</h2>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Replace this section with your company information, mission,
              services, and brand story.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Admin Demo Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Admin Dashboard Demo
              </p>

              <h2 className="text-4xl font-bold mb-5">
                Manage Your Business Easily
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                Add products, manage orders, edit prices, and control your online business from one dashboard.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-white text-black px-6 py-3 rounded-2xl font-bold">
                  Add Product
                </button>

                <button className="border border-white px-6 py-3 rounded-2xl font-bold">
                  View Orders
                </button>
              </div>
            </div>

            <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-gray-100 p-5 rounded-2xl">
                  <p className="text-gray-500">Orders</p>
                  <h4 className="text-3xl font-bold">120</h4>
                </div>

                <div className="bg-gray-100 p-5 rounded-2xl">
                  <p className="text-gray-500">Products</p>
                  <h4 className="text-3xl font-bold">35</h4>
                </div>

                <div className="bg-gray-100 p-5 rounded-2xl">
                  <p className="text-gray-500">Revenue</p>
                  <h4 className="text-3xl font-bold">$5.2K</h4>
                </div>

                <div className="bg-gray-100 p-5 rounded-2xl">
                  <p className="text-gray-500">Customers</p>
                  <h4 className="text-3xl font-bold">480</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional eCommerce business website template.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@yourbrand.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Location: Bangladesh</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-2xl text-black"
              />

              <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-2xl transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 YourBrand. All rights reserved.
        </div>
      </footer>

      {/* Setup Guide */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Full Free Setup Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-5">Free Hosting</h3>

              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li>1. Create GitHub account</li>
                <li>2. Upload website code</li>
                <li>3. Connect with Vercel</li>
                <li>4. Click Deploy</li>
                <li>5. Your website becomes live instantly</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-5">Free Features Included</h3>

              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li>✔ Admin Dashboard</li>
                <li>✔ Product Showcase</li>
                <li>✔ WhatsApp Orders</li>
                <li>✔ Mobile Responsive</li>
                <li>✔ Online Payment Ready</li>
                <li>✔ Firebase Ready</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-5">
              Firebase Database & Login Ready
            </h3>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Use Firebase free plan to store orders, products, users, and admin login system.
            </p>

            <div className="bg-black/30 p-6 rounded-2xl overflow-auto text-sm">
              <pre>{JSON.stringify(firebaseConfig, null, 2)}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
