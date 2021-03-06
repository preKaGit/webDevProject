function getYourPost() {
	fetch(defaultAddress.URL + ":" + defaultAddress.PORT + "/api/posts/your-posts/" + userInfo.sub, {
		method: "GET",
		headers: {
			"Authorization": "Bearer " + accessToken
		},
	}).then(function (response) {
		return response.json()
	}).then(function (posts) {
		const ul = document.querySelector("#your-posts-page ul")
		ul.innerText = ""
		for (const post of posts) {
			const li = document.createElement("li")
			const title = document.createElement("a")
			const editLink = document.createElement("a")
			const buttonDelete = document.createElement("a")
			const space = document.createElement("span")

			title.innerText = "Your post title: "
			editLink.innerText = post.title
			space.innerText = "   "
			buttonDelete.innerText = "delete"

			editLink.setAttribute("href", "/your-post/" + post.id)
			buttonDelete.setAttribute("href", "/delete/" + post.id)
			editLink.addEventListener("click", listenClickOnAnchor)
			buttonDelete.addEventListener("click", listenClickOnAnchor)

			li.appendChild(title)
			li.appendChild(editLink)
			li.appendChild(space)
			li.appendChild(buttonDelete)
			ul.appendChild(li)

		}

	}).catch(function (error) {
		console.log(error)
	})

}