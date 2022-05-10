import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.event.create({
    data: {
      // id: "baef023d-6593-72a3-fabc-b34ad8f65bc2",
      name: "CTL: Eastbound 2022",
      description:
        "Cross The Land: Eastbound 2022 Edition is here in partnership with VATMENA and VATEUD! Stay tuned for more updates.",
      small_image: "https://cdn.vatsim.me/ctl/logos/FullColour.png",
      large_image: "https://cdn.vatsim.me/ctl/banners/CTL_E2021arpt.png",
    },
  });

  await prisma.event.create({
    data: {
      // id: "fda03e2b-4759-64a1-abde-ba849e23efa5",
      name: "CTL: Westbound 2023",
      description:
        "Cross The Land: Westbound 2023 Edition is here in partnership with VATMENA and VATEUD! Stay tuned for more updates.",
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
