const image = document.querySelector(".image").firstElementChild;
const upload_img_button = document.querySelector(".upload-img-button");

upload_img_button.addEventListener("click", async () => {
  try {
    // 1. Open the native file picker
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Image",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg", ".webp"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    });

    // 2. Extract the file data
    const file = await fileHandle.getFile();

    // 3. Process the file (e.g., render a preview)

    image.src = URL.createObjectURL(file);
    image.style.display = "block";
  } catch (err) {
    // Handles cases where the user cancels the picker window
    console.log("User cancelled or browser is unsupported:", err);
  }
});

const msg_element = document.querySelector(".fun_fact");

let facts = [
  "The physical brain changes linked to Alzheimer's—such as the buildup of beta-amyloid plaques—can begin up to 15 to 20 years before any memory or behavior symptoms ever appear.",
  "Even when people lose short-term memory or struggle to recognize loved ones, emotional memories and a love for music often remain intact because those areas of the brain are affected much later.",
  "Changes or a decline in the sense of smell (anosmia) can show up in the very early stages of the disease, sometimes years before diagnosis.",
  "Women make up about two-thirds of all Alzheimer's patients and are roughly twice as likely to develop the disease compared to men.",
  "As the disease progresses, it physically alters the structure of the brain by causing the cerebral cortex to shrink and the inner fluid chambers (ventricles) to grow larger."
];
let volunteer=[
    "Speak in a slow, gentle, and clear voice",
    "Avoid arguing, correcting, or testing their memory (e.g., asking 'Do you remember who I am?'), as this can cause frustration or embarrassment. Instead, introduce yourself warmly: 'It's great to see you, I'm [Name].'",
    "If the person becomes agitated, confused, or fixated on a stressful thought, gently shift their attention to a new object, a familiar song, a snack, or a simple activity.",
    "Play songs from their youth or look through old photo albums. Familiar music and pictures can spark joy and bring back a sense of comfort.",
    "Do things around the same time each day (meals, walks, resting). Predictability lowers anxiety for someone who is confused about time and place.",
    "A huge amount of care is handled by exhausted family members. You can help by dropping off a meal, sitting with the patient for an hour so the primary caregiver can rest (respite care), or running an errand."
]
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



let fact=facts[getRandomIntInclusive(0,facts.length-1)];
let _vol=volunteer[getRandomIntInclusive(0,volunteer.length-1)];

msg_element.innerHTML=`<p>Fact - ${fact}</p><p>What can you as person do for them ? <br> ${_vol}</p>`