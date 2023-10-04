import { ClassesT } from "@/utilites/type";
import { overlayStyles } from "@/utilites/myTailwindCSS";

export default function Class({ name, description, image }: ClassesT) {
  return (
    <li className="relative mx-6 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
}
