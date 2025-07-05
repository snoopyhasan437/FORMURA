export default function HomePage() {
  const products = {
    'Lifting Straps': [
      { name: 'Plain Strap Lasso', image: '/images/plain-strap.jpg' },
      { name: 'Figure 8 Straps', image: '/images/figure-8.jpg' },
      { name: 'Veleco Strap Lasso', image: '/images/veleco.jpg' }
    ],
    'Sleeves': [
      { name: 'Elbow Sleeve', image: '/images/elbow.jpg' },
      { name: 'Knee Sleeve', image: '/images/knee-sleeve.jpg' }
    ],
    'Wraps': [
      { name: 'Wrist Wrap', image: '/images/wrist.jpg' },
      { name: 'Knee Wrap', image: '/images/knee-wrap.jpg' }
    ],
    'Belts': [
      { name: 'Prong Belt Leather Reg', image: '/images/belt-prong.jpg' },
      { name: 'Prong Belt Leather Pro', image: '/images/belt-pro.jpg' },
      { name: 'Lever Belt Leather', image: '/images/belt-lever.jpg' },
      { name: 'Velcro Belt Nylon', image: '/images/belt-velcro.jpg' }
    ]
  };

  return (
    <div className='min-h-screen bg-black text-white font-sans'>
      <header className='flex justify-between items-center p-6 border-b border-white/10'>
        <h1 className='text-3xl font-bold tracking-wide text-[#39ff14]'>FORMURA</h1>
        <div className='flex gap-4'>
          <button className='text-white hover:text-[#39ff14]'>Shop</button>
          <button className='text-white hover:text-[#39ff14]'>About</button>
          <button className='text-white hover:text-[#39ff14]'>Contact</button>
        </div>
      </header>

      <section className='text-center py-16 bg-gradient-to-b from-black to-neutral-900'>
        <h2 className='text-5xl font-bold tracking-tight text-[#39ff14] mb-4'>Unleash Strength with FORMURA</h2>
        <p className='text-white/70 max-w-xl mx-auto mb-6'>Premium lifting gear designed for real performance. Built to support you through every rep.</p>
        <button className='bg-[#39ff14] text-black px-8 py-4 text-lg font-semibold'>Shop Now</button>
      </section>

      <section className='p-10 grid gap-12'>
        {Object.entries(products).map(([category, items]) => (
          <div key={category}>
            <h3 className='text-2xl font-semibold text-[#39ff14] mb-4'>{category}</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {items.map((item) => (
                <div key={item.name} className='bg-white text-black rounded-lg p-4 shadow'>
                  <img src={item.image} alt={item.name} className='w-full h-48 object-cover rounded mb-4 bg-gray-200' />
                  <h4 className='font-semibold text-lg mb-2'>{item.name}</h4>
                  <button className='bg-black text-[#39ff14] px-4 py-2 w-full mt-2 rounded'>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className='p-6 text-center text-white/50 text-sm border-t border-white/10'>
        © 2025 FORMURA. All rights reserved.
      </footer>
    </div>
  );
}
