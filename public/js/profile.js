const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.currentTarget.hasAttribute("data-id")) {
    const id = event.currentTarget.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

const updateButtonHandler = async (event) => {
  console.log("update clicked");
  if (event.currentTarget.hasAttribute("data-id")) {
    const id = event.currentTarget.getAttribute("data-id");

    const title = "updated-title";
    const content = "updated-content";

    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`post id is ${id}`);

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

// Create new post event listener
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

// Only add delete event listener if the class exists
if (document.querySelector("#postList")) {
  document.querySelectorAll(".delete-post-btn").forEach((item) => {
    item.addEventListener("click", delButtonHandler);
  });
}

// Only add update event listener if the class exists
if (document.querySelector("#postList")) {
  document.querySelectorAll(".update-post-btn").forEach((item) => {
    item.addEventListener("click", updateButtonHandler);
  });
}
