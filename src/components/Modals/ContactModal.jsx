import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactBadge from "./ContactBadge";

function ContactDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <ContactBadge />
          <DialogDescription>
            Fill the form below to get in touch with me
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border p-2"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full rounded-md border p-2"
          ></textarea>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
