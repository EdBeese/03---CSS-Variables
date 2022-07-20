const inputs = document.querySelectorAll(".controls input");
const image = document.querySelector('img');

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("input", handleUpdate));
