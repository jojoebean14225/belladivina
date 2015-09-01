var slider = new BeaverSlider({
  structure: {
    container: {
    id: "atmosphereslider",
    width: 850,
    height: 500
    }
  },
  content: {
    images: [
      "images/sfeerbeelden/1.jpg",
      "images/sfeerbeelden/2.jpg"
    ]
  },
  animation: {
    effects: ["fade:2000"],
    interval: 4000
  }
}); 