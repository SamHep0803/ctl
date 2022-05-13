import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.event.create({
    data: {
      // id: "baef023d-6593-72a3-fabc-b34ad8f65bc2",
      name: "CTL: Eastbound 2022",
      short_description:
        "Cross The Land: Eastbound 2022 Edition is here in partnership with VATMENA and VATEUD! Stay tuned for more updates.",
      long_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque ex, condimentum sit amet tempor eu, imperdiet ac orci. Vestibulum pretium aliquam ornare. Nam vulputate ullamcorper gravida. Nullam quis ex posuere, maximus elit non, venenatis orci. Proin vulputate rhoncus eros id auctor. Proin ultricies orci turpis, non tincidunt odio egestas ut. Proin id nibh sit amet metus luctus bibendum vel vel massa.\n\nPraesent id sapien rutrum metus tincidunt porttitor vel nec nibh. Suspendisse in rhoncus sapien. Maecenas convallis lacus at tellus sagittis, in posuere est convallis. Curabitur eget ligula in sem fermentum posuere vitae id nibh. Donec in mi in quam finibus lacinia et at lectus. In hac habitasse platea dictumst. Aenean commodo volutpat turpis et scelerisque. Curabitur pharetra fermentum eleifend. Fusce ut nisl non lectus vulputate volutpat quis non nisi. Phasellus tincidunt malesuada tortor, sed porttitor ligula bibendum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDonec facilisis arcu nec viverra pulvinar. Integer maximus vestibulum nulla in lobortis. Cras vehicula condimentum leo, in aliquam neque fermentum a. Nunc nisi tortor, eleifend luctus nibh sed, mattis facilisis lacus. Curabitur finibus sit amet risus efficitur congue. Suspendisse turpis nibh, dapibus vel bibendum quis, commodo sed ex. Etiam molestie, libero sollicitudin ultrices malesuada, dui turpis vehicula magna, id ultricies ipsum ex id metus. Nulla ullamcorper accumsan ex et ullamcorper. Suspendisse varius ipsum arcu, quis faucibus metus sollicitudin id. Integer porta nulla suscipit interdum vulputate.",
      small_image: "https://cdn.vatsim.me/ctl/logos/FullColour.png",
      large_image: "https://cdn.vatsim.me/ctl/banners/CTL_E2021arpt.png",
    },
  });

  await prisma.event.create({
    data: {
      // id: "fda03e2b-4759-64a1-abde-ba849e23efa5",
      name: "CTL: Westbound 2023",
      short_description:
        "Cross The Land: Westbound 2023 Edition is here in partnership with VATMENA and VATEUD! Stay tuned for more updates.",
      long_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque ex, condimentum sit amet tempor eu, imperdiet ac orci. Vestibulum pretium aliquam ornare. Nam vulputate ullamcorper gravida. Nullam quis ex posuere, maximus elit non, venenatis orci. Proin vulputate rhoncus eros id auctor. Proin ultricies orci turpis, non tincidunt odio egestas ut. Proin id nibh sit amet metus luctus bibendum vel vel massa.\n\nPraesent id sapien rutrum metus tincidunt porttitor vel nec nibh. Suspendisse in rhoncus sapien. Maecenas convallis lacus at tellus sagittis, in posuere est convallis. Curabitur eget ligula in sem fermentum posuere vitae id nibh. Donec in mi in quam finibus lacinia et at lectus. In hac habitasse platea dictumst. Aenean commodo volutpat turpis et scelerisque. Curabitur pharetra fermentum eleifend. Fusce ut nisl non lectus vulputate volutpat quis non nisi. Phasellus tincidunt malesuada tortor, sed porttitor ligula bibendum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDonec facilisis arcu nec viverra pulvinar. Integer maximus vestibulum nulla in lobortis. Cras vehicula condimentum leo, in aliquam neque fermentum a. Nunc nisi tortor, eleifend luctus nibh sed, mattis facilisis lacus. Curabitur finibus sit amet risus efficitur congue. Suspendisse turpis nibh, dapibus vel bibendum quis, commodo sed ex. Etiam molestie, libero sollicitudin ultrices malesuada, dui turpis vehicula magna, id ultricies ipsum ex id metus. Nulla ullamcorper accumsan ex et ullamcorper. Suspendisse varius ipsum arcu, quis faucibus metus sollicitudin id. Integer porta nulla suscipit interdum vulputate.",
      small_image: "https://cdn.vatsim.me/ctl/logos/FullColour.png",
      large_image: "https://cdn.vatsim.me/ctl/banners/CTLW22.jpg",
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(0);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
