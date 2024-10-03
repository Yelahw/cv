import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  link,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 underline print:no-underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Badge
            className="px-1 py-0 text-[11px] print:px-0 print:leading-tight"
            variant="secondary"
          >
            {subtitle}
          </Badge>
          <CardDescription className="font-mono text-xs print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
