import { motion } from "framer-motion";
import { Camera, Truck, Users, Wrench } from "lucide-react";

const fleetItems = [
  {
    title: "Moving Trucks",
    description: "Our modern fleet of moving trucks, ready for any job size.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Professional Team",
    description: "Experienced movers who handle your belongings with care.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Specialized Equipment",
    description: "Top-quality packing materials and transport equipment.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Loading in Action",
    description: "Careful loading and securing of every item we transport.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
  },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Fleet & Team</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6" data-testid="text-fleet-title">
            Built for Every Job
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            From local deliveries to long-distance hauls, our well-maintained fleet and experienced team are ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {fleetItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              data-testid={`card-fleet-${index}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center mb-2">
                  <item.icon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                  <h4 className="text-white font-bold text-base sm:text-lg">{item.title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            Replace these images with real photos of your trucks and team
          </p>
        </div>
      </div>
    </section>
  );
}
