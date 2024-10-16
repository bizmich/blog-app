import { cn } from '@lib';

export const NoFound = ({
  className,
  description,
  title,
}: {
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-xl flex-col space-y-1.5 text-balance',
        className,
      )}
    >
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};
