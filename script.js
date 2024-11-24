const btn = document.getElementById("btn");
const result = document.querySelector(".result");
const input = document.getElementById("birthday");

btn.addEventListener("click", () => {
  result.style.color = "white";
  const birthDate = new Date(input.value);
  const today = new Date();

  // Calculate age in years
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // If the birthday hasn't occurred yet this year, subtract 1 from the age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Display the result
  result.textContent = `You are ${age} years old.`;
});
