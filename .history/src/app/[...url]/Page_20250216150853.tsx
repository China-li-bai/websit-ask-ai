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
  const decodedUrl = decodeURIComponent(url[0]);
  return;
}

const Page = memo(({ params }: PageProps) => {
  console.log(params);
  ragChat.context.add({
    type: "html",
    content: params.url as string,
  });
  return <div>Page</div>;
});

export default Page;
