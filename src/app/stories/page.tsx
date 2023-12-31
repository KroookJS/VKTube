import { getAllShorts } from "@/api/shorts";
import Slider from "@/components/ShortsBlock/Slider";
import TestIsLoading from "@/components/TestIsLoading";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";

export default function Stories() {
  const { data: myShorts, isSuccess } = useShortsQuery(
    getAllShorts,
    "getSorts"
  );

  const newMyShorts =
    isSuccess &&
    myShorts.map((el: any) => {
      if (el.url.includes("mp")) {
        return { url: "http://37.1.219.168:4444" + el.url, type: "video" };
      } else {
        return { url: "http://37.1.219.168:4444" + el.url };
      }
    });

  const MyCompLogik = isSuccess ? (
    <Slider myStories={newMyShorts} />
  ) : (
    <TestIsLoading />
  );
  return <Layout isShorts={true}>{MyCompLogik}</Layout>;
}
