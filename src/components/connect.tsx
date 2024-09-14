import React from "react";

export default function Connect() {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-muted px-4 rounded-xl flex  items-center gap-2">
        <span className="w-3 h-3 md:mt-3">
          <span className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <span className="absolute w-3 h-3 bg-green-500 rounded-full" />
        </span>
        open for work
      </div>
    </div>
  );
}
