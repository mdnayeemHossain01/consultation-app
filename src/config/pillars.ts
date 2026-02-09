import { Landmark, FileText, Scale, Home } from 'lucide-react';

export const PILLARS = [
  {
    title: "Immigration Services",
    description: "Green Cards, Citizenship, and Asylum applications.",
    icon: Landmark,
    color: "bg-blue-100 text-blue-700",
    details: [
      "Family Petition (I-130)",
      "Adjustment of Status",
      "Citizenship (N-400)",
      "Asylum Applications"
    ],
    documents: ["Passport", "Birth Certificate", "Proof of Income", "Marriage Certificate"],
    duration: "1 - 2 Hours",
    fee: "Starting at $150",
  },
  {
    title: "Tax Preparation",
    description: "Personal 1040, Business filing, and ITIN setup.",
    icon: FileText,
    color: "bg-green-100 text-green-700",
    details: [
      "Personal Income Tax",
      "Business Tax (LLC/Corp)",
      "ITIN Application (W-7)",
      "State Tax Filing"
    ],
    documents: ["W-2 or 1099 Forms", "ID / Driver's License", "Social Security Cards", "Last Year's Return"],
    duration: "45 Minutes",
    fee: "Starting at $80",
  },
  {
    title: "Notary & Legal",
    description: "Affidavits, Power of Attorney, and Translations.",
    icon: Scale,
    color: "bg-purple-100 text-purple-700",
    details: [
      "Document Notarization",
      "Power of Attorney",
      "Affidavit of Support",
      "Document Translation"
    ],
    documents: ["Valid Photo ID", "Original Document", "Witness (if required)"],
    duration: "15 - 30 Minutes",
    fee: "$20 per signature",
  },
  {
    title: "Housing & Community",
    description: "Lease review, SNAP benefits, and advocacy.",
    icon: Home,
    color: "bg-orange-100 text-orange-700",
    details: [
      "Lease Agreement Review",
      "SNAP / Food Stamps",
      "Public Housing Applications",
      "Tenant Rights Advocacy"
    ],
    documents: ["Proof of Address", "Income Verification", "Lease Copy", "ID for all household members"],
    duration: "1 Hour",
    fee: "Consultation Free / Filing $50",
  },
];