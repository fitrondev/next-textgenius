"use client";

import { TemplatesData } from "@/constants/TemplatesData";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export type TemplatesDataProps = {
  name: string;
  desc: string;
  category?: string;
  icon: string;
  aiPrompt?: string;
  slug: string;
  formTemplates?: formTemplate[];
};

interface formTemplate {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

type TemplatesProps = {
  searchQuery: string;
};

const Templates = ({ searchQuery }: TemplatesProps) => {
  const [filteredTemplates, setFilteredTemplates] = useState(TemplatesData);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTemplates(TemplatesData);
    } else {
      setFilteredTemplates(
        TemplatesData.filter((template) =>
          template.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  return (
    <section className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-7 sm:gap-y-4 lg:gap-y-7">
      {filteredTemplates.map((item, index) => (
        <TemplateCard
          key={index}
          name={item.name}
          desc={item.desc}
          icon={item.icon}
          slug={item.slug}
        />
      ))}
    </section>
  );
};
export default Templates;
