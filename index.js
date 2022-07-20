const inputs = document.querySelectorAll(".controls input");
const image = document.querySelector('img');

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(this.value + suffix);
}

inputs.forEach(input => input.addEventListener("input", handleUpdate));
