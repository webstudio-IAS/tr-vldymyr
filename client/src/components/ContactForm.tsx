import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send, CheckCircle } from "lucide-react";
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

  if (mutation.isSuccess) {
    return (
      <div className="text-center py-12" data-testid="text-contact-success">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
        <p className="text-slate-600 mb-6">Our team will get back to you shortly.</p>
        <Button
          variant="outline"
          onClick={() => mutation.reset()}
          data-testid="button-send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

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
                    data-testid="input-name"
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
                    data-testid="input-email"
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
                  placeholder="+49 123 456789" 
                  data-testid="input-phone"
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
              <FormLabel className="text-slate-700">Transport Details</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your transport needs (from/to, date, items)..." 
                  className="min-h-[120px] resize-none" 
                  data-testid="input-message"
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
          className="w-full"
          disabled={mutation.isPending}
          data-testid="button-submit"
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
