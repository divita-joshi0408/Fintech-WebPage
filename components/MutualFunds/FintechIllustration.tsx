'use client'

export default function FintechIllustration() {
    return (
        <svg
            viewBox="0 0 1200 675"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Gradients */}
                <linearGradient id="laptopScreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0a1428', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0f1a2e', stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0d0d0d', stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="chartGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#9abd2d', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#9abd2d', stopOpacity: 0.7 }} />
                </linearGradient>

                <linearGradient id="chartGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#2C476A', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#2C476A', stopOpacity: 0.7 }} />
                </linearGradient>

                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#9abd2d', stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: '#2C476A', stopOpacity: 0.05 }} />
                </linearGradient>

                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.25" />
                </filter>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.2" />
                </filter>

                <filter id="screenGlow">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
            </defs>

            {/* Background glow */}
            <rect width="1200" height="675" fill="url(#glowGradient)" />

            {/* LAPTOP - Center-Right */}
            <g filter="url(#shadow)">
                {/* Laptop Stand/Base */}
                <path
                    d="M 420 480 L 450 520 L 750 520 L 780 480 Z"
                    fill="#4a5a7a"
                    opacity="0.9"
                />

                {/* Laptop Base Plate */}
                <rect x="390" y="480" width="420" height="40" rx="6" fill="#5a6a8a" />

                {/* Laptop Screen Back - Premium metal finish */}
                <rect x="410" y="160" width="380" height="320" rx="16" fill="#2a3a5a" opacity="0.95" />
                <rect x="410" y="160" width="380" height="320" rx="16" fill="url(#laptopScreenGradient)" />

                {/* Screen Bezel - Metallic */}
                <rect x="402" y="152" width="396" height="336" rx="18" fill="none" stroke="#3a4a6a" strokeWidth="12" />

                {/* Screen Glow */}
                <rect x="420" y="168" width="364" height="304" rx="14" fill="none" stroke="#9abd2d" strokeWidth="1" opacity="0.3" />

                {/* Dashboard Content Inside Screen */}
                <g clipPath="url(#laptopClip)">
                    {/* Dashboard Header Bar */}
                    <rect x="420" y="168" width="364" height="45" fill="#1a2a4a" rx="12" />
                    <circle cx="435" cy="190" r="4" fill="#9abd2d" opacity="0.6" />
                    <text x="450" y="195" fill="#9abd2d" fontSize="13" fontWeight="bold" fontFamily="Arial">
                        Investment Dashboard
                    </text>

                    {/* Portfolio Value */}
                    <text x="430" y="235" fill="#ffffff" fontSize="12" fontWeight="600" fontFamily="Arial">
                        Portfolio Value
                    </text>
                    <text x="430" y="255" fill="#9abd2d" fontSize="28" fontWeight="bold" fontFamily="Arial">
                        ₹2,45,680
                    </text>

                    {/* Growth Badge */}
                    <rect x="500" y="235" width="70" height="28" fill="#9abd2d" opacity="0.2" rx="6" />
                    <text x="535" y="255" fill="#9abd2d" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Arial">
                        ↑ 18.5%
                    </text>

                    {/* Mini Chart - Bar Graph */}
                    <g>
                        <text x="430" y="285" fill="#ffffff" fontSize="11" fontWeight="600" fontFamily="Arial">
                            Fund Performance
                        </text>
                        {/* Bar 1 */}
                        <rect x="435" y="300" width="16" height="50" fill="#9abd2d" rx="3" opacity="0.7" />
                        {/* Bar 2 */}
                        <rect x="460" y="280" width="16" height="70" fill="#9abd2d" rx="3" opacity="0.8" />
                        {/* Bar 3 */}
                        <rect x="485" y="260" width="16" height="90" fill="#9abd2d" rx="3" />
                        {/* Bar 4 */}
                        <rect x="510" y="275" width="16" height="75" fill="#9abd2d" rx="3" opacity="0.8" />
                        {/* Bar 5 */}
                        <rect x="535" y="295" width="16" height="55" fill="#9abd2d" rx="3" opacity="0.7" />
                        {/* Bar 6 */}
                        <rect x="560" y="240" width="16" height="110" fill="#9abd2d" rx="3" opacity="0.9" />
                    </g>

                    {/* Fund List Items */}
                    <g>
                        <text x="430" y="380" fill="#ffffff" fontSize="11" fontWeight="600" fontFamily="Arial">
                            Top Holdings
                        </text>

                        {/* Fund 1 */}
                        <rect x="430" y="390" width="330" height="32" fill="url(#chartGradient1)" opacity="0.3" rx="6" />
                        <text x="442" y="405" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="Arial">
                            HDFC Growth Fund
                        </text>
                        <text x="442" y="418" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                            ₹45,200 • +12.8%
                        </text>

                        {/* Fund 2 */}
                        <rect x="430" y="428" width="330" height="32" fill="url(#chartGradient2)" opacity="0.25" rx="6" />
                        <text x="442" y="443" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="Arial">
                            Axis Bluechip Fund
                        </text>
                        <text x="442" y="456" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                            ₹65,400 • +22.5%
                        </text>
                    </g>
                </g>
            </g>

            {/* SMARTPHONE - Right Side */}
            <g filter="url(#shadow)" transform="translate(820, 240)">
                {/* Phone Notch */}
                <rect x="0" y="0" width="140" height="8" fill="#1a1a1a" rx="0" />

                {/* Phone Body */}
                <rect x="0" y="8" width="140" height="310" rx="24" fill="url(#phoneGradient)" />
                <rect x="0" y="8" width="140" height="310" rx="24" fill="none" stroke="#3a3a3a" strokeWidth="3" />

                {/* Screen */}
                <rect x="8" y="14" width="124" height="298" rx="20" fill="#0a0e27" />

                {/* Status Bar */}
                <rect x="8" y="14" width="124" height="24" fill="#1a2a4a" rx="16" />
                <text x="70" y="32" fill="#9abd2d" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Arial">
                    9:41
                </text>

                {/* App Header */}
                <text x="70" y="62" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Arial">
                    My Portfolio
                </text>

                {/* Total Value */}
                <text x="22" y="85" fill="#9abd2d" fontSize="11" fontWeight="600" fontFamily="Arial">
                    Total Value
                </text>
                <text x="22" y="103" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="Arial">
                    ₹2,45,680
                </text>

                {/* Fund Cards */}
                <g>
                    {/* Card 1 */}
                    <rect x="16" y="115" width="108" height="50" rx="10" fill="url(#chartGradient1)" opacity="0.4" />
                    <text x="24" y="130" fill="#ffffff" fontSize="9" fontWeight="600" fontFamily="Arial">
                        Large Cap
                    </text>
                    <text x="24" y="145" fill="#9abd2d" fontSize="11" fontWeight="bold" fontFamily="Arial">
                        ₹1.2L
                    </text>
                    <text x="110" y="145" fill="#9abd2d" fontSize="9" textAnchor="end" fontFamily="Arial">
                        +15%
                    </text>

                    {/* Card 2 */}
                    <rect x="16" y="172" width="108" height="50" rx="10" fill="url(#chartGradient2)" opacity="0.35" />
                    <text x="24" y="187" fill="#ffffff" fontSize="9" fontWeight="600" fontFamily="Arial">
                        Balanced
                    </text>
                    <text x="24" y="202" fill="#9abd2d" fontSize="11" fontWeight="bold" fontFamily="Arial">
                        ₹89.4K
                    </text>
                    <text x="110" y="202" fill="#9abd2d" fontSize="9" textAnchor="end" fontFamily="Arial">
                        +8%
                    </text>

                    {/* Card 3 */}
                    <rect x="16" y="229" width="108" height="50" rx="10" fill="url(#chartGradient1)" opacity="0.35" />
                    <text x="24" y="244" fill="#ffffff" fontSize="9" fontWeight="600" fontFamily="Arial">
                        Small Cap
                    </text>
                    <text x="24" y="259" fill="#9abd2d" fontSize="11" fontWeight="bold" fontFamily="Arial">
                        ₹44.1K
                    </text>
                    <text x="110" y="259" fill="#9abd2d" fontSize="9" textAnchor="end" fontFamily="Arial">
                        +25%
                    </text>
                </g>

                {/* Home Indicator */}
                <rect x="50" y="315" width="40" height="4" rx="2" fill="#ffffff" opacity="0.4" />
            </g>

            {/* FLOATING CHART ELEMENT - Left Side */}
            <g filter="url(#softGlow)" opacity="0.85">
                {/* Chart Background */}
                <rect x="280" y="120" width="200" height="160" rx="14" fill="#2a3a5a" opacity="0.6" />
                <rect x="280" y="120" width="200" height="160" rx="14" fill="none" stroke="#9abd2d" strokeWidth="1.5" opacity="0.4" />

                {/* Chart Title */}
                <text x="295" y="145" fill="#9abd2d" fontSize="12" fontWeight="bold" fontFamily="Arial">
                    Growth Trend
                </text>

                {/* Line Chart Path */}
                <polyline
                    points="305,195 335,170 365,150 395,140 410,130"
                    fill="none"
                    stroke="#9abd2d"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Chart Points */}
                <circle cx="305" cy="195" r="4" fill="#9abd2d" />
                <circle cx="410" cy="130" r="4" fill="#9abd2d" />

                {/* Percentage Value */}
                <text x="295" y="250" fill="#9abd2d" fontSize="14" fontWeight="bold" fontFamily="Arial">
                    +18.5%
                </text>
                <text x="295" y="265" fill="#ffffff" fontSize="10" fontFamily="Arial">
                    YTD Growth
                </text>
            </g>

            {/* ANALYTICS RINGS - Center Background */}
            <g opacity="0.6">
                {/* Large Ring */}
                <circle cx="600" cy="380" r="80" fill="none" stroke="#9abd2d" strokeWidth="2" opacity="0.15" />
                <circle cx="600" cy="380" r="60" fill="none" stroke="#9abd2d" strokeWidth="1.5" opacity="0.1" />
            </g>

            {/* UPWARD TREND VISUALIZATION - Top Center */}
            <g opacity="0.9">
                {/* Arrow Stem */}
                <line x1="600" y1="280" x2="600" y2="380" stroke="#9abd2d" strokeWidth="3" opacity="0.5" />

                {/* Arrow Head */}
                <polygon points="600,260 615,280 585,280" fill="#9abd2d" opacity="0.8" />

                {/* Accent Elements */}
                <circle cx="600" cy="260" r="8" fill="none" stroke="#9abd2d" strokeWidth="2" opacity="0.4" />
            </g>

            {/* PROFESSIONAL INVESTOR PROFILE - Bottom Right */}
            <g filter="url(#softGlow)" opacity="0.9">
                {/* Background */}
                <rect x="800" y="520" width="220" height="120" rx="14" fill="#2a3a5a" opacity="0.7" />
                <rect x="800" y="520" width="220" height="120" rx="14" fill="none" stroke="#9abd2d" strokeWidth="1.5" opacity="0.3" />

                {/* Avatar */}
                <circle cx="835" cy="550" r="18" fill="#9abd2d" opacity="0.2" />
                <text x="835" y="557" fill="#9abd2d" fontSize="18" textAnchor="middle">
                    👨‍💼
                </text>

                {/* Profile Details */}
                <text x="860" y="545" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Arial">
                    Rahul Sharma
                </text>
                <text x="860" y="560" fill="#9abd2d" fontSize="10" fontFamily="Arial">
                    Investor since 2021
                </text>

                {/* Stats */}
                <text x="815" y="585" fill="#ffffff" fontSize="10" fontFamily="Arial">
                    Invested
                </text>
                <text x="995" y="585" fill="#9abd2d" fontSize="11" fontWeight="bold" textAnchor="end" fontFamily="Arial">
                    ₹5.2L
                </text>

                <text x="815" y="605" fill="#ffffff" fontSize="10" fontFamily="Arial">
                    Returns
                </text>
                <text x="995" y="605" fill="#9abd2d" fontSize="11" fontWeight="bold" textAnchor="end" fontFamily="Arial">
                    +32.8%
                </text>
            </g>

            {/* WEALTH MANAGEMENT INDICATOR - Bottom Left */}
            <g filter="url(#softGlow)" opacity="0.88">
                {/* Background */}
                <rect x="280" y="520" width="190" height="110" rx="12" fill="#2a3a5a" opacity="0.7" />
                <rect x="280" y="520" width="190" height="110" rx="12" fill="none" stroke="#9abd2d" strokeWidth="1.5" opacity="0.3" />

                {/* Icon Circle */}
                <circle cx="310" cy="545" r="16" fill="#9abd2d" opacity="0.2" />
                <text x="310" y="552" fill="#9abd2d" fontSize="16" textAnchor="middle">
                    💰
                </text>

                {/* Text */}
                <text x="335" y="543" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Arial">
                    Wealth Management
                </text>
                <text x="335" y="558" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                    Expert guidance
                </text>
                <text x="335" y="573" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                    for your portfolio
                </text>
            </g>

            {/* SECURITY CERTIFICATION - Bottom Center-Left */}
            <g filter="url(#softGlow)" opacity="0.88">
                {/* Background */}
                <rect x="500" y="520" width="180" height="110" rx="12" fill="#2a3a5a" opacity="0.7" />
                <rect x="500" y="520" width="180" height="110" rx="12" fill="none" stroke="#9abd2d" strokeWidth="1.5" opacity="0.3" />

                {/* Icon Circle */}
                <circle cx="525" cy="545" r="16" fill="#9abd2d" opacity="0.2" />
                <text x="525" y="552" fill="#9abd2d" fontSize="16" textAnchor="middle">
                    🔒
                </text>

                {/* Text */}
                <text x="550" y="543" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Arial">
                    Bank-Level Security
                </text>
                <text x="550" y="558" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                    Encrypted
                </text>
                <text x="550" y="573" fill="#9abd2d" fontSize="9" fontFamily="Arial">
                    ISO 27001 Certified
                </text>
            </g>

            {/* DECORATIVE GEOMETRIC ELEMENTS */}
            <g opacity="0.3">
                {/* Top Left Circle */}
                <circle cx="180" cy="100" r="35" fill="none" stroke="#9abd2d" strokeWidth="2" />
                <circle cx="180" cy="100" r="25" fill="none" stroke="#9abd2d" strokeWidth="1" />

                {/* Bottom Right Square */}
                <rect x="1020" y="580" width="50" height="50" fill="none" stroke="#9abd2d" strokeWidth="2" opacity="0.5" />
                <rect x="1030" y="590" width="30" height="30" fill="none" stroke="#9abd2d" strokeWidth="1" />
            </g>

            {/* CLIP PATHS */}
            <clipPath id="laptopClip">
                <rect x="420" y="168" width="364" height="304" rx="12" />
            </clipPath>
        </svg>
    )
}
