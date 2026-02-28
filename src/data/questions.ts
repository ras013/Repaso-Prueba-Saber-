export interface Question {
  id: number;
  comp: string;
  enun: string;
  opts: string[];
  correcta: number;
  sol: string;
  veri?: string; // Made optional as new data might not have it, though I'll keep it for old ones
  dibujo?: string;
}

export const questions: Question[] = [
  {
      id: 1,
      comp: "Numérico-Variacional",
      enun: "Un proceso industrial consta de: Planta (15 min) e Inspección (5 min). Si falla la calidad, pasa a Reajuste (20 min) y vuelve a Planta. Si un producto falla una vez y la segunda es exitoso, ¿cuánto tiempo duró?",
      opts: ["20 min", "40 min", "55 min", "60 min"],
      correcta: 3,
      sol: "El flujo es: [Planta+Insp] -> [Reajuste] -> [Planta+Insp]. Es decir: (15+5) + 20 + (15+5) = 60 minutos.",
      veri: "Se debe sumar la secuencia completa: (15+5) + 20 + (15+5) = 60.",
      dibujo: `<svg viewBox="0 0 400 100" class="w-full max-w-md mx-auto mb-4 bg-gray-50 rounded-lg p-4">
          <rect x="10" y="30" width="60" height="40" rx="5" fill="#3b82f6" />
          <text x="40" y="55" text-anchor="middle" fill="white" font-size="10">Planta</text>
          <path d="M70 50 L100 50" stroke="#94a3b8" stroke-width="2" fill="none" />
          <rect x="100" y="30" width="60" height="40" rx="5" fill="#3b82f6" />
          <text x="130" y="55" text-anchor="middle" fill="white" font-size="10">Insp.</text>
          <path d="M160 50 L190 50" stroke="#94a3b8" stroke-width="2" fill="none" />
          <rect x="190" y="30" width="70" height="40" rx="5" fill="#f43f5e" />
          <text x="225" y="55" text-anchor="middle" fill="white" font-size="10">Reajuste</text>
          <path d="M260 50 L290 50" stroke="#94a3b8" stroke-width="2" fill="none" />
          <rect x="290" y="30" width="60" height="40" rx="5" fill="#10b981" />
          <text x="320" y="55" text-anchor="middle" fill="white" font-size="10">Fin</text>
      </svg>`
  },
  {
      id: 2,
      comp: "Numérico-Variacional",
      enun: "Una mezcla de concreto usa cemento y arena en proporción 2:5. Si se tienen 40 kg de cemento, ¿cuántos kg de arena se necesitan para agotar el cemento manteniendo la mezcla perfecta?",
      opts: ["16 kg", "80 kg", "100 kg", "200 kg"],
      correcta: 2,
      sol: "La razón es 2/5. Planteamos la ecuación: 2 / 5 = 40 / x. Multiplicamos en cruz: 2x = 200, entonces x = 100 kg.",
      veri: "Si dividimos 40/100 obtenemos 0.4, que es igual a 2/5.",
      dibujo: `<svg viewBox="0 0 300 120" class="w-full max-w-md mx-auto mb-4 bg-gray-50 rounded-lg p-4">
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="80" height="60" fill="#94a3b8" rx="4" />
            <text x="40" y="35" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Cemento</text>
            <text x="40" y="55" text-anchor="middle" fill="white" font-size="10">2 partes</text>
          </g>
          <text x="125" y="55" text-anchor="middle" fill="#64748b" font-size="20" font-weight="bold">:</text>
          <g transform="translate(150, 10)">
            <rect x="0" y="0" width="120" height="80" fill="#fbbf24" rx="4" />
            <text x="60" y="45" text-anchor="middle" fill="#78350f" font-size="12" font-weight="bold">Arena</text>
            <text x="60" y="65" text-anchor="middle" fill="#78350f" font-size="10">5 partes</text>
          </g>
      </svg>`
  },
  {
      id: 3,
      comp: "Geométrico-Métrico",
      enun: "Terreno rectangular de 48m² y un lado de 6m. Malla: $15.000/metro. ¿Costo total?",
      opts: ["$210.000", "$420.000", "$360.000", "$280.000"],
      correcta: 1,
      sol: "Área=48, Lado A=6 -> Lado B=48/6=8. Perímetro = 6+6+8+8=28m. Costo=28*15.000.",
      veri: "El perímetro es la longitud total de la malla. 28m * $15k = $420k.",
      dibujo: `<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto mb-4">
          <rect x="40" y="20" width="120" height="80" fill="none" stroke="#3b82f6" stroke-width="3" />
          <text x="100" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold">48 m²</text>
          <text x="30" y="65" text-anchor="middle" fill="#64748b" font-size="12" transform="rotate(-90 30,65)">6 m</text>
      </svg>`
  },
  {
      id: 4,
      comp: "Numérico-Variacional",
      enun: "Una empresa de mensajería cobra una base de $5.000 por envío más $1.500 por cada kg de peso. Si un cliente pagó $17.000, ¿cuánto pesaba el paquete?",
      opts: ["11 kg", "10 kg", "8 kg", "7.5 kg"],
      correcta: 2,
      sol: "Modelo: 1500x + 5000 = 17000. Restamos la base: 1500x = 12000. Dividimos: x = 12000 / 1500 = 8 kg.",
      veri: "8 kg * 1500 = 12000. Más 5000 fijos = 17000.",
      dibujo: `<svg viewBox="0 0 350 100" class="w-full max-w-md mx-auto mb-4 bg-white rounded-lg p-2 border border-gray-100">
          <rect x="10" y="10" width="80" height="80" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
          <text x="50" y="35" text-anchor="middle" fill="#4f46e5" font-size="12" font-weight="bold">Base</text>
          <text x="50" y="55" text-anchor="middle" fill="#4f46e5" font-size="14">$5.000</text>
          
          <text x="110" y="55" text-anchor="middle" fill="#64748b" font-size="20">+</text>
          
          <rect x="130" y="10" width="80" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="170" y="35" text-anchor="middle" fill="#16a34a" font-size="12" font-weight="bold">Extra</text>
          <text x="170" y="55" text-anchor="middle" fill="#16a34a" font-size="10">$1.500/kg</text>
          
          <text x="230" y="55" text-anchor="middle" fill="#64748b" font-size="20">=</text>
          
          <rect x="250" y="20" width="80" height="60" rx="4" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="290" y="45" text-anchor="middle" fill="#1e293b" font-size="10">Total</text>
          <text x="290" y="65" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">$17.000</text>
      </svg>`
  },
  {
      id: 5,
      comp: "Geométrico-Métrico",
      enun: "Poste de 12m proyecta sombra de 5m. ¿Distancia de la punta del poste al extremo de la sombra?",
      opts: ["17 m", "13 m", "15 m", "12.5 m"],
      correcta: 1,
      sol: "Teorema de Pitágoras: a² + b² = c² -> 12² + 5² = 144 + 25 = 169. √169 = 13.",
      veri: "El poste y la sombra son los catetos de un triángulo de dimensiones 5-12-13.",
      dibujo: `<svg viewBox="0 0 200 150" class="w-full max-w-xs mx-auto mb-4">
          <path d="M50 20 L50 120 L150 120 Z" fill="#eff6ff" stroke="#3b82f6" stroke-width="3"/>
          <text x="40" y="75" text-anchor="middle" fill="#1e40af" font-size="12">12m</text>
          <text x="100" y="135" text-anchor="middle" fill="#1e40af" font-size="12">5m</text>
          <text x="110" y="65" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="bold">?</text>
      </svg>`
  },
  {
      id: 6,
      comp: "Geométrico-Métrico",
      enun: "Cilindro con volumen de 100π cm³ y altura de 4 cm. ¿Cuál es su radio?",
      opts: ["5 cm", "10 cm", "25 cm", "50 cm"],
      correcta: 0,
      sol: "Volumen = π · r² · h. 100π = π · r² · 4. Cancelamos π: 100 = 4r² -> 25 = r² -> r = 5.",
      veri: "Radio 5 al cuadrado es 25. 25 * 4 = 100. Con π da el volumen original.",
      dibujo: `<svg viewBox="0 0 200 150" class="w-full max-w-xs mx-auto mb-4">
          <ellipse cx="100" cy="30" rx="40" ry="15" fill="none" stroke="#3b82f6" stroke-width="2"/>
          <path d="M60 30 L60 110 A 40 15 0 0 0 140 110 L140 30" fill="none" stroke="#3b82f6" stroke-width="2"/>
          <ellipse cx="100" cy="110" rx="40" ry="15" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
          <line x1="100" y1="30" x2="140" y2="30" stroke="#f43f5e" stroke-width="2"/>
          <text x="120" y="25" fill="#f43f5e" font-size="10" font-weight="bold">r=?</text>
          <line x1="150" y1="30" x2="150" y2="110" stroke="#64748b" stroke-width="1"/>
          <text x="165" y="75" fill="#64748b" font-size="10">h=4</text>
      </svg>`
  },
  {
      id: 7,
      comp: "Numérico-Variacional",
      enun: "Un cultivo de bacterias se duplica cada 30 minutos. Si a las 8:00 AM hay 500 bacterias, ¿a qué hora habrá 4.000 bacterias?",
      opts: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
      correcta: 1,
      sol: "8:00 (500) -> 8:30 (1000) -> 9:00 (2000) -> 9:30 (4000). Han pasado 3 intervalos de 30 min.",
      veri: "El crecimiento es 500 * 2^n. Para llegar a 4000, n debe ser 3.",
      dibujo: `<svg viewBox="0 0 400 120" class="w-full max-w-md mx-auto mb-4">
          <g transform="translate(50, 40)">
             <circle cx="20" cy="20" r="20" fill="#10b981" opacity="0.6"/>
             <text x="20" y="24" text-anchor="middle" fill="white" font-size="10">500</text>
             <text x="20" y="55" text-anchor="middle" fill="#64748b" font-size="12">8:00</text>
          </g>
          
          <path d="M100 60 Q 200 20 300 60" stroke="#cbd5e1" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
          <text x="200" y="80" text-anchor="middle" fill="#64748b" font-size="10">x2 cada 30 min</text>
          
          <g transform="translate(310, 30)">
             <circle cx="30" cy="30" r="35" fill="#10b981"/>
             <text x="30" y="35" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4000</text>
             <text x="30" y="85" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">??:??</text>
          </g>
      </svg>`
  },
  {
      id: 8,
      comp: "Numérico-Variacional",
      enun: "Se requiere un área rectangular de 200 m². Si la base mide x metros y la altura mide (x - 10) metros, ¿cuánto debe medir la base?",
      opts: ["10 m", "20 m", "25 m", "40 m"],
      correcta: 1,
      sol: "x(x - 10) = 200. Ecuación: x² - 10x - 200 = 0. Factorizamos: (x - 20)(x + 10) = 0. El lado debe ser positivo: x = 20.",
      veri: "Base 20m, altura (20-10)=10m. Área = 20 * 10 = 200m².",
      dibujo: `<svg viewBox="0 0 250 150" class="w-full max-w-xs mx-auto mb-4">
          <rect x="25" y="25" width="200" height="100" fill="#f1f5f9" stroke="#3b82f6" stroke-width="2" />
          <text x="125" y="80" text-anchor="middle" fill="#3b82f6" font-size="16" font-weight="bold">Area = 200 m²</text>
          <text x="125" y="140" text-anchor="middle" fill="#1e293b" font-size="14">x</text>
          <text x="15" y="75" text-anchor="middle" fill="#1e293b" font-size="14" transform="rotate(-90 15,75)">x - 10</text>
      </svg>`
  },
  {
      id: 9,
      comp: "Numérico-Variacional",
      enun: "Un artículo de $200.000 tiene un descuento del 10% y luego, sobre ese precio, se aplica un IVA del 19%. ¿Cuál es el precio final?",
      opts: ["$218.000", "$214.200", "$238.000", "$200.000"],
      correcta: 1,
      sol: "Desc. 10%: 200k - 20k = 180k. IVA 19%: 180.000 * 1.19 = 214.200.",
      veri: "El 19% de 180.000 es 34.200. 180.000 + 34.200 = 214.200.",
      dibujo: `<svg viewBox="0 0 400 100" class="w-full max-w-md mx-auto mb-4">
          <g transform="translate(10, 20)">
            <rect x="0" y="0" width="80" height="60" rx="4" fill="#e2e8f0" />
            <text x="40" y="35" text-anchor="middle" fill="#64748b" font-size="12">$200k</text>
          </g>
          
          <path d="M100 50 L130 50" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
          <text x="115" y="40" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">-10%</text>
          
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="80" height="60" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-dasharray="4" />
            <text x="40" y="35" text-anchor="middle" fill="#1e40af" font-size="12">?</text>
          </g>
          
          <path d="M230 50 L290 50" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
          <text x="260" y="40" text-anchor="middle" fill="#16a34a" font-size="10" font-weight="bold">+19% IVA</text>
          
          <g transform="translate(300, 20)">
            <circle cx="20" cy="30" r="15" fill="#dcfce7" />
            <text x="20" y="35" text-anchor="middle" fill="#166534" font-size="14" font-weight="bold">?</text>
          </g>
      </svg>`
  },
  {
      id: 10,
      comp: "Geométrico-Métrico",
      enun: "Si un triángulo rectángulo isósceles tiene catetos de 10 cm, ¿cuál es el área de un círculo que tenga como radio la hipotenusa de dicho triángulo? (Use π = 3.14)",
      opts: ["628 cm²", "314 cm²", "157 cm²", "100 cm²"],
      correcta: 0,
      sol: "Hipotenusa² = 10² + 10² = 200. Radio² = 200. Área Círculo = π * r² = 3.14 * 200 = 628.",
      veri: "El radio es √200. Al elevarlo al cuadrado para el área, vuelve a ser 200.",
      dibujo: `<svg viewBox="0 0 200 200" class="w-full max-w-xs mx-auto mb-4">
          <circle cx="100" cy="100" r="90" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
          <path d="M100 100 L190 100" stroke="#3b82f6" stroke-width="2"/>
          <text x="145" y="90" text-anchor="middle" fill="#3b82f6" font-size="12">Radio = h</text>
          
          <g transform="translate(40, 120) scale(0.6)">
             <path d="M0 100 L100 100 L0 0 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
             <text x="-15" y="50" text-anchor="middle" fill="#64748b" font-size="14">10</text>
             <text x="50" y="120" text-anchor="middle" fill="#64748b" font-size="14">10</text>
             <text x="60" y="40" text-anchor="middle" fill="#3b82f6" font-size="14" font-weight="bold">h</text>
          </g>
      </svg>`
  },
  {
      id: 11,
      comp: "Numérico-Variacional",
      enun: "En un mercado, 4 kg de manzanas cuestan lo mismo que 5 kg de peras. Si 1 kg de peras vale $3.200, ¿cuánto valen 2 kg de manzanas?",
      opts: ["$6.400", "$8.000", "$4.000", "$16.000"],
      correcta: 1,
      sol: "5 kg peras = 5 * 3200 = 16.000. Entonces 4 kg manzanas valen 16.000. 1 kg manzanas = 4.000. 2 kg = 8.000.",
      veri: "Relación de intercambio de precios: 4M = 5P.",
      dibujo: `<svg viewBox="0 0 300 120" class="w-full max-w-md mx-auto mb-4">
          <line x1="50" y1="80" x2="250" y2="80" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
          <polygon points="150,80 140,110 160,110" fill="#64748b"/>
          
          <g transform="translate(50, 30)">
             <circle cx="0" cy="0" r="30" fill="#fca5a5" opacity="0.5"/>
             <text x="0" y="5" text-anchor="middle" fill="#b91c1c" font-size="12" font-weight="bold">4 kg</text>
             <text x="0" y="20" text-anchor="middle" fill="#b91c1c" font-size="10">Manzanas</text>
          </g>
          
          <text x="150" y="50" text-anchor="middle" fill="#64748b" font-size="20" font-weight="bold">=</text>
          
          <g transform="translate(250, 30)">
             <circle cx="0" cy="0" r="35" fill="#d9f99d" opacity="0.5"/>
             <text x="0" y="5" text-anchor="middle" fill="#3f6212" font-size="12" font-weight="bold">5 kg</text>
             <text x="0" y="20" text-anchor="middle" fill="#3f6212" font-size="10">Peras</text>
          </g>
      </svg>`
  },
  {
      id: 12,
      comp: "Geométrico-Métrico",
      enun: "Se tiene un cuadrado de 10 cm de lado. Si se duplican todos sus lados, ¿cuántas veces aumenta su área?",
      opts: ["2 veces", "4 veces", "8 veces", "16 veces"],
      correcta: 1,
      sol: "Área original = 10² = 100. Área nueva = 20² = 400. 400 / 100 = 4 veces.",
      veri: "En geometría, si las dimensiones lineales se multiplican por k, el área se multiplica por k².",
      dibujo: `<svg viewBox="0 0 300 150" class="w-full max-w-md mx-auto mb-4">
          <rect x="20" y="50" width="50" height="50" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
          <text x="45" y="80" text-anchor="middle" fill="#1e40af" font-size="12">10</text>
          
          <path d="M90 75 L120 75" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="105" y="65" text-anchor="middle" fill="#64748b" font-size="10">x2 Lados</text>
          
          <rect x="140" y="25" width="100" height="100" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <text x="190" y="80" text-anchor="middle" fill="#1e40af" font-size="14" font-weight="bold">20</text>
          <text x="190" y="100" text-anchor="middle" fill="#1e40af" font-size="10">Área = ?</text>
      </svg>`
  },
  {
      id: 13,
      comp: "Numérico-Variacional",
      enun: "La suma de las edades de un padre y su hijo es 60 años. Si el padre tiene el triple de la edad del hijo, ¿cuántos años tiene el padre?",
      opts: ["40 años", "45 años", "50 años", "30 años"],
      correcta: 1,
      sol: "P + H = 60 y P = 3H. Sustituyendo: 3H + H = 60 -> 4H = 60 -> H = 15. Por tanto P = 3(15) = 45.",
      veri: "45 (padre) + 15 (hijo) = 60 años.",
      dibujo: `<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto mb-4">
          <g transform="translate(50, 100)">
             <line x1="0" y1="0" x2="0" y2="-80" stroke="#334155" stroke-width="4"/>
             <circle cx="0" cy="-90" r="10" fill="#cbd5e1"/>
             <text x="0" y="-110" text-anchor="middle" fill="#334155" font-size="12" font-weight="bold">Padre (3x)</text>
          </g>
          
          <text x="100" y="60" text-anchor="middle" fill="#64748b" font-size="20">+</text>
          
          <g transform="translate(150, 100)">
             <line x1="0" y1="0" x2="0" y2="-30" stroke="#334155" stroke-width="4"/>
             <circle cx="0" cy="-35" r="8" fill="#cbd5e1"/>
             <text x="0" y="-50" text-anchor="middle" fill="#334155" font-size="12" font-weight="bold">Hijo (x)</text>
          </g>
          
          <text x="100" y="115" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="bold">Total = 60</text>
      </svg>`
  },
  {
      id: 14,
      comp: "Geométrico-Métrico",
      enun: "Tanque de 2m x 3m. Si el agua sube 10 cm (0.1m), ¿cuántos litros de agua se agregaron?",
      opts: ["60 litros", "600 litros", "6.000 litros", "6 litros"],
      correcta: 1,
      sol: "V = largo * ancho * alto. V = 2 * 3 * 0.1 = 0.6 m³. 0.6 * 1000 Litros/m³ = 600 L.",
      veri: "El volumen es el área de la base por el incremento de altura.",
      dibujo: `<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto mb-4">
          <rect x="40" y="40" width="120" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
          <rect x="40" y="80" width="120" height="20" fill="#3b82f6" opacity="0.4" />
          <text x="100" y="95" text-anchor="middle" fill="white" font-size="10">0.1 m</text>
          <text x="100" y="115" text-anchor="middle" fill="#64748b" font-size="10">Base: 2m x 3m</text>
      </svg>`
  },
  {
      id: 15,
      comp: "Numérico-Variacional",
      enun: "Una progresión aritmética comienza en 5 y su diferencia es 7. ¿Cuál es el valor del término número 11?",
      opts: ["77", "82", "75", "70"],
      correcta: 2,
      sol: "Fórmula: a_n = a_1 + (n-1)d. a_11 = 5 + (10 * 7) = 5 + 70 = 75.",
      veri: "Si sumas 7 diez veces al 5 inicial, llegas a 75.",
      dibujo: `<svg viewBox="0 0 350 80" class="w-full max-w-md mx-auto mb-4">
          <circle cx="30" cy="40" r="20" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="2"/>
          <text x="30" y="45" text-anchor="middle" fill="#0369a1" font-weight="bold">5</text>
          <text x="30" y="75" text-anchor="middle" fill="#64748b" font-size="10">a1</text>
          
          <path d="M60 40 L90 40" stroke="#cbd5e1" stroke-width="2"/>
          <text x="75" y="30" text-anchor="middle" fill="#64748b" font-size="10">+7</text>
          
          <circle cx="120" cy="40" r="20" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="2"/>
          <text x="120" y="45" text-anchor="middle" fill="#0369a1" font-weight="bold">12</text>
          <text x="120" y="75" text-anchor="middle" fill="#64748b" font-size="10">a2</text>
          
          <path d="M150 40 L180 40" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4"/>
          
          <circle cx="310" cy="40" r="25" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="2"/>
          <text x="310" y="45" text-anchor="middle" fill="#0369a1" font-weight="bold">?</text>
          <text x="310" y="75" text-anchor="middle" fill="#64748b" font-size="10">a11</text>
      </svg>`
  },
  {
      id: 16,
      comp: "Geométrico-Métrico",
      enun: "Un triángulo equilátero tiene un perímetro de 18 cm. ¿Cuál es la altura del triángulo?",
      opts: ["6 cm", "3√3 cm", "9 cm", "3 cm"],
      correcta: 1,
      sol: "Lado = 18 / 3 = 6 cm. Altura = (Lado * √3) / 2 = (6√3) / 2 = 3√3.",
      veri: "Usando Pitágoras en medio triángulo: 3² + h² = 6² -> 9 + h² = 36 -> h² = 27 -> h = √27 = 3√3.",
      dibujo: `<svg viewBox="0 0 200 180" class="w-full max-w-xs mx-auto mb-4">
          <path d="M20 150 L180 150 L100 11.4 Z" fill="none" stroke="#3b82f6" stroke-width="3"/>
          <line x1="100" y1="11.4" x2="100" y2="150" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5"/>
          <text x="110" y="80" fill="#f43f5e" font-weight="bold">h = ?</text>
          <text x="100" y="170" text-anchor="middle" fill="#1e40af" font-size="12">Perímetro = 18</text>
      </svg>`
  },
  {
      id: 17,
      comp: "Numérico-Variacional",
      enun: "Se lanzan dos dados de 6 caras. ¿Cuál es la probabilidad de que la suma de los resultados sea exactamente 7?",
      opts: ["1/6", "1/12", "1/36", "7/36"],
      correcta: 0,
      sol: "Casos totales: 36. Casos favorables: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. Probabilidad = 6/36 = 1/6.",
      veri: "El 7 es el resultado más probable en una suma de dos dados.",
      dibujo: `<svg viewBox="0 0 300 100" class="w-full max-w-xs mx-auto mb-4">
          <rect x="50" y="20" width="50" height="50" rx="8" fill="white" stroke="#334155" stroke-width="2"/>
          <text x="75" y="55" text-anchor="middle" fill="#334155" font-size="24" font-weight="bold">?</text>
          
          <text x="120" y="55" text-anchor="middle" fill="#64748b" font-size="24">+</text>
          
          <rect x="140" y="20" width="50" height="50" rx="8" fill="white" stroke="#334155" stroke-width="2"/>
          <text x="165" y="55" text-anchor="middle" fill="#334155" font-size="24" font-weight="bold">?</text>
          
          <text x="210" y="55" text-anchor="middle" fill="#64748b" font-size="24">=</text>
          
          <text x="250" y="55" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="bold">Suma 7</text>
      </svg>`
  },
  {
      id: 18,
      comp: "Geométrico-Métrico",
      enun: "Un terreno circular tiene un radio de 10m. Se quiere poner una valla en la mitad de la circunferencia. ¿Qué longitud de valla se necesita? (Use π = 3.14)",
      opts: ["62.8 m", "31.4 m", "15.7 m", "100 m"],
      correcta: 1,
      sol: "Circunferencia total = 2 * π * r = 2 * 3.14 * 10 = 62.8 m. Mitad = 31.4 m.",
      veri: "La valla cubre un semicírculo, por eso dividimos por 2.",
      dibujo: `<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto mb-4">
          <path d="M20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#3b82f6" stroke-width="4"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4"/>
          <line x1="100" y1="100" x2="100" y2="20" stroke="#64748b" stroke-width="1"/>
          <text x="110" y="60" fill="#64748b" font-size="12">r=10m</text>
          <text x="100" y="15" text-anchor="middle" fill="#3b82f6" font-weight="bold">Valla</text>
      </svg>`
  },
  {
      id: 19,
      comp: "Numérico-Variacional",
      enun: "Un tanque de 500 litros se llena a una tasa de 20 litros/minuto pero tiene una fuga de 5 litros/minuto. ¿En cuánto tiempo se llenará si está vacío?",
      opts: ["25 min", "33.3 min", "100 min", "20 min"],
      correcta: 1,
      sol: "Tasa neta = 20 - 5 = 15 litros/min. Tiempo = 500 / 15 = 33.33 minutos.",
      veri: "Cada minuto el tanque gana efectivamente 15 litros.",
      dibujo: `<svg viewBox="0 0 200 150" class="w-full max-w-xs mx-auto mb-4">
          <path d="M50 40 L50 120 L150 120 L150 40" fill="none" stroke="#334155" stroke-width="3"/>
          <rect x="55" y="80" width="90" height="35" fill="#bfdbfe" opacity="0.6"/>
          
          <path d="M70 10 L70 50" stroke="#3b82f6" stroke-width="4"/>
          <path d="M65 50 L75 50 L70 60 Z" fill="#3b82f6"/>
          <text x="80" y="30" fill="#3b82f6" font-size="10" font-weight="bold">+20 L/min</text>
          
          <path d="M130 120 L130 140" stroke="#ef4444" stroke-width="3"/>
          <text x="140" y="140" fill="#ef4444" font-size="10" font-weight="bold">-5 L/min</text>
      </svg>`
  },
  {
      id: 20,
      comp: "Geométrico-Métrico",
      enun: "Una pirámide de base cuadrada tiene un lado de base de 6 cm y una altura de 10 cm. ¿Cuál es su volumen?",
      opts: ["60 cm³", "120 cm³", "180 cm³", "360 cm³"],
      correcta: 1,
      sol: "Volumen = (Área base * altura) / 3. Área base = 6 * 6 = 36. Volumen = (36 * 10) / 3 = 120 cm³.",
      veri: "Recuerde que el volumen de una pirámide es un tercio del de un prisma con la misma base y altura.",
      dibujo: `<svg viewBox="0 0 200 180" class="w-full max-w-xs mx-auto mb-4">
          <polygon points="100,20 40,140 160,140" fill="#f1f5f9" stroke="#3b82f6" stroke-width="2"/>
          <line x1="100" y1="20" x2="100" y2="140" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4"/>
          <text x="105" y="80" fill="#f43f5e" font-size="12" font-weight="bold">h=10</text>
          
          <path d="M40 140 L80 160 L160 140" fill="none" stroke="#3b82f6" stroke-width="2"/>
          <path d="M80 160 L100 20" fill="none" stroke="#3b82f6" stroke-width="2"/>
          
          <text x="100" y="170" text-anchor="middle" fill="#1e40af" font-size="12">Base = 6x6</text>
      </svg>`
  }
];
