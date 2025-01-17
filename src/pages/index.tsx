import Head from "next/head";
import Page1 from "@/components/Landing Page/Page1";
import Page2 from "@/components/Landing Page/Page2";
import Page3 from "@/components/Landing Page/Page3";
import ThreeValuesOfLac from "@/components/Landing Page/ThreeValuesOfLac";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/Firebase";

type props = {
  yetToHappenEvents: LAC_Event[];
  happenedEvent: LAC_Event;
  featuredBlogs: { blog: Blog; id: string }[];
};

export default function Home({
  yetToHappenEvents,
  happenedEvent,
  featuredBlogs,
}: props) {
  return (
    <>
      <Head>
        <title>Literary Affairs Committee</title>
        <meta name="description" content="Website for LAC, SVNIT Surat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 lg:w-11/12 mx-auto">
        <Page1
          yetToHappenEvents={yetToHappenEvents}
          happenedEvent={happenedEvent}
        />
        <ThreeValuesOfLac />
        <Page2 featuredBlogs={featuredBlogs} />
        <Page3 />
      </section>
    </>
  );
}

export async function getServerSideProps(context: any) {
  let yetToHappenEvents: any[] = [];
  let happenedEvent: any = {};
  let featuredBlogs: any[] = [];
  // 1.fetch top 2 events whose completed status is false and one whose completed status is true
  const yetToHappenEventsQuery = query(
    collection(db, "events"),
    where("completed", "==", false),
    orderBy("date", "desc"),
    limit(2)
  );
  const happenedEventsQuery = query(
    collection(db, "events"),
    where("completed", "==", true),
    orderBy("date", "desc"),
    limit(1)
  );

  const yetToHappenEventsQuerySnapshot = await getDocs(yetToHappenEventsQuery);
  yetToHappenEventsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    yetToHappenEvents.push(doc.data());
  });

  const happenedEventsQuerySnapshot = await getDocs(happenedEventsQuery);
  happenedEventsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    happenedEvent = doc.data();
  });

  //2. fetch the 3 featured blogs and return them
  const featuredBlogsQuery = query(
    collection(db, "blogs"),
    where("isFeatured", "==", true),
    limit(3)
  );

  const featuredBlogsQuerySnapshot = await getDocs(featuredBlogsQuery);
  featuredBlogsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    featuredBlogs.push({ blog: doc.data(), id: doc.id });
  });

  return {
    props: {
      yetToHappenEvents,
      happenedEvent,
      featuredBlogs,
    },
  };
}
