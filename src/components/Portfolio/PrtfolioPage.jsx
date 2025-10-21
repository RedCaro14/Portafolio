// src/components/Portfolio/PortfolioPage.jsx
import Sidebar from './Sidebar';
import PortfolioGrid from './PortfolioGrid';

export default function PortfolioPage() {
  return (
    <div className="flex flex-row gap-8 px-6 py-12">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Grid del portafolio */}
      <main className="flex-1">
        <PortfolioGrid />
      </main>
    </div>
  );
}
