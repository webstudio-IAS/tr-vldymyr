import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertMessageSchema>;

export function ContactForm() {
  const mutation = useCreateMessage();
  
  const form = useForm<FormData>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/50 border-slate-200 focus:border-primary focus:ring-primary/20 h-12 rounded-xl" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    type="email"
                    className="bg-white/50 border-slate-200 focus:border-primary focus:ring-primary/20 h-12 rounded-xl" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700">Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(555) 123-4567" 
                  className="bg-white/50 border-slate-200 focus:border-primary focus:ring-primary/20 h-12 rounded-xl" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700">Move Details</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your move (from/to, date, size of home)..." 
                  className="min-h-[120px] bg-white/50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full h-14 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Get Free Estimate
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
