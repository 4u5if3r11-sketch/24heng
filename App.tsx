import React, { useState, useEffect } from 'react';
import { useAnimatedValue } from './hooks/useAnimatedValue';
import { Withdrawal, Bank, WithdrawalStatus } from './types';
import { generateNewWithdrawal } from './utils/helpers';
import { WithdrawalItem } from './components/WithdrawalItem';

const App: React.FC = () => {
  // Animated Statistics
  const onlineUsers = useAnimatedValue(486990, { fluctuation: 100, interval: 2000 });
  const winnersToday = useAnimatedValue(3047, { fluctuation: 10, interval: 3000 });
  const prizesToday = useAnimatedValue(1350012, { fluctuation: 1000, interval: 2500, isCurrency: true });
  const jackpotAmount = useAnimatedValue(8547320, { increment: 3, interval: 100, isCurrency: true });
  const latestWinner = useAnimatedValue(54321, { fluctuation: 5000, interval: 8000, isUser: true });
  const highestPrize = useAnimatedValue(125000, { fluctuation: 500, interval: 4000, isCurrency: true });
  
  // Withdrawal List
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initial data
    const initialData = [
      { user: 'ZZx12345', amount: 1500, bank: Bank.KBANK, status: WithdrawalStatus.COMPLETED },
      { user: 'ZZx67890', amount: 2300, bank: Bank.BBL, status: WithdrawalStatus.COMPLETED },
      { user: 'ZZx11223', amount: 800, bank: Bank.SCB, status: WithdrawalStatus.PENDING },
      { user: 'ZZx44556', amount: 4200, bank: Bank.KTB, status: WithdrawalStatus.COMPLETED },
      { user: 'ZZx77889', amount: 1900, bank: Bank.BAY, status: WithdrawalStatus.COMPLETED },
      { user: 'ZZx99001', amount: 3500, bank: Bank.KBANK, status: WithdrawalStatus.COMPLETED }
    ];

    const initialWithdrawals = initialData.map((data, index) => ({
      id: Date.now() + index,
      user: data.user,
      amount: data.amount,
      timestamp: new Date(Date.now() - (5 - index) * 60000).toLocaleString('th-TH'),
      bank: data.bank,
      status: data.status
    }));

    setWithdrawals(initialWithdrawals);
    setIsInitialLoad(false);

    const interval = setInterval(() => {
      const newWithdrawal = generateNewWithdrawal();
      setWithdrawals(prev => [...prev.slice(1), newWithdrawal]);
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRegisterClick = () => {
    window.open('https://24heng.com/u1ZU6I537441', '_blank', 'noopener,noreferrer');
  };

  const handleLineRegisterClick = () => {
    window.open('https://lin.ee/AFGt39h', '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="relative w-full h-full overflow-hidden text-gray-100">
      <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 15% 0%, rgba(0, 255, 200, 0.16), transparent 55%),
            radial-gradient(circle at 85% 0%, rgba(0, 180, 255, 0.22), transparent 60%),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.10) 0px,
              rgba(255, 255, 255, 0.10) 1px,
              rgba(0, 0, 0, 0.7) 1px,
              rgba(0, 0, 0, 0.7) 4px
            ),
            radial-gradient(circle at 50% 80%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.95) 60%)`,
          backgroundBlendMode: 'overlay, screen, soft-light, normal'
      }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-40%] w-[180%] h-[16%] top-1/3 opacity-70 blur-sm" style={{
            background: `linear-gradient(90deg, rgba(0,255,180,0) 0%, rgba(0,255,180,0.7) 30%, rgba(0,180,255,0.9) 70%, rgba(0,180,255,0) 100%)`,
            animation: 'neonSweep 3s linear infinite'
        }} />
        <div className="absolute left-[-50%] w-[200%] h-[10%] bottom-1/4 opacity-60 blur-sm" style={{
            transform: 'rotate(-12deg)',
            background: `linear-gradient(90deg, rgba(0,180,255,0) 0%, rgba(0,180,255,0.8) 40%, rgba(0,255,180,0.8) 60%, rgba(0,255,180,0) 100%)`,
            animation: 'neonSweep2 4s linear infinite'
        }} />
        <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            mixBlendMode: 'overlay'
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.32), transparent 65%),
            radial-gradient(circle at 50% 120%, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 55%)`,
          mixBlendMode: 'soft-light'
      }} />
      
      <main className="relative z-10 h-full w-full flex flex-col items-center justify-start px-6 py-8 md:px-8 md:py-12 overflow-y-auto" aria-label="Cyberpunk Game Promotion">
        <header className="w-full max-w-md text-center mb-8">
          <h1 className="text-2xl md:text-3xl tracking-[0.2em] uppercase drop-shadow-md mb-3 font-bold">ยินดีต้อนรับสมาชิกใหม่</h1>
          <p className="text-sm md:text-base opacity-80 leading-snug">ร่ำรวยเงินทอง</p>
        </header>

        <section className="w-full max-w-md mb-6">
          <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-cyan-400 shadow-lg" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}>
            <img src="https://24heng.com/storage/images/logo.png" alt="Top promotional" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="w-full max-w-md space-y-4 mb-8">
          <button type="button" onClick={handleRegisterClick} className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm md:text-base font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all transform-gpu hover:scale-[1.02]" style={{background: 'linear-gradient(135deg, #00D8FF, #00FFB4)', color: '#02040A', boxShadow: '0 0 18px #00D8FF80'}}>
            <span>สมัครสมาชิก</span>
            <span className="ml-2 inline-block" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 20 20"><path d="M5 10h7.5M10 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg>
            </span>
          </button>
          <button type="button" onClick={handleLineRegisterClick} className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm md:text-base font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all transform-gpu hover:scale-[1.02]" style={{background: 'linear-gradient(135deg, #00FFB4, #00D8FF)', color: '#02040A', boxShadow: '0 0 18px #00FFB480'}}>
            <span className="mr-2 inline-block" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 7.684-6.284 13.968-13.968 13.968-7.684 0-13.968-6.284-13.968-13.968 0-7.684 6.284-13.968 13.968-13.968 3.218 0 6.196 1.096 8.566 2.931-.354.288-.709.577-1.063.865-1.903-1.471-4.266-2.343-6.786-2.343-6.116 0-11.116 4.999-11.116 11.116s4.999 11.116 11.116 11.116 11.116-4.999 11.116-11.116c0-.347.282-.631.631-.631.346 0 .627.284.627.631 0 6.804-5.57 12.374-12.374 12.374-6.804 0-12.374-5.57-12.374-12.374 0-6.804 5.57-12.374 12.374-12.374 3.635 0 6.907 1.574 9.188 4.079.127.14.195.324.195.512 0 .414-.336.75-.75.75z" /></svg></span>
            <span>สมัครสมาชิกผ่านไลน์</span>
          </button>
        </section>

        <section className="w-full max-w-md mb-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-black rounded-lg border-2 border-green-500 p-3 text-center" style={{ boxShadow: '0 0 10px rgba(34,197,94,0.7)' }}>
              <div className="text-sm text-gray-400 mb-1">ออนไลน์</div>
              <div className="font-bold text-lg text-white">{onlineUsers}</div>
            </div>
            <div className="bg-black rounded-lg border-2 border-green-500 p-3 text-center" style={{ boxShadow: '0 0 10px rgba(34,197,94,0.7)' }}>
              <div className="text-sm text-gray-400 mb-1">ผู้ชนะวันนี้</div>
              <div className="font-bold text-lg text-white">{winnersToday}</div>
            </div>
            <div className="bg-black rounded-lg border-2 border-green-500 p-3 text-center" style={{ boxShadow: '0 0 10px rgba(34,197,94,0.7)' }}>
              <div className="text-sm text-gray-400 mb-1">รางวัลวันนี้</div>
              <div className="font-bold text-lg text-white">{prizesToday}</div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-md mb-6">
          <div className="bg-gray-900 bg-opacity-50 border-2 border-gray-700 rounded-xl p-4">
            <h3 className="text-xl font-bold text-yellow-400 text-center mb-4">🏆 แจ๊คพอตล่าสุด 🏆</h3>
            <div className="bg-gradient-to-b from-red-600 to-red-800 rounded-lg shadow-lg p-4 text-center mb-4">
              <div className="text-sm text-red-200 mb-1">มูลค่ารวม</div>
              <div className="text-4xl font-bold text-white tracking-wider">{jackpotAmount}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-xs text-gray-600 mb-1">ผู้ชนะล่าสุด</div>
                <div className="font-bold text-lg text-blue-600">{latestWinner}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-xs text-gray-600 mb-1">รางวัลสูงสุด</div>
                <div className="font-bold text-lg text-red-600">{highestPrize}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-md mb-6">
          <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-cyan-400 shadow-lg" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}>
            <img src="https://24iboom-storeate.sgp1.digitaloceanspaces.com/24iboom-spaces/images/ADfSFAtgx4sMsFpXcme3Q2J1myYzqMIZJaWuhY2G.jpg" alt="Bottom promotional" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="w-full max-w-md mb-8">
          <h3 className="text-sm md:text-base font-semibold mb-4 opacity-90 text-center">รายการถอนอัตโนมัติล่าสุด</h3>
          <div className="space-y-3 rounded-xl p-4" style={{ background: 'rgba(10, 16, 24, 0.4)', border: '1px solid rgba(0, 255, 180, 0.3)', boxShadow: '0 0 20px rgba(0, 255, 180, 0.15)' }}>
            {withdrawals.slice().reverse().map((item, index) => (
              <WithdrawalItem key={item.id} withdrawal={item} isNew={!isInitialLoad && index === 0} />
            ))}
          </div>
        </section>

        <footer className="w-full max-w-md text-center mt-auto pt-6">
          <p className="text-xs md:text-sm opacity-75">โบนัสต้อนรับพิเศษ เฉพาะผู้เล่นใหม่เท่านั้น</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
