(function () {
  const API = window.AITD_API_BASE || '/api';

  async function loadPlacements() {
    const container = document.getElementById('placementsContainer');
    if (!container) return;
    try {
      const res = await fetch(`${API}/content/placements`);
      const data = await res.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) {
        container.innerHTML = '<p style="padding:20px;color:#6b7280">No placements added yet.</p>';
        return;
      }
      container.innerHTML = items.map(item => {
        const img = item.imageUrl
          ? `<img src="${item.imageUrl}" alt="${item.title}" fetchpriority="high" style="width:100%;height:220px;object-fit:cover;border-radius:12px 12px 0 0">`
          : `<div style="width:100%;height:220px;background:#f3f4f6;border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:13px">No photo</div>`;
        const company = item.meta?.company || '';
        const specialization = item.meta?.specialization || '';
        const batch = item.meta?.batch || '';
        return `<div class="masterBox">
          ${img}
          <div class="opprName flexbox">${item.title}</div>
          <hr class="lineSpace">
          <div class="opprDesignation">
            <div class="font-12 font-regular font-black1">${item.subtitle || ''}${company ? ', <span class="font-bold">' + company + '</span>' : ''}</div>
          </div>
          ${specialization ? `<div class="eventTag mt10 font-12 font-regular font-black5">Specialization: <strong class="font-semibold font-black1">${specialization}${batch ? ' ' + batch : ''}</strong></div>` : ''}
        </div>`;
      }).join('');
    } catch (e) {
      console.error('AITD: failed to load placements', e);
    }
  }

  async function loadTestimonials() {
    const section = document.getElementById('testimonials');
    if (!section) return;
    const wrapper = section.querySelector('.swiper-wrapper');
    if (!wrapper) return;
    try {
      const res = await fetch(`${API}/content/testimonials`);
      const data = await res.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) return;
      wrapper.innerHTML = items.map(item => {
        const img = item.imageUrl
          ? `<img src="${item.imageUrl}" alt="${item.title}" style="width:56px;height:56px;border-radius:50%;object-fit:cover">`
          : `<div style="width:56px;height:56px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;color:#9ca3af">👤</div>`;
        return `<div class="swiper-slide">
          <div class="testimonialCard" style="padding:24px;border-radius:16px;border:1px solid #e5e7eb;background:#fff">
            <p style="font-size:14px;color:#374151;margin:0 0 16px;line-height:1.6">"${item.description || ''}"</p>
            <div style="display:flex;align-items:center;gap:12px">
              ${img}
              <div>
                <p style="margin:0;font-weight:600;font-size:14px">${item.title}</p>
                <p style="margin:0;font-size:12px;color:#6b7280">${item.subtitle || ''}</p>
              </div>
            </div>
          </div>
        </div>`;
      }).join('');
    } catch (e) {
      console.error('AITD: failed to load testimonials', e);
    }
  }

  function init() {
    loadPlacements();
    loadTestimonials();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
