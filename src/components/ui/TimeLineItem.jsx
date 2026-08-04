import { useState } from "react";

export function TimelineItem({ experience }) {
  const { name, href, logo, positions } = experience;
  const [imgError, setImgError] = useState(false);

  return (
    <li className="relative ml-10 py-4">
      {/* Logo / Avatar */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <div className="size-12 rounded-full border flex items-center justify-center overflow-hidden bg-background">
          {!imgError && logo ? (
            <img
              src={logo}
              alt={name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-sm font-semibold">{name[0]}</span>
          )}
        </div>
      </a>

      <div className="flex flex-1 flex-col justify-start gap-2">
        {/* Nombre de la empresa */}
        <a href={href} target="_blank" rel="noreferrer" className="w-fit">
          <h2 className="text-primary font-semibold leading-none">{name}</h2>
        </a>

        {/* Posiciones agrupadas */}
        <div className="flex flex-col gap-4">
          {positions.map((position) => (
            <div key={`${position.title}-${position.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-sm font-medium leading-none text-muted-foreground">
                  {position.title}
                </p>
                <time className="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground">
                  <span>{position.start}</span>
                  <span>{" - "}</span>
                  <span>{position.end ?? "Present"}</span>
                </time>
              </div>

              {position.description && (
                <ul className="ml-4 mt-2 list-outside list-disc">
                  {position.description.map((desc, i) => (
                    <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {position.links && position.links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                  {position.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.icon && (
                        <span className="size-3 flex items-center justify-center text-[10px]">
                          ◆
                        </span>
                      )}
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;