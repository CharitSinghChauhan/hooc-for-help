export default function FAQ() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-center mb-2">
          Frequently Asked{" "}
          <span className="text-primabg-primary">Questions</span>
        </h2>
        <div className="mx-auto h-1 w-40 bg-primary rounded-radius mb-8 sm:mb-12" />

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl">
              What does Hooc for Help do as a non-profit organization?
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed">
              Hooc for Help is a non-profit organization dedicated to empowering
              underserved communities through education, healthcare, livelihood
              development, and environmental initiatives. It works to provide
              access to quality education, healthcare, economic opportunities,
              and sustainable practices. Through partnerships with local
              organizations, Hooc for Help empowers communities to create
              lasting change.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl">
              How is Hooc for Help different from other NGOs?
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed">
              Hooc for Help stands out from other NGOs because it goes beyond
              temporary relief. It works to address the root causes of poverty,
              lack of education, and environmental degradation that affect
              communities. Through these efforts, it creates ripples of change
              that spread and last. It empowers individuals to become advocates
              of change rather than mere beneficiaries, giving them the voice,
              confidence, and opportunity to shape a brighter future for
              themselves and their communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl">
              How can I support Hooc for Help's work?
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed">
              You can support Hooc for Help in several ways. Make a one-time
              contribution to help immediately, or choose a monthly donation to
              provide consistent support. You can also support a specific
              project to create a bigger impact. Every contribution helps
              empower communities and improve lives, giving people hope,
              opportunity, and a brighter future.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl">
              Are donations to Hooc for Help tax-deductible?
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed">
              Hooc for Help is a 501c3 tax-exempt organization and all donations
              made to Hooc for Help are tax-deductible. Please note that these
              tax exemption receipts apply only to U.S. residents and cannot be
              used for tax deductions outside the United States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
