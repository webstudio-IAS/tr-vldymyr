import { motion } from "framer-motion";
import { Truck, MapPin, PackageOpen, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Local Transport",
    description: "Fast and efficient transport services within your city and surrounding areas. We handle every shipment with care.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    title: "Long Distance Hauling",
    description: "Reliable long-distance transport across regions with dedicated trucks ensuring your cargo arrives safely and on schedule.",
    icon: Truck,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
  },
  {
    title: "Packing & Loading",
    description: "Professional packing and secure loading services to protect your goods during transit. We bring the materials and the expertise.",
    icon: PackageOpen,
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/50",
  },
  {
    title: "Commercial Moves",
    description: "Office and business relocations designed to minimize downtime. We work around your schedule to keep your operations running.",
    icon: Building2,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/50",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6" data-testid="text-services-title">
            Professional Transport Solutions
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            WFITS offers comprehensive transport and moving solutions tailored to your specific needs. From a single item to a full business relocation, we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-white dark:bg-slate-800" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
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
