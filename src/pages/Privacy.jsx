import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, post listings, send messages, or contact us for support. This includes your name, email address, phone number, and any content you post on our platform."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our platform."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure."
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting us directly. You also have the right to opt-out of certain communications from us."
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@globalboard.com or through our support center."
    }
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#99999b] text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-[#99999b] text-sm mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-[#1f1f1f] border-none mb-8">
          <CardContent className="p-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-[#99999b] leading-relaxed mb-4">
              Global Board World ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform.
            </p>
            <p className="text-[#99999b] leading-relaxed">
              By using our service, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5648ff]/20 rounded-full flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-[#5648ff]" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#99999b] leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="bg-[#1f1f1f] border-none mt-8">
          <CardHeader>
            <CardTitle className="text-white">Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-[#99999b] leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us:
            </p>
            <ul className="text-[#99999b] space-y-2 ml-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Remember your preferences and settings
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Understand how you use our platform
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Improve our services and user experience
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Provide personalized content and recommendations
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#1f1f1f] border-none mt-6">
          <CardHeader>
            <CardTitle className="text-white">Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#99999b] leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 p-8 bg-[#0f0f0f] rounded-lg text-center">
          <h3 className="text-white text-xl font-semibold mb-4">Questions About Your Privacy?</h3>
          <p className="text-[#99999b] mb-6">
            If you have any questions or concerns about this Privacy Policy, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-[#99999b] text-sm">
            <div>Email: privacy@globalboard.com</div>
            <div>Support: help@globalboard.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy 