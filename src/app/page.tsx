"use client";

import client from "@/api/axios";
import TypographyH1 from "@/components/TypographyH1";
import Contact from "@/constants/contacts/types";
import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import Link from "next/link";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await client.get("/users");
        if (response.status === 200) {
          setContacts(response.data);
        }
      } catch (error) {
        console.error("There was an API error: " + error)
      }
    }

    fetch();
  }, []);

  return (
    <section className="flex flex-col">
      <TypographyH1>Contacts</TypographyH1>
      <div id="contact-cards" className="grid md:grid-cols-3 grid-cols-1 gap-7 p-0 mt-6">
        {contacts.map(contact => (
          <Link key={contact.id} href={`/contacts/${contact.id}`}>
            <ContactCard contact={contact} />
          </Link>
        ))}
      </div>
    </section>
  );
}
