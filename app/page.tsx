import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "GraphQL",
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "quoc.khanh@example.com", href: "mailto:2000004701@nttu.edu.vn"},
    { icon: Phone, label: "Phone", value: "0937390710", href: "#" },
    { icon: MapPin, label: "Location", value: "VIET NAM", href: "#" },
    { icon: Github, label: "GitHub", value: "https://github.com/khank956", href:"https://github.com/khank956"},
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/quockhanh",
      href: "https://linkedin.com/in/quockhanh",
    },
    { icon: Globe, label: "Website", value: "quockhanh.dev", href: "https://quockhanh.dev" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section with Profile Picture */}
        <div className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/download.jpg"
              alt="Quoc Khanh Profile Picture"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Quoc Khanh</h1>
          <p className="text-xl text-gray-600 font-medium">Full Stack Developer</p>
        </div>

        {/* About Section */}
        <Card className="mb-8 shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">About Me</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a passionate full stack developer and an Information Technology student with 1 year of hands-on experience in building web applications and digital solutions.
                 I specialize in modern JavaScript frameworks and am continuously developing my skills in both frontend and backend development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                My journey in tech started from a love of problem-solving and has grown into a passion for creating user-friendly and impactful applications.
                 I enjoy learning by doing, working in collaborative teams, and expanding my knowledge through real-world projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
               When I'm not coding, I enjoy exploring new technologies, reading tech blogs, and occasionally contributing to small open-source projects.
                I strongly believe in lifelong learning and in sharing knowledge within the developer community.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="justify-center py-2 px-3 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">{contact.label}</p>
                      <p className="text-sm text-gray-600 truncate">{contact.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">© 2024 Quoc Khanh. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  )
}
