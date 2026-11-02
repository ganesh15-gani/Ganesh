import { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  Search, 
  ShoppingCart, 
  Building2, 
  MapPin, 
  Check, 
  Trash2, 
  Plus, 
  Minus,
  UtensilsCrossed,
  Bike,
  Film,
  Ticket,
  CheckCircle
} from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-space-950/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col glass-panel rounded-3xl border border-emerald-500/40 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-space-900/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-display font-bold text-white">{project.title}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                  project.status === 'Featured' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Render Specific Interactive Demo */}
          {project.demoType === 'stayzen' && <StayZenDemo />}
          {project.demoType === 'ecommerce' && <ECommerceDemo />}
          {project.demoType === 'food' && <FoodDeliveryDemo />}
          {project.demoType === 'movie' && <MovieTicketDemo />}

          {/* Key Architectural Highlights */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Features & Architecture</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-space-900/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(t => (
              <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-slate-300">
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
          >
            <span>Explore Developer GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

/* --- 1. STAYZEN INTERACTIVE DEMO --- */
function StayZenDemo() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const listings = [
    { id: 1, name: 'Zenith Luxury PG for Tech Professionals', city: 'Bangalore', area: 'Electronic City', price: '₹14,500/mo', rating: '4.8', type: 'Single / Double', verified: true },
    { id: 2, name: 'Greenwood Coliving & Accommodation', city: 'Hyderabad', area: 'Hitec City', price: '₹12,000/mo', rating: '4.7', type: 'Private Room', verified: true },
    { id: 3, name: 'UrbanNest Premium PG', city: 'Pune', area: 'Hinjewadi', price: '₹11,500/mo', rating: '4.6', type: 'Shared / AC', verified: true },
    { id: 4, name: 'TechHaven Modern Stay', city: 'Bangalore', area: 'Koramangala', price: '₹16,000/mo', rating: '4.9', type: 'Studio Apartment', verified: true },
  ];

  const filtered = listings.filter(item => {
    const matchCity = selectedCity === 'All' || item.city === selectedCity;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-space-950/70 border border-emerald-500/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area or property name..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-space-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {['All', 'Bangalore', 'Hyderabad', 'Pune'].map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  selectedCity === city
                    ? 'bg-emerald-500 text-space-950 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(item => (
            <div key={item.id} className="p-3.5 rounded-xl bg-space-900/80 border border-white/5 hover:border-emerald-500/30 transition-all space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">{item.name}</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">★ {item.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{item.area}, {item.city}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                <span className="text-emerald-400 font-mono font-bold">{item.price}</span>
                <span className="text-[11px] text-slate-400">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- 2. MODERN E-COMMERCE INTERACTIVE DEMO --- */
function ECommerceDemo() {
  const [cart, setCart] = useState<{ id: number; title: string; price: number; qty: number }[]>([]);
  const [activeTab, setActiveTab] = useState<'Audio' | 'Gear' | 'Wearables'>('Audio');

  const products = [
    { id: 101, title: 'Quantum Wireless ANC Headphones', category: 'Audio', price: 7999, tag: 'Bestseller' },
    { id: 102, title: 'Apex Mechanical RGB Keyboard', category: 'Gear', price: 4499, tag: 'Hot' },
    { id: 103, title: 'UltraFit OLED Smart Fitness Band', category: 'Wearables', price: 3299, tag: 'New' },
    { id: 104, title: 'Studio Hi-Fi Noise Isolating Buds', category: 'Audio', price: 3999, tag: 'Sale' },
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Products Column */}
        <div className="md:col-span-8 p-4 rounded-2xl bg-space-950/70 border border-cyan-500/20 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Storefront Showcase</span>
            <div className="flex gap-2 text-xs">
              {(['Audio', 'Gear', 'Wearables'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === cat ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.filter(p => p.category === activeTab).map(p => (
              <div key={p.id} className="p-3.5 rounded-xl bg-space-900 border border-white/5 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    {p.tag}
                  </span>
                  <h5 className="text-xs font-semibold text-white mt-1.5">{p.title}</h5>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono font-bold text-cyan-300">₹{p.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(p)}
                    className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Plus className="w-3 h-3" /> Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Drawer Simulation */}
        <div className="md:col-span-4 p-4 rounded-2xl bg-space-950/90 border border-white/10 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
                Cart ({cart.reduce((a, b) => a + b.qty, 0)})
              </span>
            </div>

            <div className="space-y-2 mt-3 max-h-40 overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <p className="text-[11px] text-slate-500 text-center py-4">Cart is currently empty. Add products to test.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-xs bg-white/[0.02] p-2 rounded-lg">
                    <div className="truncate pr-2">
                      <p className="truncate text-slate-200 text-[11px]">{item.title}</p>
                      <span className="text-[10px] text-slate-400">Qty: {item.qty} × ₹{item.price}</span>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 p-1 cursor-pointer">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Subtotal:</span>
              <span className="text-white font-bold">₹{total.toLocaleString()}</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={() => alert('Order simulated successfully! This demonstrates the reactive cart & checkout flow.')}
              className="w-full py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-space-950 cursor-pointer transition-colors"
            >
              Simulate Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 3. ONLINE FOOD DELIVERY INTERACTIVE DEMO --- */
function FoodDeliveryDemo() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Biryani' | 'Pizza' | 'Healthy'>('All');
  const [orderCart, setOrderCart] = useState<{ id: number; name: string; price: number; qty: number; isVeg: boolean }[]>([]);
  const [orderStage, setOrderStage] = useState<'browsing' | 'confirmed'>('browsing');

  const menuItems = [
    { id: 201, name: 'Royal Hyderabadi Dum Biryani', category: 'Biryani', price: 340, rating: '4.9', isVeg: false, desc: 'Slow-cooked aromatic basmati rice with fragrant spices & saffron.' },
    { id: 202, name: 'Paneer Butter Masala & Garlic Naan', category: 'Biryani', price: 290, rating: '4.8', isVeg: true, desc: 'Fresh cottage cheese simmered in rich buttery tomato gravy.' },
    { id: 203, name: 'Artisan Truffle Mushroom Pizza', category: 'Pizza', price: 420, rating: '4.7', isVeg: true, desc: 'Hand-stretched sourdough with wild mushrooms and mozzarella.' },
    { id: 204, name: 'Avocado Green Goddess Bowl', category: 'Healthy', price: 310, rating: '4.8', isVeg: true, desc: 'Quinoa, organic greens, creamy avocado, and toasted seeds.' },
  ];

  const addToFoodCart = (item: typeof menuItems[0]) => {
    setOrderCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, isVeg: item.isVeg }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setOrderCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean) as typeof prev;
    });
  };

  const foodSubtotal = orderCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = foodSubtotal > 0 ? 40 : 0;
  const grandTotal = foodSubtotal + deliveryFee;

  const filteredMenu = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Menu Section */}
        <div className="md:col-span-8 p-4 rounded-2xl bg-space-950/70 border border-emerald-500/20 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Urban Feast • Menu Simulator</span>
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(['All', 'Biryani', 'Pizza', 'Healthy'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    selectedCategory === cat ? 'bg-emerald-500 text-space-950 font-bold' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredMenu.map(dish => (
              <div key={dish.id} className="p-3.5 rounded-xl bg-space-900 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`w-3.5 h-3.5 border flex items-center justify-center rounded-sm ${dish.isVeg ? 'border-emerald-400 text-emerald-400' : 'border-red-500 text-red-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dish.isVeg ? 'bg-emerald-400' : 'bg-red-500'}`} />
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">★ {dish.rating}</span>
                  </div>
                  <h5 className="text-xs font-semibold text-white mt-1.5">{dish.name}</h5>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{dish.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs font-mono font-bold text-emerald-400">₹{dish.price}</span>
                  <button
                    onClick={() => addToFoodCart(dish)}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-space-950 border border-emerald-500/30 text-[11px] font-semibold cursor-pointer transition-colors"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Cart & Delivery Tracker */}
        <div className="md:col-span-4 p-4 rounded-2xl bg-space-950/90 border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                <Bike className="w-3.5 h-3.5 text-emerald-400" />
                Delivery Cart ({orderCart.reduce((sum, i) => sum + i.qty, 0)})
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">25-30 Mins</span>
            </div>

            <div className="space-y-2 mt-3 max-h-40 overflow-y-auto pr-1">
              {orderCart.length === 0 ? (
                <div className="text-center py-6 text-slate-500 space-y-1">
                  <p className="text-xs">Your meal cart is empty.</p>
                  <p className="text-[10px]">Add dishes from the menu to test ordering.</p>
                </div>
              ) : (
                orderCart.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-xs bg-white/[0.02] p-2 rounded-lg">
                    <div className="truncate pr-2">
                      <p className="truncate text-slate-200 text-[11px] font-medium">{item.name}</p>
                      <span className="text-[10px] text-slate-400 font-mono">₹{item.price * item.qty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-space-900 px-1.5 py-0.5 rounded border border-white/10">
                      <button onClick={() => updateQty(item.id, -1)} className="text-slate-400 hover:text-white p-0.5 cursor-pointer">
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-[11px] font-mono px-1">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="text-slate-400 hover:text-white p-0.5 cursor-pointer">
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pricing & Checkout */}
          <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Delivery Partner:</span>
              <span className="text-slate-300">Live Express • ₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between text-white font-bold text-sm">
              <span>Total Payable:</span>
              <span className="text-emerald-400">₹{grandTotal}</span>
            </div>

            {orderStage === 'confirmed' ? (
              <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-center space-y-1 animate-fadeIn">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Order Dispatched!</span>
                </div>
                <p className="text-[10px] text-slate-400 font-sans">Rider is en route with your fresh order.</p>
              </div>
            ) : (
              <button
                disabled={orderCart.length === 0}
                onClick={() => setOrderStage('confirmed')}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-space-950 cursor-pointer transition-colors"
              >
                Place Delivery Order
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

/* --- 4. ONLINE MOVIE TICKET BOOKING INTERACTIVE DEMO --- */
function MovieTicketDemo() {
  const [selectedMovie, setSelectedMovie] = useState('Cyberpunk 2099');
  const [selectedTime, setSelectedTime] = useState('07:30 PM');
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['C4', 'C5']);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const movies = [
    { title: 'Cyberpunk 2099', genre: 'Sci-Fi / Action', rating: '9.4', duration: '2h 35m' },
    { title: 'Interstellar: IMAX', genre: 'Sci-Fi / Drama', rating: '9.6', duration: '2h 49m' },
    { title: 'Dune: Prophecy', genre: 'Adventure / Epic', rating: '9.1', duration: '2h 40m' },
  ];

  // 4 rows x 8 columns seating grid
  const rows = ['A', 'B', 'C', 'D'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];
  const reservedSeats = ['A3', 'A4', 'B1', 'B2', 'D7', 'D8'];

  const toggleSeat = (seatId: string) => {
    if (reservedSeats.includes(seatId)) return;
    setBookingConfirmed(false);
    setSelectedSeats(prev =>
      prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
    );
  };

  const seatPrice = 250;
  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="space-y-4">
      <div className="p-4 sm:p-5 rounded-2xl bg-space-950/80 border border-cyan-500/30 space-y-5">
        
        {/* Movie & Showtime Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="flex gap-2">
                {movies.map(m => (
                  <button
                    key={m.title}
                    onClick={() => { setSelectedMovie(m.title); setBookingConfirmed(false); }}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                      selectedMovie === m.title ? 'bg-cyan-500 text-space-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {['04:15 PM', '07:30 PM', '10:45 PM'].map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                  selectedTime === time ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Cinema Curved Screen Representation */}
        <div className="space-y-2 text-center pt-1">
          <div className="w-3/4 mx-auto h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-glow-cyan" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
            CINEMA AUDITORIUM SCREEN • 4K LASER
          </span>
        </div>

        {/* Interactive 2D Seating Layout */}
        <div className="flex flex-col items-center gap-2 py-2">
          {rows.map(row => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-4 text-xs font-mono text-slate-500">{row}</span>
              <div className="flex gap-1.5 sm:gap-2">
                {cols.map(col => {
                  const seatId = `${row}${col}`;
                  const isReserved = reservedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <button
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      disabled={isReserved}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[10px] font-mono flex items-center justify-center transition-all cursor-pointer ${
                        isReserved
                          ? 'bg-space-900 border border-white/5 text-slate-600 cursor-not-allowed opacity-50'
                          : isSelected
                          ? 'bg-emerald-500 text-space-950 font-bold shadow-glow-sm scale-105'
                          : 'bg-white/5 hover:bg-cyan-500/20 border border-white/10 text-slate-300 hover:border-cyan-400'
                      }`}
                      title={`Seat ${seatId} (${isReserved ? 'Reserved' : '₹' + seatPrice})`}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Seat Status Legend */}
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-white/5 border border-white/10" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-500 shadow-glow-sm" />
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-space-900 border border-white/5 opacity-50" />
              <span>Reserved</span>
            </div>
          </div>
        </div>

        {/* Booking Summary Card */}
        <div className="p-3.5 rounded-xl bg-space-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-400 font-mono block text-[11px]">Selected Seats:</span>
            <div className="flex items-center gap-1.5 font-mono text-white font-bold mt-0.5">
              <Ticket className="w-3.5 h-3.5 text-cyan-400" />
              <span>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</span>
              <span className="text-slate-400 font-normal">({selectedSeats.length} Tickets)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <span className="text-[11px] font-mono text-slate-400">Total Price</span>
              <p className="text-base font-display font-black text-cyan-300">₹{totalPrice}</p>
            </div>

            <button
              disabled={selectedSeats.length === 0}
              onClick={() => setBookingConfirmed(true)}
              className="py-2 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-space-950 font-bold cursor-pointer transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </div>

        {/* Digital Ticket Pass Modal Preview */}
        {bookingConfirmed && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 border border-emerald-500/40 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white font-display">Digital Cinema Boarding Pass</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">PASS #TK-8492</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
              <div>
                <span className="text-[10px] text-slate-400 font-mono">Movie:</span>
                <p className="text-white font-medium truncate">{selectedMovie}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono">Time & Hall:</span>
                <p className="text-cyan-300 font-medium">{selectedTime} • Screen 2</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono">Seats:</span>
                <p className="text-emerald-400 font-mono font-bold">{selectedSeats.join(', ')}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono">Status:</span>
                <p className="text-slate-200">Confirmed (Demo)</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
