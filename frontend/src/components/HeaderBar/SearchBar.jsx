import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    // Điều hướng sang trang kết quả
    navigate(`/search?name=${encodeURIComponent(keyword)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full grow overflow-hidden rounded-lg bg-gray-50 shadow-inner"
    >
      <Input
        type="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Tìm kiếm điện thoại..."
        className="border-none grow focus-visible:ring-0 focus-visible:ring-offset-0 py-2 text-lg placeholder:text-base"
      />

      <Button
        type="submit"
        className="bg-primary hover:bg-primary-dark rounded-l-none"
      >
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default SearchBar;
