export default function FAQ() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-gochi mb-2">
          Frequently Asked{" "}
          <span className="text-[var(--primary)]">Questions</span>
        </h2>
        <div className="mx-auto h-1 w-40 bg-[var(--primary)] rounded-[var(--radius)] mb-12" />

        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-gochi">
              What does CRY America do as a non-profit organization for
              children?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              CRY America is a non-profit organization dedicated to ensuring
              underserved children’s rights to education, healthcare, and
              protection. It works to keep children in school, promotes girls’
              education, improves nutrition and healthcare access, and protects
              vulnerable children from child labor and child marriage. Through
              partnerships with grassroots organizations in India, CRY America
              empowers communities to create lasting change.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-gochi">
              How is CRY America different from other NGOs for children?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              CRY America stands out from other NGOs for children because it
              goes beyond offering temporary relief. It works to address the
              root causes of poverty, lack of education that make children
              vulnerable to child labor and early marriage, and poor nutrition.
              Through these efforts, it creates ripples of change that spread
              and last. It empowers children to become advocates of change
              rather than mere beneficiaries, giving them the voice, confidence,
              and opportunity to shape a brighter future for themselves and
              their communities.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-gochi">
              How can I support CRY America’s work for underprivileged children?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              You can support CRY America’s underserved children in several
              ways. Make a one-time contribution to help immediately, or choose
              a monthly donation to provide consistent support. You can also
              support a specific project to create a bigger impact. Every
              contribution helps empower children and improve their lives,
              giving them hope, opportunity, and a brighter future.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-gochi">
              Are donations to CRY America tax-deductible?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              CRY America is a 501c3 tax-exempt organization and all donations
              made to CRY America are tax-deductible. Please note that these tax
              exemption receipts apply only to U.S. residents and cannot be used
              for tax deductions outside the United States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
