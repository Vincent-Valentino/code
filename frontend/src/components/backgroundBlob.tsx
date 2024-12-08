import { cn } from "./../lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="max-h-full max-w-full items-center justify-center z-30">
      <div className="relative w-full">
        <div
          className={cn(
            " top-0 h-44 w-44 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            " top-0 h-44 w-44 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
