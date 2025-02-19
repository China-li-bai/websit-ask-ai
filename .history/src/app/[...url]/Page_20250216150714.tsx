import { ragChat } from "@/lib/rag-chat";
import React, { memo } from "react";
interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
function reconstru(params: type) {}

const Page = memo(({ params }: PageProps) => {
  console.log(params);
  ragChat.context.add({
    type: "html",
    content: params.url as string,
  });
  return <div>Page</div>;
});

export default Page;
