import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import categories from './Categories';
import allProducts from './AllProducts';

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onCategoryPage = !!category;
  const isSearching = searchTerm.trim().length > 0;

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((cat) => cat !== slug)
        : [...prev, slug]
    );
  };

  // Only filter categories by checkbox, not search
  const filteredCategories = categories.filter((cat) => {
    return selectedCategories.length === 0 || selectedCategories.includes(cat.slug);
  });

  // Always search by product name, filter by selected categories and route
  const filteredProducts = allProducts.filter((product) => {
    // If user has selected categories, ignore the route category and use only sidebar filters
    if (selectedCategories.length > 0) {
      return (
        selectedCategories.includes(product.categorySlug) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // If no sidebar filter, use the route category (if any)
    const matchesRoute = onCategoryPage ? product.categorySlug === category : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRoute && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Search bar at the top, centered */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <ul className="space-y-2 mb-6">
            {categories.map((cat) => (
              <li key={cat.slug} className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.slug)}
                    onChange={() => toggleCategory(cat.slug)}
                    className="accent-[var(--primary-green)]"
                  />
                  <span className="text-sm">{cat.name}</span>
                </label>
                <span className="text-xs text-gray-500">
                  ({allProducts.filter((p) => p.categorySlug === cat.slug).length})
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <section className="md:col-span-3">
          {!onCategoryPage && !isSearching ? (
            <>
              <h1 className="text-xl font-bold text-[var(--secondary-blue)] mb-6">
                Product Categories
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((cat) => (
                  <Link
                    to={`/products/${cat.slug}`}
                    key={cat.slug}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition block"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-40 w-full object-cover rounded-t"
                    />
                    <div className="p-4">
                      <h2 className="text-base font-semibold mb-1">{cat.name}</h2>
                      <p className="text-gray-600 text-sm mb-2">{cat.description}</p>
                      <span className="text-[var(--primary-green)] text-xs font-medium">
                        {allProducts.filter((p) => p.categorySlug === cat.slug).length} product
                        {allProducts.filter((p) => p.categorySlug === cat.slug).length !== 1
                          ? 's'
                          : ''}
                      </span>
                    </div>
                  </Link>
                ))}
                {filteredCategories.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-20">
                    No matching categories found.
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold text-[var(--secondary-blue)] mb-6 capitalize">
                {onCategoryPage && !isSearching
                  ? `${category.replace(/-/g, ' ')} Products`
                  : 'Products'}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const inCart = cart.some((item) => item.id === product.id);
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg border border-gray-200 transition p-4 flex flex-col"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-40 w-full object-cover rounded mb-3"
                        />
                        <h2 className="text-base font-semibold mb-1">{product.name}</h2>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto border border-gray-100 rounded px-3 py-2 bg-gray-50 shadow-sm">
                          <span className="text-[var(--primary-green)] font-bold text-sm">{product.price}</span>
                          {inCart ? (
                            <button
                              className="bg-[var(--primary-green)] text-white px-4 py-2 rounded hover:bg-[var(--light-green)] transition text-sm"
                              onClick={() => navigate('/cart')}
                            >
                              View Cart
                            </button>
                          ) : (
                            <button
                              className="bg-[var(--primary-green)] text-white px-4 py-2 rounded hover:bg-[var(--light-green)] transition text-sm"
                              onClick={() => addToCart(product)}
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full text-center text-gray-500 py-20">
                    No products found{onCategoryPage ? ' in this category' : ''}.
                  </div>
                )}
              </div>
              {(onCategoryPage || isSearching) && (
                <div className="mt-6">
                  <Link
                    to="/products"
                    className="text-[var(--secondary-blue)] hover:underline text-sm"
                  >
                    &larr; Back to Categories
                  </Link>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
