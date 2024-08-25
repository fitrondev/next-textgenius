import Image from "next/image";
import Link from "next/link";
import { TemplatesDataProps } from ".";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot } from "lucide-react";

const TemplateCard = ({ name, desc, icon, slug }: TemplatesDataProps) => {
  return (
    <Card className="w-[350px] h-[280px] sm:w-[280px] md:w-[250px] lg:size-[280px] shadow-md">
      <CardHeader className="items-center">
        <Image src={icon} alt="" width={60} height={60} loading="lazy" />
        <CardTitle className="text-lg text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-2 text-center">{desc}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button className="w-full" asChild>
          <Link href={`/dashboard/content/${slug}`}>
            <Bot className="mr-2" /> Use Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TemplateCard;
