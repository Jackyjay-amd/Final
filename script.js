function changeImage(imageNumber) {
  const image = document.getElementById("image");
  const description = document.getElementById("description");

  switch (imageNumber) {
    case 1:
      image.src = "https://assets.goal.com/images/v3/blt6ad8e1581c7cefd6/Lionel_Messi_Argentina_2022.jpg";
      description.textContent = "Lionel Messi scoring a stunning free kick.";
      break;
    case 2:
      image.src = "https://assets.goal.com/images/v3/blt6ad8e1581c7cefd6/Lionel_Messi_Argentina_2022.jpg";
      description.textContent = "Messi celebrating a goal with Barcelona.";
      break;
    case 3:
      image.src = "https://assets.goal.com/images/v3/blt6ad8e1581c7cefd6/Lionel_Messi_Argentina_2022.jpg";
      description.textContent = "Messi lifting the World Cup trophy.";
      break;
    default:
      break;
  }
}
