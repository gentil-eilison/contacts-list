import TypographyH1 from "@/components/TypographyH1";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Contact from "@/constants/contacts/types";

interface ContactCardProps {
    contact: Contact
}

export default function ContactCard({ contact }: ContactCardProps) {
    return (
        <Card className="min-w-fit min-h-[200px] flex flex-col justify-between">
            <CardHeader className="flex flex-col flex-wrap">
                <TypographyH1>{ contact.name }</TypographyH1>
                <p className="wrap-anywhere">{ contact.email }</p>
            </CardHeader>
            <CardContent>
                <span className="flex justify-between">
                    <p>{ contact.country }</p>
                    <p>{ contact.city }</p>
                </span>
            </CardContent>
        </Card>
    );
}