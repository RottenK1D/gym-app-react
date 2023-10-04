import { BenefitT } from "@/utilites/type";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { hText } from "@/utilites/myTailwindCSS";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function BenefitsList({ icon, title, description }: BenefitT) {
  return (
    <motion.div
      className="mt-6 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center ">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-4">{description}</p>
      <AnchorLink>
        <h1 className={`${hText}`}></h1>
      </AnchorLink>
    </motion.div>
  );
}
