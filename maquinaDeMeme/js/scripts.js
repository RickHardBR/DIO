function enablePhotoUpload() {
  const imageInput = document.querySelector('#image-input');

  imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    
    reader.addEventListener('load', ()=>{
      const uploadImage = reader.result;

      changeMemePicture(uploadImage)

    })

    reader.readAsDataURL(this.files[0])

  })
}

async function mapImageList(){
  const memesObj = [
    {
      "name": "Máquina de memes DIO.",
      "path": "assets/factoryMemeDio.png"
    },
    {
      "name": "Chapolin",
      "path": "assets/chapolin.jpg"
    },
    {
      "name": "Chloe",
      "path": "assets/cloe.jpg"
    },
    {
      "name": "Felipao",
      "path": "assets/felipao.png"
    },
    {
      "name": "Funny-cat1",
      "path": "assets/funny-cat1.png"
    },
    {
      "name": "Funny-cat2",
      "path": "assets/funny-cat2.png"
    },
    {
      "name": "Renan",
      "path": "assets/renan.png"
    },
    {
      "name": "Deboche",
      "path": "assets/bemfeito.jpg"
    },
    {
      "name": "garota-fogo",
      "path": "assets/garota-fogo.png"
    },
    {
      "name": "joelma",
      "path": "assets/joelma.png"
    },
    {
      "name": "todo mundo odeia o cris",
      "path": "assets/todo-mundo-odeia-o-chris.jpg"
    },
    {
      "name": "messi triste",
      "path": "assets/messi-memes.png"
    }
  ]

  return memesObj
}

async function createGallery(imageList){
  const memeSelector = document.querySelector("#memes-list")

  imageList.forEach(meme => {
    let newOption = document.createElement("option")
    newOption.text = meme.name.toUpperCase()
    newOption.value = meme.path
    memeSelector.appendChild(newOption)
  })

}

async function changeMemePicture(imageMeme){
  let displayImage = document.querySelector('#display-image')

  displayImage.style.backgroundImage = `url('${imageMeme}')`
}



async function main(){
  const memesImageList = await mapImageList()

  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[0].path)
}
main()
