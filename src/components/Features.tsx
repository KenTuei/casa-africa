import {
  PenTool,
  CheckCircle2,
  BadgeDollarSign,
  Layers,
  Zap,
  Smile
} from 'lucide-react';

const features = [
  {
    title: 'Africa-first design',
    description: 'Every product built with African realities in mind—local contexts, constraints, and opportunities.',
    icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'Problem-driven solutions',
    description: 'We solve real operational challenges with practical, production-ready software.',
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'Cost-effective',
    description: 'Lower costs than global competitors without compromising on quality or functionality.',
    icon: <BadgeDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'Multi-sector coverage',
    description: 'From healthcare to finance, HR to e-commerce—one partner for all your software needs.',
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'Practical & Scalable',
    description: 'Production-ready software designed for immediate deployment and long-term growth.',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'User Experience Focus',
    description: 'Strong focus on usability and real-world adoption. Software people actually want to use.',
    icon: <Smile className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-cream">
      <div className="container-max">
        <div className="mb-8 animate-fade-in-up">
          <h2 className="heading-section text-charcoal mb-3">
            Why Mberi LTD
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg">
            A software company built in Africa, for Africa. We understand the challenges
            because we live and work here. Our solutions are practical, affordable, and
            designed for real-world adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`group border-l-2 border-terracotta/50 pl-4 sm:pl-5 hover:border-terracotta transition-colors duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sand flex items-center justify-center text-terracotta mb-3 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-charcoal mb-2">{feature.title}</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
