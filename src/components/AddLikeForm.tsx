import { useState } from "preact/hooks";

type Props = {
  url: string;
}
export function AddLikeForm({ url }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/addLike", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      window.location.reload();
    }
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={submit}>
      <input type="hidden" name="url" value={`${url}`} />
      <button type="submit" disabled={isSubmitting}>Add Like</button>
    </form>
  );
}
