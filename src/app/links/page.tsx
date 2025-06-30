import { TriangleAlert } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-xl flex items-center gap-2">
        <TriangleAlert className="text-yellow-400" size={18}/>
        Working on it...
      </h1>
    </div>
  );
}
