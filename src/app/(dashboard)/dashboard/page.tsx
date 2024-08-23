"use client";

import { useState } from "react";
import Templates from "../_components/Templates";
import TemplateSearching from "../_components/Templates/TemplateSearching";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <section>
      <TemplateSearching onSearchChange={handleSearchChange} />
      <Templates searchQuery={searchQuery} />
    </section>
  );
};
export default Dashboard;
