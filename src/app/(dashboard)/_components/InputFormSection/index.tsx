"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { TemplatesDataProps } from "../Templates";
import { Brain } from "lucide-react";

const formSchema = z.object({
  input: z.string().min(2).max(50),
  textarea: z.string().min(2).max(50),
});

type InputFormSectionProps = {
  templateData: TemplatesDataProps;
};

const InputFormSection = ({ templateData }: InputFormSectionProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      textarea: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="shadow-md border rounded-xl p-4">
      <div className="w-full flex items-center gap-4">
        <Image src={templateData.icon} alt="" width={70} height={70} />
        <div>
          <h3 className="text-2xl font-semibold">{templateData.name}</h3>
          <span className="text-xs text-muted-foreground">
            {templateData.desc}
          </span>
        </div>
      </div>

      <Separator className="mt-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          {templateData.formTemplates?.map((item, index) =>
            item.field === "input" ? (
              <FormField
                key={index}
                control={form.control}
                name={"input"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Write Here..."
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : item.field === "textarea" ? (
              <FormField
                key={index}
                control={form.control}
                name={"textarea"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{item.label}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write Here..."
                        {...field}
                        className="resize-y h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null
          )}

          <Button type="submit" size={"lg"} className="w-full">
            <Brain className="mr-2" /> Generate {templateData.name}
          </Button>
        </form>
      </Form>
    </section>
  );
};
export default InputFormSection;
