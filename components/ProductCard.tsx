import { useLocaleContext } from "@/context/LocaleProvider";
import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  ref?: (el: HTMLDivElement | null) => void;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  icon,
  href = "/service/wardrobes",
  ariaLabel,
  ref,
}: ProductCardProps) => {
  const { dir } = useLocaleContext();

  return (
    <div
      ref={ref}
      className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-[2px] transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:shadow-[0_0_20px_rgb(var(--primary)/0.4)]"
    >
      <div
        className="relative overflow-hidden"
        style={{ height: "clamp(220px, 32vh, 380px)" }}
      >
        <Image
          alt={title}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] absolute inset-0 text-transparent"
          sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
          src={imageUrl}
          width={800}
          height={600}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent"></div>
        <div className="absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
          {icon}
        </div>
      </div>
      <div className="flex flex-1 flex-row w-full items-center justify-between px-5 py-5">
        <div>
          <h4 className="font-inter text-2xl font-semibold leading-normal text-white">
            {title}
          </h4>
          <p className="font-inter text-base font-normal leading-normal text-white/90">
            {description}
          </p>
        </div>
        <div className={`mt-auto flex ${dir === "rtl" ? "justify-start" : "justify-end"}`}>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-teal transition-all duration-300 hover:bg-brand-teal/90 hover:shadow-[0_0_20px_rgba(87,183,192,0.28)]"
            aria-label={ariaLabel ?? `Learn more about ${title}`}
            href={href}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-arrow-right h-4 w-4 text-white ${dir === "rtl" ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
