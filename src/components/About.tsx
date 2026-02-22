export default function About() {
  return (
    <section id="about" className="section-pad bg-charcoal text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium mb-5">
              Building Africa&apos;s digital future
            </h2>

            <p className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed">
              Africa faces persistent challenges in healthcare, financial inclusion,
              workforce management, and digital services. At Casa Africa, we believe
              the solutions should be built here.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              We design, build, and sell practical software that improves efficiency,
              transparency, and access across critical African sectors.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="card-subtle">
              <h3 className="text-lg font-medium mb-2 text-terracotta">Vision</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                To become a leading African software house delivering trusted, scalable
                digital solutions that power institutions, businesses, and everyday life.
              </p>
            </div>

            <div className="card-subtle">
              <h3 className="text-lg font-medium mb-2 text-ochre">Mission</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                To build and commercialize practical software products that improve
                efficiency, transparency, access, and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
