
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';
import PostForm from "@/components/post-form";

export default function NewPostPage() {

  async function createPost(formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let error = [];

    if(!title || title.trim().length===0){
      error.push("Titile is Required")
    }

    if(!content || content.trim().length===0){
      error.push("Content is Required")
    }

    if(!image){
      error.push("Image is Required")
    }

    if(error.length > 0){
      return {error};
    }

    storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });

    redirect("/feed");
  }

  return (
    <PostForm action={createPost} />
  )

}
