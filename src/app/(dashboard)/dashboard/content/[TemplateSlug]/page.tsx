import InputFormSection from "@/app/(dashboard)/_components/InputFormSection";
import OutputSection from "@/app/(dashboard)/_components/OutputSection";
import { TemplatesDataProps } from "@/app/(dashboard)/_components/Templates";
import { TemplatesData } from "@/constants/TemplatesData";

interface ParamsProps {
  TemplateSlug: string;
}

const CreateContent = ({
  params: { TemplateSlug },
}: {
  params: ParamsProps;
}) => {
  const selectedTemplate: TemplatesDataProps | undefined = TemplatesData.find(
    (template) => template.slug === TemplateSlug
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <InputFormSection templateData={selectedTemplate!} />
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
};
export default CreateContent;
