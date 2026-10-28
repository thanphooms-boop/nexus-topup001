import React, { useState } from 'react';

// Custom SVG Icons สำหรับเกมต่าง ๆ
const GameLogos = {
  rov: (
    <div className="w-full h-full bg-gradient-to-br from-amber-950 via-yellow-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
        <svg className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 4v12M8 9l8 6M16 9l-8 6" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-yellow-400 mt-2 z-10 drop-shadow-md">ARENA OF VALOR</span>
    </div>
  ),
  valorant: (
    <div className="w-full h-full bg-gradient-to-br from-rose-950 via-red-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
        <svg className="w-10 h-10 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 30 L45 70 H60 L40 30 H25 Z" fill="currentColor" />
          <path d="M75 30 L57 70 H48 L66 30 H75 Z" fill="#ECE8E1" />
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-rose-300 mt-2 z-10 drop-shadow-md">VALORANT</span>
    </div>
  ),
  roblox: (
    <div className="w-full h-full bg-gradient-to-br from-sky-950 via-blue-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
        <svg className="w-10 h-10 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="26" y="26" width="48" height="48" rx="8" fill="currentColor" transform="rotate(-15 50 50)"/>
          <rect x="42" y="42" width="16" height="16" rx="3" fill="#0F172A" transform="rotate(-15 50 50)"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-sky-300 mt-2 z-10 drop-shadow-md">ROBLOX</span>
    </div>
  ),
  genshin: (
    <div className="w-full h-full bg-gradient-to-br from-purple-950 via-indigo-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
        <svg className="w-10 h-10 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15 C50 35 35 50 15 50 C35 50 50 65 50 85 C50 65 65 50 85 50 C65 50 50 35 50 15 Z" fill="currentColor"/>
          <circle cx="50" cy="50" r="10" stroke="#FDE047" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-purple-300 mt-2 z-10 drop-shadow-md">GENSHIN IMPACT</span>
    </div>
  )
};

const gamesData = [
  { 
    id: 0, 
    name: 'RoV (Realm of Valor)', 
    category: 'mobile', 
    iconKey: 'rov',
    currency: 'คูปอง (Vouchers)', 
    idLabel: 'OpenID ของผู้เล่น (Garena / ROV)',
    idPlaceholder: 'กรอก OpenID 32 ตัวอักษร เช่น 4b89f2a17c09...',
    helpText: 'วิธีดู OpenID: เข้าเกม RoV -> ไปที่การตั้งค่า -> ทั่วไป -> คัดลอก OpenID',
    packages: [
      { id: 'rov1', name: '35 คูปอง', price: 35 }, 
      { id: 'rov2', name: '175 คูปอง', price: 170 }, 
      { id: 'rov3', name: '350 คูปอง', price: 340 }, 
      { id: 'rov4', name: '875 คูปอง', price: 840 },
      { id: 'rov5', name: '1,750 คูปอง', price: 1680 }
    ] 
  },
  { 
    id: 1, 
    name: 'VALORANT', 
    category: 'pc', 
    iconKey: 'valorant',
    currency: 'VP (Valorant Points)', 
    idLabel: 'Riot ID (ชื่อตัวละคร#แท็ก)',
    idPlaceholder: 'เช่น GamerTH#1234',
    helpText: 'ระบุ Riot ID รวมเครื่องหมาย # ให้ถูกต้อง',
    packages: [
      { id: 'v1', name: '475 VP', price: 175 }, 
      { id: 'v2', name: '1,000 VP', price: 350 }, 
      { id: 'v3', name: '2,050 VP', price: 700 }
    ] 
  },
  { 
    id: 2, 
    name: 'Roblox', 
    category: 'mobile', 
    iconKey: 'roblox',
    currency: 'Robux', 
    idLabel: 'Roblox Username',
    idPlaceholder: 'ระบุชื่อผู้ใช้ในเกม Roblox',
    helpText: 'ไม่ต้องกรอกรหัสผ่าน ปลอดภัย 100%',
    packages: [
      { id: 'r1', name: '400 Robux', price: 149 }, 
      { id: 'r2', name: '800 Robux', price: 299 }, 
      { id: 'r3', name: '1,700 Robux', price: 599 }
    ] 
  },
  { 
    id: 3, 
    name: 'Genshin Impact', 
    category: 'mobile', 
    iconKey: 'genshin',
    currency: 'Genesis Crystals', 
    idLabel: 'UID & Server',
    idPlaceholder: 'เช่น 800123456 (Asia)',
    helpText: 'ตรวจสอบ Server ให้ถูกต้องก่อนทำรายการ',
    packages: [
      { id: 'g1', name: '60 Crystals', price: 35 }, 
      { id: 'g2', name: '300 Crystals', price: 169 }, 
      { id: 'g3', name: '980 Crystals', price: 499 }
    ] 
  }
];

