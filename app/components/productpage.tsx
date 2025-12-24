"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Package, ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ProductPageProps = {
  id: string
  title: string
  description: string
  image: string
  features: { icon: React.ComponentType<any>; name: string; detail: string }[]
  specs: { section: string; content: string }[]
}

export default function ProductPage({
  id,
  title,
  description,
  image,
  features,
  specs,
}: ProductPageProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    requirements: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      alert(data.message || "✅ Proposal request sent successfully!")
      setFormData({ firstName: "", lastName: "", email: "", department: "", requirements: "" })
    } catch (error) {
      console.error("❌ Error submitting form:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Swaraj Packtech</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Product Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Package className="h-12 w-12 text-red-600" />
              <h1 className="ml-4 text-4xl font-bold text-gray-900">{title}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Request Quote
              </Button>
              <a href="/brochure.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Brochure
                </Button>
              </a>
            </div>
          </div>
          <div>
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <Card key={idx} className="border-orange-200">
                <CardHeader className="text-center">
                  <f.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{f.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{f.detail}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="space-y-6">
                {specs.map((s, idx) => (
                  <div key={idx} className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{s.section}</h3>
                    <p className="text-gray-600">{s.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Technical Specifications"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#fff7f5]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-10">
              {/* Left - Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Interested in {title}? Contact our team for detailed specifications, pricing,
                  and customization options.
                </p>

                <div className="space-y-6 text-gray-700">
                  <p className="flex items-center">
                    <Phone className="mr-3 text-red-500" size={22} /> +91 9096296313 | 7875735123 | 8626016374 | 9921255729
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-3 text-red-500" size={22} /> swarajpacktech2024@gmail.com
                  </p>
                  <p className="flex items-start">
                    <MapPin className="mr-3 text-red-500" size={22} /> PAP - B - 104, Chakan MIDC Phase II,
                    <br /> Bhamboli, Pune, Maharashtra 410501
                  </p>
                </div>
              </div>

              {/* Right - Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-red-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-red-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-red-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-red-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Project Requirements</label>
                  <Textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-red-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 rounded-md hover:opacity-90"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Request Proposal"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
