import { Suspense, lazy, useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useAllPostQuery } from "../../redux/service";
import { useSelector } from "react-redux";
import Loading from "../../components/common/Loading";
const Input = lazy(() => import("../../components/home/Input"));
const Post = lazy(() => import("../../components/home/Post"));

const Home = () => {
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);

  const { allPosts } = useSelector((state) => state.service);
  const { data, isLoading } = useAllPostQuery(page);

  const handleClick = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    if (data) {
      if (data.posts.length < 3) {
        setShowMore(false);
      }
    }
  }, [data]);

  return (
    <Suspense fallback={<Loading />}>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        {allPosts ? (
          allPosts.length > 0 ? (
            allPosts.map((e) => {
              return <Post key={e._id} e={e} />;
            })
          ) : (
            <Typography variant="h6" textAlign={"center"}>
              No Posts yet !
            </Typography>
          )
        ) : isLoading ? (
          <Loading />
        ) : null}
      </Stack>
      {showMore ? (
        <Button
          size="large"
          sx={{ my: 5, p: 3, textDecoration: "underline", cursor: "pointer" }}
          onClick={handleClick}
        >
          Load More...
        </Button>
      ) : (
        allPosts?.length > 0 && (
          <Typography variant="h6" textAlign={"center"} mb={5}>
            You have reached the end !
          </Typography>
        )
      )}
    </Suspense>
  );
};

export default Home;
