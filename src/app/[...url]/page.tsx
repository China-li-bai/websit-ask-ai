import { ragChat } from "@/lib/rag-chat";
import React, { memo } from "react";
interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
function reconstructUrl(url: PageProps["params"]["url"]) {
  if (typeof url === "string") {
    return url;
  }
  if (Array.isArray(url)) {
    const decodedUrls = url.map((url) => decodeURIComponent(url));
    return decodedUrls.join("/");
  }
  return "";
}

const Page = memo(({ params }: PageProps) => {
  console.log(params);
  const reconstructedUrl = reconstructUrl(params.url);
  if (reconstructedUrl) {
    ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 100, chunkSize: 1000 },
    });
  }
  return <div>Page</div>;
});

export default Page;
