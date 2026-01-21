import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Scatter, Bar, Radar } from 'react-chartjs-2';
import { Activity, DollarSign, Scale, Beef, Moon, Sun, TrendingUp } from 'lucide-react';
import MetricCard from './MetricCard';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Legend, Filler
);

const Dashboard = () => {
  // Estado do Tema (Dark/Light)
  const [isDark, setIsDark] = useState(false);

  // Efeito para aplicar a classe 'dark' no HTML
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // --- PALETA DE CORES PECUSNET ---
  const pecusBlue = '#006994'; // Azul-petróleo escuro (Texto "Pecus")
  const pecusTeal = '#00A896'; // Verde-azulado médio (Corpo do boi)
  const pecusGreen = '#50C878'; // Verde-claro vibrante (Cabeça, "Net", Gráfico)
  
  const bgLight = '#F0F4F8';
  const bgDark = '#0F172A';
  const cardLight = '#FFFFFF';
  const cardDark = '#1E293B';
  const textLightPrimary = '#1F2937';
  const textDarkPrimary = '#F9FAFB';
  const textLightSecondary = '#6B7280';
  const textDarkSecondary = '#9CA3AF';

  // --- MOCK DATA & CÁLCULOS ---
  const qtdBois = 82;
  const pesoMedio = 485.5; 
  const precoArroba = 320.00; 
  const receitaEstimada = (qtdBois * (pesoMedio / 15)) * precoArroba;
  
  // Cálculo da Assertividade (Baseado no seu RMSE de 20.5)
  const rmse = 20.5;
  const assertividade = (100 - ((rmse / pesoMedio) * 100)).toFixed(1);

  // --- CONFIGURAÇÃO DE CORES DOS GRÁFICOS (Adaptativo) ---
  const textColor = isDark ? textDarkSecondary : textLightSecondary;
  const gridColor = isDark ? '#334155' : '#E5E7EB';

  const commonOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { labels: { color: textColor, font: { family: 'Inter' } } },
      tooltip: { 
        backgroundColor: isDark ? cardDark : cardLight, 
        titleColor: isDark ? textDarkPrimary : textLightPrimary,
        bodyColor: isDark ? textDarkSecondary : textLightSecondary,
        borderColor: gridColor,
        borderWidth: 1,
        padding: 10
      }
    },
    scales: {
      x: { ticks: { color: textColor }, grid: { color: gridColor } },
      y: { ticks: { color: textColor }, grid: { color: gridColor } }
    }
  };

  // 1. Gráfico de Dispersão (Nova Análise Criativa)
  const scatterData = {
    datasets: [{
      label: 'Animais Monitorados',
      data: Array.from({ length: 60 }, () => ({
        x: 140 + Math.random() * 60, 
        y: 320 + Math.random() * 280 
      })),
      backgroundColor: isDark ? pecusGreen + 'CC' : pecusTeal + '99',
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  // 2. Gráfico de Barras (Planejamento)
  const barData = {
    labels: ['Recria', 'Engorda', 'Terminação (Abate)'],
    datasets: [{
      label: 'Volume de Animais',
      data: [15, 45, 22],
      backgroundColor: [pecusBlue, pecusTeal, pecusGreen],
      borderRadius: 6,
      barThickness: 40,
    }]
  };

  // 3. Radar (Morfologia)
  const radarData = {
    labels: ['Tórax', 'Comprimento', 'Altura', 'Garupa', 'Canela'],
    datasets: [
      {
        label: 'Média Atual',
        data: [85, 70, 75, 60, 90],
        backgroundColor: pecusGreen + '33',
        borderColor: pecusGreen,
        borderWidth: 2,
        pointBackgroundColor: pecusGreen
      },
      {
        label: 'Padrão da Raça',
        data: [90, 85, 80, 85, 95],
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: isDark ? textDarkSecondary : textLightSecondary,
        borderDash: [5, 5],
        borderWidth: 1,
        pointRadius: 0
      }
    ],
  };

  const radarOptions = {
    ...commonOptions,
    scales: {
      r: {
        grid: { color: gridColor },
        pointLabels: { color: textColor, font: { size: 12 } },
        ticks: { display: false, backdropColor: 'transparent' }
      }
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-gray-800'}`} style={{ backgroundColor: isDark ? bgDark : bgLight }}>
      
      {/* HEADER / TOP NAV */}
      <nav className={`border-b px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`} style={{ backgroundColor: isDark ? cardDark : cardLight, borderColor: isDark ? '#334155' : '#E5E7EB' }}>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg" style={{ backgroundColor: pecusTeal }}>
            <Beef className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight" style={{ color: isDark ? textDarkPrimary : pecusBlue }}>PecusNet </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors border ${isDark ? 'hover:bg-slate-700 border-slate-600' : 'hover:bg-gray-100 border-gray-200'}`}
            aria-label="Alternar Tema"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} style={{ color: pecusBlue }} />}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="p-6 max-w-7xl mx-auto space-y-6">
        
        {/* KPI SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            title="Rebanho Monitorado" 
            value={qtdBois} 
            sub="+12% vs mês anterior"
            icon={<Beef size={24} />} 
            color={isDark ? `text-[${pecusGreen}] bg-[${pecusGreen}]/20` : `text-[${pecusBlue}] bg-[${pecusBlue}]/10`}
            pecusColor={isDark ? pecusGreen : pecusBlue}
          />
          <MetricCard 
            title="Peso Médio Projetado" 
            value={`${pesoMedio} kg`} 
            sub="Ganho diário: 1.2kg"
            icon={<Scale size={24} />} 
            color={isDark ? `text-[${pecusTeal}] bg-[${pecusTeal}]/20` : `text-[${pecusTeal}] bg-[${pecusTeal}]/10`}
            pecusColor={pecusTeal}
          />
          <MetricCard 
            title="Receita Estimada" 
            value={`R$ ${(receitaEstimada/1000).toFixed(1)}k`} 
            sub={`Base: @ R$ ${precoArroba}`}
            icon={<DollarSign size={24} />} 
            color={isDark ? `text-[${pecusGreen}] bg-[${pecusGreen}]/20` : `text-[${pecusBlue}] bg-[${pecusBlue}]/10`}
            pecusColor={isDark ? pecusGreen : pecusBlue}
          />
          <MetricCard 
            title="Precisão do Sistema" 
            value={`${assertividade}%`} 
            sub="Margem de segurança alta"
            icon={<Activity size={24} />} 
            color={isDark ? `text-[${pecusTeal}] bg-[${pecusTeal}]/20` : `text-[${pecusTeal}] bg-[${pecusTeal}]/10`}
            pecusColor={pecusTeal}
          />
        </div>

        {/* CHARTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart: Growth Analysis (Scatter) - NOVA ANÁLISE */}
          <div className={`lg:col-span-2 p-6 rounded-2xl shadow-sm border transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`} style={{ backgroundColor: isDark ? cardDark : cardLight, borderColor: isDark ? '#334155' : '#E5E7EB' }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Monitoramento de Desenvolvimento Corporal</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Visualização do padrão de crescimento do rebanho, indicando a eficiência da conversão alimentar com base na estrutura física.</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-50 text-teal-700'}`} style={{ backgroundColor: isDark ? pecusTeal + '33' : pecusTeal + '1A', color: isDark ? pecusGreen : pecusTeal }}>
                Padrão Saudável
              </div>
            </div>
            <div className="h-80">
              <Scatter data={scatterData} options={{
                ...commonOptions,
                scales: {
                  x: { 
                    ...commonOptions.scales.x, 
                    title: { display: true, text: 'Desenvolvimento Dorsal (cm)', color: textColor } 
                  },
                  y: { 
                    ...commonOptions.scales.y, 
                    title: { display: true, text: 'Peso Corporal (kg)', color: textColor } 
                  }
                }
              }} />
            </div>
          </div>

          {/* Secondary Chart: Slaughter Prediction (Bar) */}
          <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 flex flex-col justify-between ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`} style={{ backgroundColor: isDark ? cardDark : cardLight, borderColor: isDark ? '#334155' : '#E5E7EB' }}>
            <div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>Previsão de Abate</h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Classificação automática por maturidade.</p>
              <div className="h-64">
                <Bar data={barData} options={commonOptions} />
              </div>
            </div>
            <div className={`mt-4 p-4 rounded-xl border transition-colors duration-300 ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-100'}`}>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 mt-0.5" style={{ color: pecusGreen }} />
                <div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Oportunidade de Venda</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    22 animais atingiram o ponto ideal de cobertura de gordura e peso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Full Width: Genetics/Morphology */}
          <div className={`lg:col-span-3 p-6 rounded-2xl shadow-sm border transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`} style={{ backgroundColor: isDark ? cardDark : cardLight, borderColor: isDark ? '#334155' : '#E5E7EB' }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 h-72">
                 <Radar data={radarData} options={radarOptions} />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Avaliação Morfológica do Rebanho</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border transition hover:bg-opacity-50 ${isDark ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-100 hover:bg-gray-50'}`}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: pecusGreen }}>Ponto Forte</p>
                    <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      O sistema identificou excelente desenvolvimento no <span className="font-bold">Comprimento</span> e na <span className="font-bold">Largura do quadril</span>, indicando boa estrutura.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                   <button className="px-5 py-2.5 text-white text-sm font-medium rounded-lg transition shadow-md hover:shadow-lg" style={{ backgroundColor: pecusBlue }}>
                     Baixar Relatório Zootécnico
                   </button>
                   <button className={`px-5 py-2.5 border text-sm font-medium rounded-lg transition ${isDark ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                     Configurar Parâmetros
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;