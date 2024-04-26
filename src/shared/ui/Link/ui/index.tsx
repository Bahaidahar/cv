"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

interface IMyLink {
  href: string;
  text: React.ReactNode;
}

const MyLink = ({ href, text }: IMyLink) => {
  const params = useParams();
  const locale = params["locale"];
  return <Link href={`/${locale}${href}`}>{text}</Link>;
};

export default MyLink;
