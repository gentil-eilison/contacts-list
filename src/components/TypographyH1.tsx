import TypographyProps from "./types/Typography";


export default function TypographyH1({ children }: TypographyProps) {
    return (
        <h1 className="text-3xl font-bold">{ children }</h1>
    );
}