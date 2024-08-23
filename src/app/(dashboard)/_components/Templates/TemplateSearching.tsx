"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";

const FormSchema = z.object({
  search: z.string().min(3, {
    message: "Username must be at least 2 characters.",
  }),
});

interface TemplateSearchingProps {
  onSearchChange: (query: string) => void;
}

const TemplateSearching = ({ onSearchChange }: TemplateSearchingProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onSearchChange(data.search);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    onSearchChange(value);
  }

  return (
    <section className="w-full h-[250px] bg-gradient-to-r from-slate-900 to-slate-700 text-background flex flex-col items-center justify-center gap-4">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Browser All Templates</h3>
        <p className="text-lg font-medium">What will you create today?</p>
      </div>

      <div className="text-primary">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search here ..."
                      {...field}
                      autoComplete="off"
                      className="w-[300px]"
                      onChange={(event) => {
                        field.onChange(event);
                        handleChange(event);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit">
              <SearchIcon />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
export default TemplateSearching;
