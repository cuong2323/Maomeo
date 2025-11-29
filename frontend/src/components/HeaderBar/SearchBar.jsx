import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      navigate(`/search?name=${keyword}`);
    }
  };

  return (
    <div className="flex w-full grow overflow-hidden rounded-lg bg-gray-50 shadow-inner">
      <Input
        type="search"
        placeholder="Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border-none grow focus-visible:ring-0 py-2 text-xl"
      />
      <Button className="bg-primary rounded-l-none" onClick={handleSearch}>
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SearchBar;
