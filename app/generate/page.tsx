"use client";

import { useEffect, useState } from "react";

export default function GeneratePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const res = localStorage.getItem("results");
    if (res) setData(JSON.parse(res));
  }, []);

  if (!data) return null;

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Your Viral Content</h1>

      <Card title="X Post" content={data.x} />
      <Card title="TikTok Script" content={data.tiktok} />
      <Card title="LinkedIn Post" content={data.linkedin} />
      <Card title="Ad Copy" content={data.ad} />
    </div>
  );
}

function Card({ title, content }: any) {
  return (
    <div className="glass p-5 rounded">
      <h2 className="font-bold mb-2">{title}</h2>
      <p className="whitespace-pre-wrap">{content}</p>
    </div>
  );
}
