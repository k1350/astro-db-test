import { actions } from "astro:actions";
import { useState } from "preact/hooks";

type Props = {
  url: string;
  updateLikeCount: (newLikeCount: number) => void;
};
export function AddLikeForm({ url, updateLikeCount }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const result = await actions.addLike(formData);
    updateLikeCount(result.likeCount);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={submit}>
      <input type="hidden" name="url" value={`${url}`} />
      <button type="submit" disabled={isSubmitting}>
        Add Like
      </button>
    </form>
  );
}
