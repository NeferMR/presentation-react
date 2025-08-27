import React, { useState, useEffect } from 'react';

function Fortalezas() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedItems, setAnimatedItems] = useState(new Set([0, 1, 2, 3, 4, 5, 6, 7])); // Todas visibles por defecto

  // Opcional: animar entrada después de un momento
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const fortalezas = [
    {
      id: 1,
      categoria: "Técnicas",
      color: "from-blue-500 to-purple-600",
      icon: "🧠",
      items: [
        {
          titulo: "Resolución de Problemas",
          emoji: "🔍",
          detalle: "Me destaco en la resolución de problemas pensando siempre en la escalabilidad y la solución más eficiente a cada problema. Analizo cada desafío desde múltiples perspectivas para encontrar la implementación óptima."
        },
        {
          titulo: "Aprendizaje Acelerado",
          emoji: "⚡",
          detalle: "Me especializo en aprender muy rápido nuevas tecnologías y conceptos. Esta habilidad me permite adaptarme rápidamente a diferentes stacks tecnológicos y mantenerme actualizado con las tendencias del desarrollo."
        }
      ]
    },
    {
      id: 2,
      categoria: "Blandas",
      color: "from-green-500 to-teal-600",
      icon: "🤝",
      items: [
        {
          titulo: "Actitud Proactiva",
          emoji: "🚀",
          detalle: "Me especializo en tener una actitud proactiva para aprender y siempre adaptarme a los entornos dependiendo el problema que me toque afrontar. Busco constantemente oportunidades de mejora y crecimiento."
        },
        {
          titulo: "Comunicación Asertiva",
          emoji: "💬",
          detalle: "Soy una persona siempre dispuesta al diálogo, a conversar y comunicarme de forma asertiva, tanto en lenguaje técnico como natural. Facilito la colaboración efectiva entre equipos técnicos y no técnicos."
        }
      ]
    }
  ];

  const aprendiendo = [
    {
      id: 1,
      categoria: "Técnico",
      color: "from-orange-500 to-red-600",
      icon: "🛠️",
      items: [
        {
          titulo: "Código Limpio y Escalable",
          emoji: "✨",
          detalle: "Me encuentro aprendiendo principalmente la creación de soluciones con código limpio y escalable, aplicando las mejores prácticas de desarrollo para crear software mantenible y eficiente."
        },
        {
          titulo: "Infraestructura y Seguridad",
          emoji: "🔒",
          detalle: "Me estoy enfocando en aprender sobre estructuras, configuración correcta de VMs, encriptación de datos, conexión de APIs, y cómo las VMs se conectan por internet para encontrar las soluciones más eficientes."
        }
      ]
    },
    {
      id: 2,
      categoria: "Personal",
      color: "from-pink-500 to-rose-600",
      icon: "🌱",
      items: [
        {
          titulo: "Comunicación Directa",
          emoji: "🎯",
          detalle: "Me encuentro aprendiendo a hacer una comunicación más directa y clara. Aunque tengo buena comunicación, busco perfeccionar la forma de transmitir mis ideas de manera más efectiva y precisa."
        },
        {
          titulo: "Trabajo en Equipo",
          emoji: "👥",
          detalle: "Estoy especialmente interesado en aprender sobre el trabajo en equipo, la comunicación colaborativa y la construcción de dinámicas efectivas para crear equipos de alto rendimiento."
        }
      ]
    }
  ];

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const ItemCard = ({ item, isExpanded, onClick, index, colorGradient }) => {
    const isAnimated = animatedItems.has(index);
    
    return (
      <div 
        className="fortaleza-item relative group"
        style={{
          opacity: isAnimated ? 1 : 0.7,
          transform: isAnimated ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.5s ease-out',
          transitionDelay: `${(index % 4) * 100}ms`
        }}
      >
        {/* Efecto de resplandor al hover */}
        <div className={`
          absolute inset-0 rounded-xl bg-gradient-to-r ${colorGradient} opacity-0 
          group-hover:opacity-10 transition-opacity duration-500 pointer-events-none
        `} />
        
        {/* Borde animado */}
        <div className={`
          absolute inset-0 rounded-xl bg-gradient-to-r ${colorGradient} opacity-20
          scale-0 group-hover:scale-100 transition-transform duration-500 pointer-events-none
          blur-sm
        `} />
        
        <div 
          className={`
            relative bg-white dark:bg-gray-800 rounded-xl p-4 cursor-pointer 
            transition-all duration-500 shadow-lg hover:shadow-2xl
            border border-gray-200 dark:border-gray-600 hover:border-transparent
            ${isExpanded ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:-translate-y-2'}
            ${isExpanded ? 'row-span-2' : ''}
          `}
          onClick={onClick}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Header con emoji y título */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`
              text-2xl transition-transform duration-300
              ${hoveredCard === index ? 'scale-125 rotate-12' : 'scale-100'}
            `}>
              {item.emoji}
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex-1">
              {item.titulo}
            </h4>
            
            {/* Indicador de expansión sutil */}
            <div className={`
              w-2 h-2 rounded-full bg-gradient-to-r ${colorGradient}
              transition-all duration-300
              ${isExpanded ? 'scale-150 opacity-100' : 'scale-75 opacity-40'}
            `} />
          </div>
          
          {/* Contenido expandible */}
          <div className={`
            overflow-hidden transition-all duration-500 ease-out
            ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className={`
              h-px bg-gradient-to-r ${colorGradient} mb-4 transform origin-left
              transition-transform duration-500
              ${isExpanded ? 'scale-x-100' : 'scale-x-0'}
            `} />
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.detalle}
            </p>
          </div>
          
          {/* Partículas decorativas en hover */}
          {hoveredCard === index && (
            <div className="absolute top-2 right-2 pointer-events-none">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
              <div className="absolute top-1 left-1 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-200" />
              <div className="absolute -top-1 left-2 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-400" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const SeccionCard = ({ data, titulo }) => (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {titulo}
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </div>
      
      {data.map((categoria) => (
        <div key={categoria.id} className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">{categoria.icon}</span>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Habilidades {categoria.categoria}
            </h4>
            <div className={`h-px flex-1 bg-gradient-to-r ${categoria.color} opacity-30`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
            {categoria.items.map((item, itemIndex) => {
              const globalIndex = (categoria.id - 1) * 2 + itemIndex;
              return (
                <ItemCard
                  key={`${categoria.id}-${itemIndex}`}
                  item={item}
                  index={globalIndex}
                  colorGradient={categoria.color}
                  isExpanded={expandedCard === `${titulo}-${categoria.id}-${itemIndex}`}
                  onClick={() => handleCardClick(`${titulo}-${categoria.id}-${itemIndex}`)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 md:px-8 overflow-hidden" id="fortalezas">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Mi Perfil Profesional
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre mis fortalezas actuales y en qué estoy enfocado para seguir creciendo profesionalmente
          </p>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-8 bg-blue-500 rounded-full animate-pulse" />
            <div className="h-1 w-8 bg-purple-500 rounded-full animate-pulse animation-delay-200" />
            <div className="h-1 w-8 bg-pink-500 rounded-full animate-pulse animation-delay-400" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <SeccionCard 
            data={fortalezas} 
            titulo="Mis Fortalezas"
          />
          
          <SeccionCard 
            data={aprendiendo} 
            titulo="Enfoque Actual"
          />
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 dark:border-gray-600">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Haz click en cada tarjeta para conocer más detalles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fortalezas;
