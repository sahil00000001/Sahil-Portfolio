import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-portfolio";
import { FadeIn } from "../animations/FadeIn";
import { Mail, MapPin, Send, Phone } from "lucide-react";
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

export function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: InsertContactMessage) {
    mutation.mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <section id="contact" className="py-32 relative bg-black/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Drop me a message and let's build something extraordinary together.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass flex flex-shrink-0 items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:vashishtsahil99@gmail.com" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                    vashishtsahil99@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass flex flex-shrink-0 items-center justify-center text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-muted-foreground mt-1">
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass flex flex-shrink-0 items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-muted-foreground mt-1">9625107920</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                  "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'" <br/>— Steve McConnell
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="glass p-8 rounded-3xl border border-white/[0.05]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-black/40 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-black/40 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            {...field} 
                            className="bg-black/40 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white min-h-[150px] rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-[0_0_20px_rgba(138,43,226,0.25)] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {mutation.isPending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