export default function App() {
  const [balance, setBalance] = useState(1500.00);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 'NEXUS-884912',
      game: 'RoV (Realm of Valor)',
      pkg: '350 คูปอง',
      uid: 'e98a12004fa921b38',
      price: 340,
      status: 'สำเร็จ',
      time: '11:05:12'
    }
  ]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [playerUid, setPlayerUid] = useState('');
  const [walletAmount, setWalletAmount] = useState(300);
  const [toast, setToast] = useState({ show: false, title: '', desc: '', type: 'success' });

  const showToast = (title, desc, type = 'success') => {
    setToast({ show: true, title, desc, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
  };

  const filteredGames = gamesData.filter(game => {
    const matchCategory = category === 'all' || game.category === category;
    const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleOpenCheckout = (game) => {
    setSelectedGame(game);
    setSelectedPackage(game.packages[0]);
    setPlayerUid('');
    setIsCheckoutOpen(true);
  };

  const handleCheckout = () => {
    if (!playerUid.trim()) {
      showToast("กรุณากรอกข้อมูลไอดี", `ต้องใช้ ${selectedGame.idLabel} เพื่อทำรายการ`, "error");
      return;
    }
    if (balance < selectedPackage.price) {
      showToast("ยอดเงินไม่เพียงพอ", "กรุณาเติมเงินเข้ากระเป๋าเงินก่อนทำรายการซื้อ", "error");
      setIsCheckoutOpen(false);
      setIsWalletOpen(true);
      return;
    }

    setBalance(prev => prev - selectedPackage.price);
    const newOrder = {
      id: 'NEXUS-' + Math.floor(100000 + Math.random() * 900000),
      game: selectedGame.name,
      pkg: selectedPackage.name,
      uid: playerUid,
      price: selectedPackage.price,
      status: 'สำเร็จ',
      time: new Date().toLocaleTimeString('th-TH')
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    setIsCheckoutOpen(false);
    showToast("เติมเงินสำเร็จ!", `ทำรายการเติม ${selectedPackage.name} เรียบร้อยแล้ว`, "success");
  };

  const handleWalletTopup = () => {
    if (walletAmount <= 0) {
      showToast("ยอดเงินไม่ถูกต้อง", "ระบุจำนวนเงินมากกว่า 0 บาท", "error");
      return;
    }
    setBalance(prev => prev + walletAmount);
    setIsWalletOpen(false);
    showToast("เติมเงินเข้ากระเป๋าสำเร็จ", `เพิ่มเครดิตจำนวน ${walletAmount.toLocaleString()} บาท เรียบร้อยแล้ว`, "success");
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen flex flex-col font-sans">
      
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-40 bg-[#070d1f]/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setCategory('all'); setSearchQuery(''); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950">N</div>
            <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">NEXUS-TOPUP</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาเกม..." 
              className="hidden md:block bg-[#0d1631] border border-cyan-900/60 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-cyan-400 text-slate-100"
            />
            <div className="flex items-center bg-[#0d1631] border border-cyan-500/30 rounded-xl px-3 py-1.5">
              <span className="text-xs text-cyan-300 font-extrabold mr-3">{balance.toLocaleString()} ฿</span>
              <button onClick={() => setIsWalletOpen(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-black px-3 py-1.5 rounded-lg shadow-md">+ เติมเงิน</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-[#070d1f] border border-cyan-500/30 mb-10 p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white">เติมเกม <span className="text-yellow-400">RoV คูปอง</span> ราคาถูกที่สุด</h1>
          <p className="text-slate-300 text-sm">รองรับระบบ OpenID ปลอดภัย ไม่ต้องใช้รหัสผ่าน คูปองเข้าไอดีทันที</p>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">🎮 เลือกเกมที่ต้องการเติม</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <div 
              key={game.id} 
              onClick={() => handleOpenCheckout(game)}
              className="bg-[#070e24] border border-cyan-900/40 hover:border-cyan-400 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <div className="h-40">{GameLogos[game.iconKey]}</div>
              <div className="p-4">
                <h3 className="font-bold text-white">{game.name}</h3>
                <span className="text-xs text-cyan-400 mt-2 block">เติมทันที →</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal เติมเกม */}
      {isCheckoutOpen && selectedGame && (
        <div className="fixed inset-0 z-50 bg-[#02050c]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-lg w-full p-6 relative">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 text-slate-400 font-bold">✕</button>
            <h3 className="font-black text-lg text-white mb-4">เติมเงิน: {selectedGame.name}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">{selectedGame.idLabel}</label>
                <input 
                  type="text" 
                  value={playerUid} 
                  onChange={(e) => setPlayerUid(e.target.value)}
                  placeholder={selectedGame.idPlaceholder} 
                  className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-2.5 text-sm text-slate-100" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">เลือกแพ็กเกจ</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {selectedGame.packages.map((pkg) => (
                    <button 
                      key={pkg.id} 
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-3 rounded-xl border text-left ${selectedPackage?.id === pkg.id ? 'border-cyan-400 bg-cyan-950/70 text-cyan-300' : 'border-slate-800 bg-[#030712] text-slate-300'}`}
                    >
                      <div className="font-bold text-xs">{pkg.name}</div>
                      <div className="text-xs font-extrabold text-cyan-400 mt-1">{pkg.price} ฿</div>
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-3 rounded-xl mt-4">
                ยืนยันชำระเงิน ({selectedPackage?.price} ฿)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#070e24] border border-cyan-500 px-5 py-3 rounded-2xl shadow-lg">
          <p className="text-xs font-black text-white">{toast.title}</p>
          <p className="text-xs text-slate-300">{toast.desc}</p>
        </div>
      )}
    </div>
  );
}
