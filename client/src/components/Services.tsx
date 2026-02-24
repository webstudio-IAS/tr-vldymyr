import { motion } from "framer-motion";
import { Map, MapPin, PackageOpen, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Local Moving",
    description: "Fast, efficient, and careful moving services within your city or neighborhood.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Long Distance",
    description: "Dedicated long-haul fleets ensuring your items cross state lines securely.",
    icon: Map,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Packing & Unpacking",
    description: "Professional packing with premium materials to protect your most fragile items.",
    icon: PackageOpen,
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    title: "Commercial Moves",
    description: "Minimal downtime office relocations tailored to your business schedule.",
    icon: Building2,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Everything You Need For A Perfect Move
          </h3>
          <p className="text-lg text-slate-600">
            We offer comprehensive moving solutions tailored to your specific needs. From a single room to a corporate headquarters, we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
