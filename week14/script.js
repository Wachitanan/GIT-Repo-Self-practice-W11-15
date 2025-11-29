async function getPosts() {
    const id = document.getElementById("uid").value;

    try{
        const res = await fetch(`http://localhost:3000/posts/${id}`)
        const posts = await res.json()

            if(posts.length > 0) {
            document.getElementById("posts").innerHTML = posts
            .map(post => `<p><strong>${post.title}</strong><br>${post.body}</p>`)
            .join("");
        }else {
            document.getElementById("posts").innerText = "No posts found for this user."
        }
    }catch (err) {
        document.getElementById("posts").innerText = "No posts found for this user."
        console.log("Error",err)
    }
}
