import { useState } from "preact/hooks";
import { AddLikeForm } from "./AddLikeForm";

type Props = {
  initialLikeCount: number;
  url: string;
};
export function LikeCountPresenter({ initialLikeCount, url }: Props) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  return (
    <>
      <p>Likes: {likeCount}</p>
      <AddLikeForm
        url={url}
        updateLikeCount={(newLikeCount: number) => {
          setLikeCount(newLikeCount);
        }}
      />
    </>
  );
}
