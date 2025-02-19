import React, { memo } from "react";
interface PageProps {
  params: {
    url: string;
  };
}
const Page = memo(({ params }: PageProps) => {
  console.log(params);

  return <div>Page</div>;
});

export default Page;
