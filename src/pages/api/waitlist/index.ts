import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {

  const formData = await request.formData();
  console.log(formData);
  const email = formData.get("email")?.toString();

  if (!email) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  // try {
  //   const db = getFirestore(app);
  //   const emailRef = db.collection("emails");
  //   await emailRef.add({
  //       email
  //   });
  // } catch (error) {
  //   return new Response("Something went wrong: " + error, {
  //     status: 500,
  //   });
  // }

  const url = "https://connect.mailerlite.com/api/subscribers"
  const brr = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTg1MmFlYjhkMGUyZWQ5MDM5OTMwZWIzMWE4OGZiMjg5YWI0MmRhOGU3YjJjOTU1NWJmMzI5YTU3ZjU4YTQ5YzcwZjZkNjY5MTY1YmZlYzQiLCJpYXQiOjE3MDM3NTE1MzkuOTMwNTQ5LCJuYmYiOjE3MDM3NTE1MzkuOTMwNTUyLCJleHAiOjQ4NTk0MjUxMzkuOTI2Mjc5LCJzdWIiOiI3NjYzNzciLCJzY29wZXMiOltdfQ.lIC7vQrPq4kprmUF5VvQ0Pc5lYcOZMyl7WdEPgRVtQfRdHDqKX_nVes1o-v5sB4kY-HyWGX4s7TIOybTen8Cq3kcmV1EYrWENLwZlyk1wXMdxO7lx2D3RtvGk0diGXB2Vn255XZYdLIV1OrWOJfXmf4skh07m_ywmoxvDbEZcVyjy3pR2c-ZvEGH9LEHK-VXBRoTE8DvpoIQhFgqDDk5rCM08V89LiK0yl2NhYFTlaFviTWzpmFYCtbnh92pfvhN_RBZeiMaA1FwKZggZauowc4X1L1JligmB3YrRR4Md6w5Yz-5yjsvETbaHW26kHp_h2KE2E4hWtkOUlm1mdR4Ik5YC_v8CLo71X9Et12gACbJ0DeRCffsYqtGeUENZp7nrsNtCjMB7hV5dkfnR5HV98ip77c70b3x3yq3X6nL7W_hYCGTG8ooAtYg4sP-uzq9D-uPGwpgjNmv8LdN5ibTFFGiMa0xLjzR9xkmtSWaPdBW_I0PpfRPi8AQW5BH2JOLCr_OH7xzJ4AansRcH06okYyCEBXtyx04Buw9scZ2O9FRI-TGHG5kEt9O1KcckVDcryzthGwEtYBK4Z68nLi0EYBKbn5Gn6-CGslYVI67IuiM6l5uP6kALLxPii9tIA9YD4isYctY5WPd3Z_PWZjn3zY9kecHcMdluMI22DEgB6Q"
  const data = {
    email: email
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${brr}`
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Subscription successful:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
      return new Response("Something went wrong: " + error, {
        status: 500,
      });
    });

    return redirect("/");
};
