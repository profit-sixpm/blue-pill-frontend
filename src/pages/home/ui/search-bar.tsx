import { useState } from "react";
import { Input } from "@/shared/ui/input";
import Search from "@/assets/search.svg?react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSearch?.(value.trim());
    }
  };

  const handleSearchClick = () => {
    if (value.trim()) {
      onSearch?.(value.trim());
    }
  };

  return (
    <div className="group relative w-full">
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-11 border-[#C9C9CB] focus:border-[#5978FF] pr-[70px]"
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-[24px] top-1/2 -translate-y-1/2"
      >
        <Search
          width={24}
          height={24}
          className="text-[#C9C9CB] group-focus-within:text-[#5978FF] hover:text-[#5978FF] transition-colors"
        />
      </button>
    </div>
  );
}
