"use server";

import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    throw new Error("Name, email, and message are required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please provide a valid email address.");
  }

  // TODO: Integrate with your preferred email service or CRM
  // e.g., sendEmail({ to: "info@idealhome.com", subject: `New inquiry from ${name}`, ... })
  console.log("Contact form submission:", { name, email, phone, message });

  revalidatePath("/");
}
