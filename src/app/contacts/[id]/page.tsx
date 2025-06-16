import client from "@/api/axios";
import TypographyH1 from "@/components/TypographyH1";
import Contact from "@/constants/contacts/types";

export default async function ContactDetail({ params }: { params: { id: number } }) {
    const { id } = await params;
    let contact: Contact | null = null;
    let formattedDate: string = "";

    try {
        const response = await client.get(`/users/${id}`);
        if (response.status === 200) {
            contact = response.data;
            if (contact) {
                const date = new Date(contact.createdAt);
                formattedDate = date.toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            }
        }
    } catch (error) {
        console.error("There was an API error: ", error);
    }

    return (
        <section>
            <TypographyH1>Contact Detail</TypographyH1>
            { contact && (
                <>
                    <p>Name: { contact.name }</p>
                    <p>Email: { contact.email }</p>
                    <p>Age: { contact.age }</p>
                    <p>Role: { contact.role }</p>
                    <p>City: { contact.city }</p>
                    <p>Country: { contact.country }</p>
                    <p>Active: { contact.active ? "Active" : "Inactive" }</p>
                    <p>Created At: { formattedDate }</p>
                </>
            ) }
        </section>  
    ); 
}