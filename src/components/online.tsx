"use client";

import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Online = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get("https://api.lanyard.rest/v1/users/890232380265222215")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const online =
    data?.data?.active_on_discord_desktop === true ||
    data?.data?.active_on_discord_mobile === true;
  return (
    <Suspense fallback={<div></div>}>
      {online && (
        <span className="w-3 h-3" title={data?.data?.discord_status}>
          <span className="absolute bottom-0 right-0 md:right-2 md:bottom-2 bg-green-500 rounded-full h-5 w-5 border-4 border-[#1d181f] animate-ping" />
          <span className="absolute bottom-0 right-0 md:right-2 md:bottom-2 bg-green-500 rounded-full h-5 w-5 border-4 border-[#1d181f]" />
        </span>
      )}
    </Suspense>
  );
};

export default Online;
