import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  const published = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0));

  const items = published.map((p) => `
    <item>
      <title>${esc(p.data.title)}</title>
      <link>https://i3ataheri.ir/blog/${p.slug}</link>
      <description>${esc(p.data.description || "")}</description>
      <pubDate>${p.data.date ? new Date(p.data.date).toUTCString() : ""}</pubDate>
      <guid>https://i3ataheri.ir/blog/${p.slug}</guid>
    </item>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>عیسی طاهری</title>
    <link>https://i3ataheri.ir</link>
    <description>وبلاگ عیسی طاهری</description>
    <language>fa</language>
    <atom:link href="https://i3ataheri.ir/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

function esc(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);
}
