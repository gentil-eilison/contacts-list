import TypographyProps from "./types/Typography";

export default function TypographyH2({ children }: TypographyProps) {
    return (
        <h2 className="text-xl">{ children }</h2>
    );
}