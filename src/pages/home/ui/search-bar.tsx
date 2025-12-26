import { Input } from "@/shared/ui/input";
import Search from "@/assets/search.svg?react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-11"
      />
      <Search
        width={24}
        height={24}
        className="pointer-events-none absolute right-[24px] top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
