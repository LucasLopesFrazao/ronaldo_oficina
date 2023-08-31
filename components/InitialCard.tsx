import Link from "next/link";

interface InitialCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
}

export default function InitialCard({
  icon,
  title,
  desc,
  href = "/",
}: InitialCardProps) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 transform transition-transform duration-500 hover:scale-110 cursor-pointer">
      <Link href={href}>
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            {icon}
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{desc}</p>
        </div>
      </Link>
    </div>
  );
}
