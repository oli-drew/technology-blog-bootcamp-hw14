console.log("comments loaded");

const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#commentInput").value.trim();
  //   const postId = document.querySelector("#postId").value.trim();
  const post_id = 1;

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
      console.log("Comment created");
    } else {
      alert("Failed to create comment");
    }
  }
};

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute("data-id")) {
//       const id = event.target.getAttribute("data-id");

//       const response = await fetch(`/api/posts/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         document.location.replace("/profile");
//       } else {
//         alert("Failed to delete post");
//       }
//     }
//   };

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);

// Only do this if the class exists
//   if (document.querySelector("#postList")) {
//     document
//       .querySelector(".post-list")
//       .addEventListener("click", delButtonHandler);
//   }
