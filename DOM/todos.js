var li1 = document.querySelectorAll("li");


for(var i = 0; i < li1.length; i++) {
	li1[i].addEventListener("mouseover", function() {
		this.classList.add("selected");
	})

	li1[i].addEventListener("mouseout", function() {
		this.classList.remove("selected");
	})

	li1[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
}
