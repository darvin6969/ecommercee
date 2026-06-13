/*
  InnovVentas E-commerce demo
  Cambia este valor a false si vas a pegar el código oficial de Copilot Studio en index.html.
*/
const USE_LOCAL_CHATBOT = true;

const products = [
  { id: 200, name: 'Laptop HP 15-fd0253la Intel Core i5 8GB 512GB', category: 'Laptops', brand: 'HP', price: 2299, stock: 10, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['laptop', 'falabella'], description: 'Laptop HP Intel Core i5 8GB RAM 512GB SSD + Mochila y Mouse.', specs: [] },
  { id: 201, name: 'Laptop HP 15-fd0350la Intel Core 5 8GB 512GB', category: 'Laptops', brand: 'HP', price: 2099, stock: 10, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['laptop', 'falabella'], description: 'Laptop HP Intel Core 5 8GB RAM 512GB SSD Windows 11.', specs: [] },
  { id: 202, name: 'Laptop ASUS Vivobook 15 Intel Core 5 8GB 512GB', category: 'Laptops', brand: 'ASUS', price: 2299, stock: 10, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['laptop', 'falabella'], description: 'Laptop ASUS Vivobook 15 Intel Core 5 8GB 512GB SSD FHD.', specs: [] },
  { id: 203, name: 'Laptop LENOVO IdeaPad Slim 3i Core i7 16GB 512GB', category: 'Laptops', brand: 'LENOVO', price: 2999, stock: 10, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['laptop', 'falabella'], description: 'Laptop IdeaPad Slim 3i Core i7 16GB RAM 512GB SSD Táctil.', specs: [] },
  { id: 204, name: 'Laptop HP Gaming OMEN Intel Core i5 RTX 3050', category: 'Laptops', brand: 'HP', price: 6399, stock: 10, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['laptop', 'falabella'], description: 'Laptop Gaming OMEN Intel Core i5 16GB RAM RTX 3050.', specs: [] },
  { id: 1, name: 'Laptop ProBook Ryzen 5', category: 'Laptops', brand: 'TechNova', price: 2499, stock: 8, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['estudio', 'trabajo'], description: 'Laptop rápida para estudio, oficina y multitarea.', specs: ['Ryzen 5', '16GB RAM', '512GB SSD', 'Pantalla 15.6” Full HD'] },
  { id: 2, name: 'Laptop Gamer Nitro X', category: 'Laptops', brand: 'GameMax', price: 4299, stock: 4, rating: 4.9, icon: '<img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['gaming', 'diseño'], description: 'Equipo potente para videojuegos, edición y diseño.', specs: ['Intel i7', '16GB RAM', 'RTX 4060', '1TB SSD'] },
  { id: 3, name: 'Smartphone Galaxy A55', category: 'Celulares', brand: 'Samsung', price: 1599, stock: 12, rating: 4.7, icon: '<img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['uso básico', 'trabajo'], description: 'Celular equilibrado con buena cámara y batería.', specs: ['128GB', '8GB RAM', 'Cámara 50MP', 'Batería 5000mAh'] },
  { id: 4, name: 'Smartphone Redmi Note Pro', category: 'Celulares', brand: 'Xiaomi', price: 1299, stock: 15, rating: 4.6, icon: '<img src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['uso básico', 'estudio'], description: 'Buen rendimiento a precio accesible.', specs: ['256GB', '8GB RAM', 'Carga rápida', 'Pantalla AMOLED'] },
  { id: 5, name: 'Tablet Pad Air 11', category: 'Tablets', brand: 'Xiaomi', price: 1099, stock: 6, rating: 4.5, icon: '<img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['estudio', 'diseño'], description: 'Tablet ligera para clases, lectura y dibujo básico.', specs: ['Pantalla 11”', '128GB', 'WiFi', 'Batería de larga duración'] },
  { id: 6, name: 'Audífonos Bluetooth Pro', category: 'Audio', brand: 'SoundBeat', price: 189, stock: 25, rating: 4.4, icon: '<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['accesorios', 'uso básico'], description: 'Audio inalámbrico con cancelación de ruido.', specs: ['Bluetooth 5.3', 'Cancelación de ruido', '24h batería', 'Micrófono integrado'] },
  { id: 7, name: 'Parlante Mini Bass', category: 'Audio', brand: 'SoundBeat', price: 149, stock: 20, rating: 4.3, icon: '<img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['uso básico'], description: 'Parlante compacto con buen volumen.', specs: ['Bluetooth', 'Resistente al agua', '10h batería', 'USB-C'] },
  { id: 8, name: 'Mouse Inalámbrico Ergo', category: 'Accesorios', brand: 'OfficePlus', price: 69, stock: 30, rating: 4.2, icon: '<img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['trabajo', 'estudio'], description: 'Mouse ergonómico para largas jornadas.', specs: ['2.4GHz', 'Batería AA', 'DPI ajustable', 'Diseño ergonómico'] },
  { id: 9, name: 'Teclado Mecánico RGB', category: 'Accesorios', brand: 'GameMax', price: 219, stock: 9, rating: 4.8, icon: '<img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['gaming', 'trabajo'], description: 'Teclado mecánico con iluminación RGB.', specs: ['Switch azul', 'RGB', 'Anti-ghosting', 'Cable USB-C'] },
  { id: 10, name: 'Impresora Multifuncional WiFi', category: 'Impresoras', brand: 'PrintLab', price: 699, stock: 5, rating: 4.5, icon: '<img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['trabajo', 'estudio'], description: 'Imprime, copia y escanea con conexión inalámbrica.', specs: ['WiFi', 'Escáner', 'Sistema continuo', 'Impresión a color'] },
  { id: 11, name: 'Monitor 24 Full HD', category: 'Accesorios', brand: 'ViewPro', price: 599, stock: 7, rating: 4.6, icon: '<img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['trabajo', 'gaming'], description: 'Monitor nítido para oficina o entretenimiento.', specs: ['24 pulgadas', '75Hz', 'HDMI', 'Panel IPS'] },
  { id: 12, name: 'Cámara Web Full HD', category: 'Accesorios', brand: 'OfficePlus', price: 129, stock: 18, rating: 4.1, icon: '<img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">', tags: ['trabajo', 'estudio'], description: 'Ideal para clases virtuales y reuniones.', specs: ['1080p', 'Micrófono', 'USB', 'Clip universal'] },
];

const state = {
  cart: JSON.parse(localStorage.getItem('iv_cart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('iv_favorites') || '[]'),
  coupon: localStorage.getItem('iv_coupon') || '',
  orders: JSON.parse(localStorage.getItem('iv_orders') || '[]'),
  metrics: JSON.parse(localStorage.getItem('iv_metrics') || '{}'),
};

const defaultMetrics = {
  visits: 0,
  productViews: 0,
  addToCart: 0,
  checkouts: 0,
  orders: 0,
  chatbotOpens: 0,
  chatbotMessages: 0,
  supportRequests: 0,
  cartAbandonment: 0,
};
state.metrics = { ...defaultMetrics, ...state.metrics };
state.metrics.visits += 1;
saveMetrics();

// Theme Initialization
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggleBtn i');
  if (icon) {
    icon.className = theme === 'light' ? 'ph ph-moon' : 'ph ph-sun';
  }
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const productGrid = $('#productGrid');
const categoryChips = $('#categoryChips');
const searchInput = $('#searchInput');
const categoryFilter = $('#categoryFilter');
const sortFilter = $('#sortFilter');
const cartDrawer = $('#cartDrawer');
const overlay = $('#overlay');
const cartItems = $('#cartItems');
const cartSummary = $('#cartSummary');
const cartCount = $('#cartCount');
const favCount = $('#favCount');
const couponInput = $('#couponInput');
const checkoutSummary = $('#checkoutSummary');
const chatPanel = $('#chatPanel');
const chatMessages = $('#chatMessages');
const quickActions = $('#quickActions');

const formatMoney = (value) => `S/ ${value.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function saveCart() { localStorage.setItem('iv_cart', JSON.stringify(state.cart)); }
function saveFavorites() { localStorage.setItem('iv_favorites', JSON.stringify(state.favorites)); }
function saveOrders() { localStorage.setItem('iv_orders', JSON.stringify(state.orders)); }
function saveMetrics() { localStorage.setItem('iv_metrics', JSON.stringify(state.metrics)); }
function saveCoupon() { localStorage.setItem('iv_coupon', state.coupon); }

function getCartDetails() {
  const items = state.cart.map(item => ({ ...item, product: products.find(p => p.id === item.id) })).filter(i => i.product);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const discount = state.coupon === 'INNOV10' && subtotal >= 500 ? subtotal * 0.10 : 0;
  const shipping = subtotal === 0 ? 0 : subtotal >= 1500 ? 0 : 18;
  const total = subtotal - discount + shipping;
  return { items, subtotal, discount, shipping, total };
}

function stockClass(stock) {
  if (stock <= 0) return 'stock-out';
  if (stock <= 5) return 'stock-low';
  return '';
}

function renderChips() {
  const categories = ['all', ...new Set(products.map(p => p.category))];
  categoryChips.innerHTML = categories.map(category => `
    <button class="${categoryFilter.value === category ? 'active' : ''}" data-category="${category}">${category === 'all' ? 'Todo' : category}</button>
  `).join('');
}

function getFilteredProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  let list = products.filter(product => {
    const matchesTerm = [product.name, product.category, product.brand, product.description, ...product.tags].join(' ').toLowerCase().includes(term);
    const matchesCategory = category === 'all' || product.category === category;
    return matchesTerm && matchesCategory;
  });

  if (sortFilter.value === 'priceAsc') list.sort((a, b) => a.price - b.price);
  if (sortFilter.value === 'priceDesc') list.sort((a, b) => b.price - a.price);
  if (sortFilter.value === 'rating') list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  renderChips();
  const list = getFilteredProducts();
  if (!list.length) {
    productGrid.innerHTML = '<div class="empty-state">No encontramos productos con ese filtro.</div>';
    return;
  }
  productGrid.innerHTML = list.map(product => {
    const fav = state.favorites.includes(product.id) ? '<i class="ph-fill ph-heart" style="color:var(--danger)"></i>' : '<i class="ph ph-heart"></i>';
    const disabled = product.stock <= 0 ? 'disabled' : '';
    return `
      <article class="product-card" data-view="${product.id}" style="cursor:pointer">
        <div class="visual">
          <span class="stock-pill ${stockClass(product.stock)}">${product.stock > 0 ? `${product.stock} en stock` : 'Sin stock'}</span>
          <button class="fav-btn" data-fav="${product.id}" title="Agregar a favoritos">${fav}</button>
          <span>${product.icon}</span>
        </div>
        <div class="card-body">
          <small class="muted">${product.category} · ${product.brand}</small>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price-row">
            <span class="price">${formatMoney(product.price)}</span>
            <span class="rating"><i class="ph-fill ph-star"></i> ${product.rating}</span>
          </div>
          <div class="card-actions" style="margin-top:20px;display:flex;gap:12px;">
            <button class="primary-btn" data-add="${product.id}" ${product.stock <= 0 ? 'disabled' : ''} style="flex:1;">Agregar al carrito</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.product-card').forEach(card => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }
}

function flyToCart(button) {
  const card = button.closest('.product-card') || button.closest('.product-detail');
  if (!card) return;
  const visualEl = card.querySelector('.visual span') || card.querySelector('.visual');
  if (!visualEl) return;
  
  const imgBox = visualEl.getBoundingClientRect();
  const cartIcon = $('#openCartBtn').getBoundingClientRect();
  
  const ghost = visualEl.cloneNode(true);
  ghost.style.position = 'fixed';
  ghost.style.left = `${imgBox.left}px`;
  ghost.style.top = `${imgBox.top}px`;
  ghost.style.width = `${imgBox.width}px`;
  ghost.style.height = `${imgBox.height}px`;
  ghost.style.zIndex = '9999';
  ghost.style.pointerEvents = 'none';
  ghost.style.margin = '0';
  document.body.appendChild(ghost);

  if (window.gsap) {
    gsap.to(ghost, {
      x: cartIcon.left + cartIcon.width/2 - (imgBox.left + imgBox.width/2),
      y: cartIcon.top + cartIcon.height/2 - (imgBox.top + imgBox.height/2),
      scale: 0.1,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        ghost.remove();
        gsap.fromTo('#openCartBtn', { scale: 1.2 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
      }
    });
  } else {
    ghost.remove();
  }
}

function updateCounters() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
  favCount.textContent = state.favorites.length;
}

function renderCart() {
  const details = getCartDetails();
  if (!details.items.length) {
    cartItems.innerHTML = '<div class="empty-state">Tu carrito está vacío.</div>';
  } else {
    cartItems.innerHTML = details.items.map(item => `
      <article class="cart-item">
        <div class="cart-item-visual">${item.product.icon}</div>
        <div>
          <h4>${item.product.name}</h4>
          <small>${formatMoney(item.product.price)} c/u</small>
          <div class="qty-row">
            <button data-dec="${item.id}">−</button>
            <strong>${item.qty}</strong>
            <button data-inc="${item.id}">+</button>
            <button data-remove="${item.id}" title="Eliminar"><i class="ph ph-trash"></i></button>
          </div>
        </div>
      </article>
    `).join('');
  }
  cartSummary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(details.subtotal)}</strong></div>
    <div class="summary-row"><span>Descuento</span><strong>-${formatMoney(details.discount)}</strong></div>
    <div class="summary-row"><span>Envío</span><strong>${details.shipping === 0 ? 'Gratis' : formatMoney(details.shipping)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${formatMoney(details.total)}</strong></div>
  `;
  couponInput.value = state.coupon;
  updateCounters();
}

function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id);
  if (!product || product.stock <= 0) return;
  const existing = state.cart.find(item => item.id === id);
  if (existing) existing.qty = Math.min(existing.qty + qty, product.stock);
  else state.cart.push({ id, qty });
  state.metrics.addToCart += 1;
  saveMetrics(); saveCart(); renderCart();
  showToast(`${product.name} agregado al carrito`);
}

function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('show');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

function openProductPage(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  state.metrics.productViews += 1;
  saveMetrics();
  
  const originalPrice = product.price * 1.35;
  const internetPrice = product.price * 1.05;
  const cmrPrice = product.price;
  
  // Specs dinámicos a 2 columnas
  const specs = product.specs && product.specs.length ? product.specs : ['Procesador de alto rendimiento', '8GB RAM', 'Diseño ultraligero', 'Batería larga duración'];
  const half = Math.ceil(specs.length / 2);
  const col1 = specs.slice(0, half).map(s => `<li>• <span>${s}</span></li>`).join('');
  const col2 = specs.slice(half).map(s => `<li>• <span>${s}</span></li>`).join('');
  
  // Favorito activo
  const isFav = state.favorites.includes(product.id);
  const favIcon = isFav ? '<i class="ph-fill ph-heart" style="color:#d10024"></i>' : '<i class="ph ph-heart"></i>';

  $('#productPageContent').innerHTML = `
    <div class="fala-page">
      <div class="fala-breadcrumbs">
        Home > ${product.category} > ${product.brand}
      </div>
      <div class="fala-layout">
        <div class="fala-gallery">
          <div class="fala-thumbnails">
            <div class="fala-thumb active" onclick="changeFalaMainImg(this, '${product.id}')">${product.icon}</div>
            <div class="fala-thumb" onclick="changeFalaMainImg(this, '${product.id}')">${product.icon}</div>
            <div class="fala-thumb" onclick="changeFalaMainImg(this, '${product.id}')">${product.icon}</div>
          </div>
          <div class="fala-main-image" id="falaMainImgContainer">
            ${product.icon}
          </div>
        </div>
        
        <div class="fala-info">
          <div class="fala-brand">${product.brand} | ${product.category.slice(0, -1)} ${product.name}</div>
          <div class="fala-vendor">Vendido por <span>InnovVentas</span> <div class="fala-rating"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-half ph-star"></i> ${product.rating} (19)</div></div>
          
          <div class="fala-prices">
            <div class="fala-price-cmr">
              <span class="cmr-icon">CMR</span>
              <span class="price-val">${formatMoney(cmrPrice)}</span>
              <span class="fala-discount">-25%</span>
            </div>
            <div class="fala-price-internet">
              ${formatMoney(internetPrice)}
            </div>
            <div class="fala-price-normal">
              ${formatMoney(originalPrice)}
            </div>
          </div>
          
          <div class="fala-cuotas-badge">10 y 18 CUOTAS SIN INTERÉS</div>
          
          <div class="fala-add-to-cart">
            <div class="fala-qty">
              <button onclick="this.nextElementSibling.value = Math.max(1, parseInt(this.nextElementSibling.value) - 1)">-</button>
              <input type="number" id="detailQty" value="1" min="1" max="${product.stock}">
              <button onclick="this.previousElementSibling.value = Math.min(${product.stock}, parseInt(this.previousElementSibling.value) + 1)">+</button>
            </div>
            <button class="fala-btn" onclick="addToCart(${product.id}, parseInt(document.getElementById('detailQty').value)); openCart()" ${product.stock <= 0 ? 'disabled' : ''}>
              Agregar al Carro
            </button>
            <button class="fala-fav" id="detailFavBtn" onclick="toggleFavoriteDetail(${product.id})">${favIcon}</button>
          </div>
          
          <div class="fala-specs">
            <ul>${col1}</ul>
            <ul>${col2}</ul>
          </div>
          <a href="#" class="fala-more-specs">Ver más especificaciones</a>
        </div>
      </div>
    </div>
  `;
  
  $('#mainView').style.display = 'none';
  $('#productView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setupZoom();
}

function setupZoom() {
  const container = document.getElementById('falaMainImgContainer');
  if (!container) return;
  
  container.addEventListener('mousemove', (e) => {
    const img = container.querySelector('img');
    if (!img) return;
    
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = 'scale(2.2)';
  });
  
  container.addEventListener('mouseleave', () => {
    const img = container.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
      img.style.transformOrigin = 'center center';
    }
  });
}

function changeFalaMainImg(thumbElem, productId) {
  document.querySelectorAll('.fala-thumb').forEach(el => el.classList.remove('active'));
  thumbElem.classList.add('active');
  const imgHtml = thumbElem.innerHTML;
  document.getElementById('falaMainImgContainer').innerHTML = imgHtml;
  // Pequeño efecto visual
  const img = document.querySelector('#falaMainImgContainer img');
  if(img) {
      img.style.opacity = 0;
      setTimeout(() => img.style.opacity = 1, 50);
      img.style.transition = 'opacity 0.2s';
  }
}

function toggleFavoriteDetail(id) {
  toggleFavorite(id);
  const isFav = state.favorites.includes(id);
  const btn = document.getElementById('detailFavBtn');
  if (btn) {
      btn.innerHTML = isFav ? '<i class="ph-fill ph-heart" style="color:#d10024"></i>' : '<i class="ph ph-heart"></i>';
  }
}

function closeProductPage() {
  $('#productView').style.display = 'none';
  $('#mainView').style.display = 'block';
  // Vuelve suavemente a la sección de catálogo
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter(fav => fav !== id);
  else state.favorites.push(id);
  saveFavorites(); renderProducts(); updateCounters();
}

function applyCoupon() {
  const code = couponInput.value.trim().toUpperCase();
  const details = getCartDetails();
  if (code === 'INNOV10' && details.subtotal >= 500) {
    state.coupon = 'INNOV10';
    showToast('Cupón aplicado correctamente');
  } else if (code === 'INNOV10') {
    state.coupon = '';
    showToast('El cupón requiere compra mínima de S/ 500');
  } else {
    state.coupon = '';
    showToast('Cupón no válido');
  }
  saveCoupon(); renderCart();
}

function openCheckout() {
  const details = getCartDetails();
  if (!details.items.length) return showToast('Agrega productos antes de comprar');
  state.metrics.checkouts += 1;
  saveMetrics();
  checkoutSummary.innerHTML = `
    <strong>Resumen del pedido</strong>
    <p>${details.items.length} tipo(s) de producto · Total: <strong>${formatMoney(details.total)}</strong></p>
  `;
  $('#checkoutModal').showModal();
}

function createOrder(formData) {
  const details = getCartDetails();
  const orderId = `IV-${Math.floor(100000 + Math.random() * 900000)}`;
  const order = {
    id: orderId,
    date: new Date().toLocaleString('es-PE'),
    status: 'Pedido recibido',
    customer: Object.fromEntries(formData.entries()),
    items: details.items.map(item => ({ id: item.id, name: item.product.name, qty: item.qty, price: item.product.price })),
    total: details.total,
  };
  state.orders.unshift(order);
  state.cart = [];
  state.coupon = '';
  state.metrics.orders += 1;
  saveOrders(); saveCart(); saveCoupon(); saveMetrics();
  renderCart(); renderProducts();
  $('#checkoutModal').close(); closeCart();
  showToast(`Pedido confirmado: ${orderId}`);
  setTimeout(() => alert(`Compra registrada correctamente\nCódigo de pedido: ${orderId}\nGuarda este código para el seguimiento.`), 200);
}

function trackOrder(code) {
  const order = state.orders.find(o => o.id.toLowerCase() === code.toLowerCase());
  if (!order) return `<strong>No se encontró el pedido.</strong><p class="muted">Verifica el código o realiza una compra demo para generar uno.</p>`;
  return `<strong>Pedido ${order.id}</strong><p>Estado: <strong>${order.status}</strong></p><p>Fecha: ${order.date}</p><p>Total: ${formatMoney(order.total)}</p>`;
}

function renderMetrics() {
  const details = getCartDetails();
  const estimatedAbandonment = details.items.length ? 1 : 0;
  state.metrics.cartAbandonment = Math.max(state.metrics.cartAbandonment, estimatedAbandonment);
  saveMetrics();
  const metrics = [
    ['Visitas', state.metrics.visits],
    ['Vistas de productos', state.metrics.productViews],
    ['Agregados al carrito', state.metrics.addToCart],
    ['Intentos de checkout', state.metrics.checkouts],
    ['Pedidos generados', state.metrics.orders],
    ['Aperturas del chatbot', state.metrics.chatbotOpens],
    ['Mensajes al chatbot', state.metrics.chatbotMessages],
    ['Solicitudes de soporte', state.metrics.supportRequests],
    ['Carritos activos', state.cart.length],
  ];
  $('#metricsGrid').innerHTML = metrics.map(([label, value]) => `
    <article class="metric-card"><strong>${value}</strong><span>${label}</span></article>
  `).join('');
}

function showToast(message) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

function botReply(text) {
  const msg = text.toLowerCase();
  state.metrics.chatbotMessages += 1;
  
  // Función para detectar coincidencias con tolerancia a errores ortográficos (typos)
  const match = (keywords) => {
    const words = msg.replace(/[^\w\sáéíóúüñ]/g, '').split(/\s+/);
    return keywords.some(kw => {
      if (msg.includes(kw)) return true;
      return words.some(w => {
        if (Math.abs(w.length - kw.length) > 2) return false;
        const limit = kw.length <= 4 ? 1 : 2; // tolerar 1 o 2 letras de error
        return levenshtein(w, kw) <= limit;
      });
    });
  };

  if (match(['asesor', 'humano', 'persona', 'agente', 'hablar'])) {
    state.metrics.supportRequests += 1; saveMetrics();
    return 'Te puedo derivar con un asesor humano. Déjame tu nombre, número de contacto y el motivo de tu consulta, y te contactaremos en breve.';
  }
  if (match(['hola', 'buenas', 'ayuda', 'buenos', 'tardes', 'dias', 'saludos'])) return '¡Hola! Soy el asistente inteligente de InnovVentas. Puedo ayudarte con catálogo de productos, pagos, envíos, garantías, ofertas, seguimiento o soporte técnico. ¿En qué te ayudo hoy?';
  
  if (match(['pago', 'yape', 'plin', 'tarjeta', 'transferencia', 'pagar', 'efectivo', 'cuotas', 'metodos', 'visa', 'mastercard'])) return '💳 Aceptamos pagos con Tarjeta de crédito/débito (Visa, Mastercard), Transferencia, Yape, Plin y pago contra entrega (solo en Lima). También ofrecemos financiamiento de 3 a 6 cuotas sin intereses.';
  if (match(['envio', 'delivery', 'demora', 'provincia', 'lima', 'llega', 'mandar', 'enviar', 'costo'])) return '🚚 Sobre los envíos:\n• Lima: Demora 24 a 48 horas (S/ 15 o GRATIS desde S/ 200).\n• Provincias: De 3 a 5 días hábiles vía Olva Courier o Shalom (costo varía según destino).';
  if (match(['garantia', 'devolucion', 'reembolso', 'falla', 'roto', 'cambio', 'mal'])) return '🛡️ Política de Garantía y Devoluciones:\nTodos los equipos tienen garantía oficial de 12 meses. Aceptamos devoluciones los primeros 7 días por fallas de fábrica. Necesitarás tu boleta o factura.';
  if (match(['stock', 'disponible', 'hay', 'tienen', 'quedan', 'modelo'])) return '📦 Para verificar el stock exacto, dime el nombre del equipo que buscas o navega por nuestro catálogo web. Nuestro inventario se actualiza en tiempo real.';
  if (match(['oferta', 'descuento', 'promo', 'cupon', 'rebaja', 'barato', 'promocion'])) return '🏷️ ¡Aprovecha nuestras ofertas!\nUsa el cupón INNOV10 en el checkout para obtener 10% de descuento en compras mayores a S/ 500. Además, revisa nuestra sección de "Ofertas".';
  if (match(['pedido', 'seguimiento', 'compra', 'rastreo', 'estado', 'donde'])) return '📍 Para rastrear tu pedido, usa la opción "Seguimiento" en el menú principal e ingresa tu código de compra (ej: INV-1234). Si aún no tienes uno, finaliza una compra demo.';
  if (match(['tienda', 'fisica', 'ubicacion', 'direccion', 'local', 'encuentran'])) return '🏪 Somos una tienda online, pero tenemos un Showroom principal en Av. Tecnología 1024, Miraflores, Lima (Atención Lunes a Sábado de 10am a 7pm).';
  if (match(['horario', 'hora', 'atienden', 'abierto'])) return '⏰ Nuestro horario de atención con asesores es de Lunes a Sábado de 9am a 8pm. Sin embargo, la web y compras online funcionan 24/7.';
  if (match(['factura', 'boleta', 'ruc', 'comprobante'])) return '📄 Sí, emitimos Boleta o Factura. Al confirmar tu pedido en el carrito, podrás ingresar tu RUC o DNI y los datos de facturación.';
  
  if (match(['prende', 'funciona', 'soporte', 'carga', 'pantalla', 'bateria', 'lento'])) {
    state.metrics.supportRequests += 1; saveMetrics();
    return '🔧 Soporte Técnico:\n1. Verifica que el equipo esté cargado.\n2. Intenta un reinicio forzado.\nSi el problema persiste, indícame tu número de boleta para derivarte a un técnico.';
  }

  if (match(['laptop', 'celular', 'tablet', 'audifono', 'impresora', 'accesorio', 'iphone', 'samsung', 'hp', 'lenovo', 'asus'])) {
    const term = msg.replace(/[^\w\s]/g, '');
    const found = products.filter(p => {
      const target = (p.name + ' ' + p.category + ' ' + p.brand).toLowerCase();
      return term.split(/\s+/).some(w => w.length > 3 && target.includes(w));
    }).slice(0, 3);
    
    if (found.length) return `💻 Encontré estas opciones en el catálogo:\n${found.map(p => `• ${p.name} - ${formatMoney(p.price)}`).join('\n')}\n¿Te gustaría ver los detalles de alguno?`;
    return 'Contamos con gran variedad de Laptops, Celulares y Tablets. Indícame una marca o tipo de producto para recomendarte opciones.';
  }
  
  if (match(['estudio', 'universidad', 'colegio', 'estudiar'])) return '📚 Para estudiar, recomiendo una Laptop Core i5 o Ryzen 5, con 8GB RAM y SSD (desde S/ 1,899). Revisa nuestras opciones HP o Lenovo en catálogo.';
  if (match(['trabajo', 'oficina', 'programar', 'ingenieria'])) return '💼 Para trabajo profesional, te sugiero una Laptop con 16GB RAM y buena batería. Te recomiendo revisar los modelos de ASUS y Lenovo IdeaPad.';
  if (match(['gaming', 'jugar', 'juegos', 'gamer'])) return '🎮 Para gaming necesitas Tarjeta Gráfica y buena ventilación. Revisa nuestras opciones ASUS ROG o escribe "Gamer" en el buscador.';

  if (match(['gracias', 'chau', 'adios', 'ok', 'vale', 'listo', 'entendido'])) return '¡Gracias a ti por comunicarte con InnovVentas! Estaré por aquí si tienes más consultas. ¡Que tengas un gran día! 👋';
  
  return 'Hmm, no estoy seguro de entender esa consulta. 🤔\n\nPuedo ayudarte con:\n• Catálogo y Stock\n• Envíos y Delivery\n• Pagos y Facturación\n• Ofertas\n• Garantía\n\nO puedes escribir "Asesor" para hablar con un humano.';
}

function addChatMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderQuickActions() {
  const actions = ['Productos', 'Métodos de pago', 'Envíos', 'Garantía', 'Ofertas', 'Soporte', 'Asesor'];
  quickActions.innerHTML = actions.map(action => `<button type="button" data-chat-action="${action}">${action}</button>`).join('');
}

function openChat() {
  if (!USE_LOCAL_CHATBOT) return;
  chatPanel.classList.add('open');
  state.metrics.chatbotOpens += 1;
  saveMetrics();
  if (!chatMessages.children.length) {
    addChatMessage('Hola, soy el asistente virtual de InnovVentas. ¿En qué puedo ayudarte?');
    renderQuickActions();
  }
}

function setupEvents() {
  // Navegación suave sin cambiar la URL (mantiene localhost:5173 limpio)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  searchInput.addEventListener('input', renderProducts);
  categoryFilter.addEventListener('change', renderProducts);
  sortFilter.addEventListener('change', renderProducts);
  categoryChips.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    categoryFilter.value = btn.dataset.category;
    renderProducts();
  });
  productGrid.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add]');
    const view = e.target.closest('[data-view]');
    const fav = e.target.closest('[data-fav]');
    if (add) {
      e.stopPropagation(); // Evitar que se abra la vista si hizo clic en el botón de agregar
      flyToCart(add);
      addToCart(Number(add.dataset.add));
      return;
    }
    if (fav) {
      e.stopPropagation();
      toggleFavorite(Number(fav.dataset.fav));
      return;
    }
    if (view) {
      openProductPage(Number(view.dataset.view));
    }
  });

  $('#backToCatalogBtn').addEventListener('click', closeProductPage);

  $('#themeToggleBtn').addEventListener('click', (e) => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    const toggleTheme = () => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    };

    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(toggleTheme);
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 600,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  });

  $('#openCartBtn').addEventListener('click', openCart);
  $('#closeCartBtn').addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  cartItems.addEventListener('click', (e) => {
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const remove = e.target.closest('[data-remove]');
    if (inc) {
      const item = state.cart.find(i => i.id === Number(inc.dataset.inc));
      const product = products.find(p => p.id === item.id);
      item.qty = Math.min(item.qty + 1, product.stock);
    }
    if (dec) {
      const item = state.cart.find(i => i.id === Number(dec.dataset.dec));
      item.qty -= 1;
      if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== item.id);
    }
    if (remove) state.cart = state.cart.filter(i => i.id !== Number(remove.dataset.remove));
    saveCart(); renderCart();
  });
  $('#couponBtn').addEventListener('click', applyCoupon);
  $('#applyPromoBtn').addEventListener('click', () => { couponInput.value = 'INNOV10'; state.coupon = 'INNOV10'; saveCoupon(); renderCart(); openCart(); showToast('Cupón INNOV10 agregado al carrito'); });
  $('#checkoutBtn').addEventListener('click', openCheckout);
  $('#closeCheckoutModal').addEventListener('click', () => $('#checkoutModal').close());
  $('#checkoutForm').addEventListener('submit', (e) => { e.preventDefault(); createOrder(new FormData(e.target)); e.target.reset(); });

  $('#trackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#trackResult').innerHTML = trackOrder($('#trackInput').value.trim());
  });

  $('#metricsBtn').addEventListener('click', () => { renderMetrics(); $('#metricsModal').showModal(); });
  $('#closeMetricsModal').addEventListener('click', () => $('#metricsModal').close());
  $('#resetMetricsBtn').addEventListener('click', () => { state.metrics = { ...defaultMetrics, visits: 1 }; saveMetrics(); renderMetrics(); showToast('Métricas reiniciadas'); });

  if (!USE_LOCAL_CHATBOT) {
    $('#chatWidget').style.display = 'none';
  } else {
    $('#chatToggle').addEventListener('click', openChat);
    $('#openChatHero').addEventListener('click', openChat);
    $('#closeChatBtn').addEventListener('click', () => chatPanel.classList.remove('open'));
    $('#chatForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const value = $('#chatInput').value.trim();
      if (!value) return;
      addChatMessage(value, 'user');
      $('#chatInput').value = '';
      setTimeout(() => addChatMessage(botReply(value)), 350);
    });
    quickActions.addEventListener('click', (e) => {
      const action = e.target.closest('[data-chat-action]');
      if (!action) return;
      const value = action.dataset.chatAction;
      addChatMessage(value, 'user');
      setTimeout(() => addChatMessage(botReply(value)), 250);
    });

    // Lógica del Micrófono (Web Speech API)
    const micBtn = $('#micBtn');
    const chatInput = $('#chatInput');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition && micBtn) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-PE';
      recognition.continuous = false;
      recognition.interimResults = false;

      micBtn.addEventListener('click', () => {
        micBtn.classList.add('mic-active');
        recognition.start();
      });

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        micBtn.classList.remove('mic-active');
        $('#chatForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      };

      recognition.onerror = (event) => {
        console.error('Error de voz:', event.error);
        micBtn.classList.remove('mic-active');
        showToast('Error al escuchar. Intenta de nuevo.');
      };
      
      recognition.onend = () => {
        micBtn.classList.remove('mic-active');
      };
    } else if (micBtn) {
      micBtn.style.display = 'none'; // Ocultar si el navegador no soporta voz
    }
  }

  $('#favoritesBtn').addEventListener('click', () => {
    if (!state.favorites.length) return showToast('Aún no tienes favoritos');
    categoryFilter.value = 'all'; searchInput.value = '';
    const favProducts = products.filter(p => state.favorites.includes(p.id));
    productGrid.innerHTML = favProducts.map(product => `
      <article class="product-card">
        <div class="visual"><button class="fav-btn" data-fav="${product.id}"><i class="ph-fill ph-heart" style="color:var(--danger)"></i></button><span>${product.icon}</span></div>
        <div class="card-body"><small class="muted">Favorito</small><h3>${product.name}</h3><p>${product.description}</p><div class="price-row"><span class="price">${formatMoney(product.price)}</span><span class="rating"><i class="ph-fill ph-star"></i> ${product.rating}</span></div><div class="card-actions"><button class="outline-btn" data-view="${product.id}">Ver detalles</button><button class="primary-btn" data-add="${product.id}">Agregar</button></div></div>
      </article>`).join('');
    document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
  });
}

renderProducts();
renderCart();
setupEvents();
updateThemeIcon(savedTheme);

// Exponer funciones globales para eventos inline en HTML
window.addToCart = addToCart;
window.openCart = openCart;
window.toggleFavorite = toggleFavorite;
window.changeFalaMainImg = changeFalaMainImg;
window.toggleFavoriteDetail = toggleFavoriteDetail;

// Inicializar animaciones GSAP
if (window.gsap) {
  gsap.from("#hero3dCard", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
  });
  gsap.from(".floating-mini.one", {
    x: -30,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.5)",
    delay: 0.6
  });
  gsap.from(".floating-mini.two", {
    x: 30,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.5)",
    delay: 0.8
  });
}
