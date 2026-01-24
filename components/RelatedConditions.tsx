import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedCondition {
  title: string;
  description: string;
  link: string;
}

interface RelatedConditionsProps {
  conditions: RelatedCondition[];
}

export const RelatedConditions = ({ conditions }: RelatedConditionsProps) => {
  if (conditions.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-center">
            Related Conditions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 leading-relaxed">
            You may also be interested in learning about these related conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={condition.link}
                  className="group block p-5 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {condition.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
