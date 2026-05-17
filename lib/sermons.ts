export type SermonEpisode = {
  id: string;
  title: string;
  audioUrl: string;
  pageUrl: string;
  publishedAt: string;
  dateLabel: string;
  durationSeconds: number;
  durationLabel: string;
};

const PODBEAN_FEED_URL =
  process.env.PODBEAN_FEED_URL ?? "https://feed.podbean.com/wearegtf/feed.xml";

function formatDuration(seconds: number): string {
  if (!seconds || seconds <= 0) return "";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m} min`;
}

function formatDate(pubDate: string): string {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function decodeXml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseFeed(xml: string): SermonEpisode[] {
  const blocks = xml.split("<item>").slice(1);

  return blocks
    .map((block, index) => {
      const title = decodeXml(
        block.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "Untitled",
      );
      const audioUrl = block.match(/<enclosure url="([^"]+)"/)?.[1] ?? "";
      const pageUrl = decodeXml(
        block.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? "",
      );
      const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "";
      const durationSeconds = parseInt(
        block.match(/<itunes:duration>(\d+)<\/itunes:duration>/)?.[1] ?? "0",
        10,
      );
      const guid =
        decodeXml(block.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1] ?? "") ||
        `episode-${index}`;

      if (!audioUrl) return null;

      return {
        id: guid,
        title,
        audioUrl,
        pageUrl,
        publishedAt: pubDate,
        dateLabel: formatDate(pubDate),
        durationSeconds,
        durationLabel: formatDuration(durationSeconds),
      };
    })
    .filter((episode): episode is SermonEpisode => episode !== null);
}

export async function fetchSermons(limit = 6): Promise<SermonEpisode[]> {
  const response = await fetch(PODBEAN_FEED_URL, {
    next: { revalidate: 3600 },
    headers: { Accept: "application/rss+xml, application/xml, text/xml" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Podbean feed (${response.status})`);
  }

  const xml = await response.text();
  return parseFeed(xml).slice(0, limit);
}
