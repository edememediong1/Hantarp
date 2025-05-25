import FeatureList from "./Feature_list"

export default function FeatureListDemo() {
  const features = [
    {
      title: "Radical Transparency",
      description: "No hidden fees, no jargon",
    },
    {
      title: "Relentless Improvement",
      description: "Quarterly penetration testing as standard",
    },
    {
      title: "Customer Obsession",
      description: "SLA-backed responses in ≤30 mins",
    },
  ]

  return (
    <div className="py-8 px-4 md:px-8 md:py-12 bg-white">
      <h2 className="text-3xl font-bold mb-6 md:mb-10 text-[#004A61] ">Our Values</h2>
      <FeatureList features={features} />
    </div>
  )
}