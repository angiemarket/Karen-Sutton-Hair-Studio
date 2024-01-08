const SHOP_DATA = [
  {
    title: "Cleanse and Condition",
    items: [
      {
        id: "cc5a0523-17ec-409a-81c0-1d84b98bc228",
        name: "Killer Curls Wash",
        brand: "Kevin Murphy",
        description: "Nourishing curl oat milk shampoo",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwa7102563/images/large/killer.curls%20wash%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "79832a4e-bae9-408b-9951-0674e3c0624e",
        name: "Plumping Wash",
        brand: "Kevin Murphy",
        description: "Densifying shampoo for thinning hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw82084c92/images/large/plumping.wash%20250ml-%20Shdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "e9fde521-9cb2-461b-ab79-87d4057b127a",
        name: "Angel Wash",
        brand: "Kevin Murphy",
        description: "Restorative shampoo for fine colored hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwc4205fc9/images/large/Angel.wash%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "77dcc018-0079-4ab3-aae7-3e120c07a1e3",
        name: "Young Again Wash",
        brand: "Kevin Murphy",
        description: "Anti-aging, restorative and softening shampoo",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwa136b9bd/images/large/young.again%20wash%20250ml%20resized.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "e471a4fd-9387-48a3-8482-6b53988c203c",
        name: "Blow Dry Wash",
        brand: "Kevin Murphy",
        description: "Nourishing and repairing shampoo",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw1e2d1025/images/large/blow.dry%20wash%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "98617657-8786-43ce-9cfd-2deba62ada4d",
        name: "Hydrate Me Wash",
        brand: "Kevin Murphy",
        description: "Hydrating shampoo for natural and colored hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw26e21102/images/large/hydrate.me%20wash%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "e0e332c3-d6f3-4124-9a06-6cb39b1ced31",
        name: "Repair Me Wash",
        brand: "Kevin Murphy",
        description:
          "Restorative, stengthening shampoo dor dry and brittle hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw47a77a5a/images/large/repair.me%20wash%20250ml.png?sw=800&sh=1108&strip=false",
        price: 42,
        quantity: 10,
      },
      {
        id: "03278b41-a563-44f7-b4c3-864911a3c03a",
        name: "Smooth Again Wash",
        brand: "Kevin Murphy",
        description: "Smoothing shampoo for thick, coarse hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwdb654400/images/large/smooth.again%20wash%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "14d3508d-3ed5-4037-bfcc-721f3cc497c2",
        name: "Everlasting Colour Wash",
        brand: "Kevin Murphy",
        description: "Color protect shampoo with PH sealing technology",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw6afd4716/images/large/everlasting.colour_wash_250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "42a73b12-f0ce-4ebd-a6f2-91dc4f100884",
        name: "Stimulate Me Wash",
        brand: "Kevin Murphy",
        description: "Stimulating and refreshing shampoo for hair and scalp",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwb7a28ea9/images/large/stimulate.me%20wash%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "11caa042-5607-4dd4-8e65-cd9052370937",
        name: "Killer Curls Rinse",
        brand: "Kevin Murphy",
        description: "Nourishing curl oat milk conditioner",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw54ec1668/images/large/killer.curls%20rinse%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "f1281007-bf4b-43e6-bd4b-697cfc264312",
        name: "Plumping Rinse",
        brand: "Kevin Murphy",
        description: "Densifying conditioner for thinning hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw58c5ffe9/images/large/plumping.rinse%20250ml-%20Shdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "68ffbd0b-25c9-4c55-917f-4cc39facac26",
        name: "Angel Rinse",
        brand: "Kevin Murphy",
        description: "Restorative conditioner for fine colored hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw27cbc004/images/large/Angel.rinse%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "fe976318-a3c9-4ddf-af6b-1cd043df2cb3",
        name: "Young Again Rinse",
        brand: "Kevin Murphy",
        description: "Anti-aging, restorative and softening conditioner",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw52b08df6/images/large/young.again%20rinse%20250ml%20resized.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "2767c3e3-23ab-4412-b452-8ea70cb1d93e",
        name: "Blow Dry Rinse",
        brand: "Kevin Murphy",
        description: "Nourishing and repairing conditioner",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw38993ad4/images/large/blow.dry%20rinse%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "9dd3ad5e-109d-4641-813d-f1d33ad3a4d0",
        name: "Hydrate Me Rinse",
        brand: "Kevin Murphy",
        description: "Hydrating shampoo for natural and colored hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw81a17f05/images/large/hydrate.me%20rinse%20250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "815fa384-39ab-4527-a8de-0bfd5e7bd752",
        name: "Repair Me Rinse",
        brand: "Kevin Murphy",
        description:
          "Restorative, stengthening conditioner dor dry and brittle hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwcb826fc8/images/large/repair.me%20rinse%20250ml.png?sw=800&sh=1108&strip=false",
        price: 42,
        quantity: 10,
      },
      {
        id: "eecd8d80-1ea4-4773-a05f-57d81c603fc1",
        name: "Smooth Again Rinse",
        brand: "Kevin Murphy",
        description: "Smoothing conditioner for thick, coarse hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwc38748bb/images/large/smooth.again%20rinse%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "b7d9712f-2d10-494d-afae-cef0308a89cd",
        name: "Everlasting Colour Rinse",
        brand: "Kevin Murphy",
        description: "Color protect conditioner with PH sealing technology",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw9e351f9c/images/large/everlasting.colour_rinse_250mlShdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "18cc31f9-1b3c-4aea-82c6-fd16fec67aac",
        name: "Stimulate Me Rinse",
        brand: "Kevin Murphy",
        description:
          "Stimulating and refreshing conditioner for hair and scalp",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw3e48092c/images/large/stimulate.me%20rinse%20250ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "b090d971-64de-4dfc-aef9-e0a3c433ffa5",
        name: "The Therapist Hydrating Shampoo",
        brand: "Evo",
        description:
          "A moisture-rich shampoo to gently cleanse, hydrate, strengthen and improve manageability of dry hair",
        imageUrl:
          "https://www.evohair.com/contentassets/92181449361341feab14a93af713ea0f/39221_evo_the-therapist-hydrating-shampoo_300ml_front.jpg",
        price: 32,
        quantity: 10,
      },
      {
        id: "0a652254-3ada-4188-bead-2c298e8f0183",
        name: "Ritual Salvation Repairing Shampoo",
        brand: "Evo",
        description:
          "A protein-rich shampoo to gently cleanse, repair, strengthen and moisturize color-treated hair",
        imageUrl:
          "https://www.evohair.com/contentassets/0873473fd65a42288a47bd5a41368624/39219_evo_ritual-salvation-repairing-shampoo_300ml_front.jpg",
        price: 16,
        quantity: 10,
      },
      {
        id: "5e28bffb-5f4d-425c-abea-7a98078bde8c",
        name: "Gluttony Volumising Sampoo",
        brand: "Evo",
        description:
          "A lightweight volumizing shampoo to gently cleanse, build body and strengthen fine hair",
        imageUrl:
          "https://www.evohair.com/contentassets/f9e2ffd87c6b4ad1900c698fb38f19f2/39225_evo_gluttony20volumising20shampoo_300ml_front.jpg",
        price: 16,
        quantity: 10,
      },
      {
        id: "8ceb5077-d749-4a8b-9d81-4ba77209f221",
        name: "Mane Tamer Smoothing Shampoo",
        brand: "Evo",
        description:
          "A smoothing shampoo to gently cleanse, reduce frizz and control unruly hair",
        imageUrl:
          "https://www.evohair.com/contentassets/62971b8160fe40e0b664adf520c634be/39881_evo_mane-tamer-smoothing-shampoo_300ml_front.jpg",
        price: 36,
        quantity: 10,
      },
      {
        id: "ded57ac1-52a7-4ef5-a512-f57be0b92834",
        name: "Normal Persons Daily Shampoo",
        brand: "Evo",
        description:
          "A daily shampoo that deeply cleanses to remove product build-up and excess oil to refresh and balance the scalp",
        imageUrl:
          "https://www.evohair.com/contentassets/62f46f35c20e44d78d1995bc35a381a9/39223_evo_normal-persons-daily-shampoo_300ml_front.jpg",
        price: 32,
        quantity: 10,
      },
      {
        id: "21becc4b-259d-4285-9181-939ec83fcc3d",
        name: "The Therapist Hydrating Conditioner",
        brand: "Evo",
        description:
          "A moisture-rich conditioner to hydrate and strengthen, while improving manageability and shine of dry hair",
        imageUrl:
          "https://www.evohair.com/contentassets/e135441f5bb84f3993b85855c434afed/39265_evo_the-therapist-hydrating-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
      {
        id: "85445903-1921-4ab5-a7b8-f2e012c21cd8",
        name: "Ritual Salvation Repairing Conditioner",
        brand: "Evo",
        description:
          "A protein-rich conditioner to repair, moisturise and improve condition and shine of damaged, color-treated hair",
        imageUrl:
          "https://www.evohair.com/contentassets/9fb9e8f5f45145df99948757ead2e405/39239_evo_ritual-salvation-repairing-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
      {
        id: "59abdd94-ae9c-4f35-ac96-f87d53b90de3",
        name: "Bride of Gluttony Volumising Conditioner",
        brand: "Evo",
        description:
          "A lightweight volumizing conditioner to build body and maintain fullness, while strengthening fine hair",
        imageUrl:
          "https://www.evohair.com/contentassets/9fb9e8f5f45145df99948757ead2e405/39239_evo_ritual-salvation-repairing-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
      {
        id: "8562ae07-8d89-48fb-aad4-d8571558d4e6",
        name: "Mane Tamer Smoothing Conditioner",
        brand: "Evo",
        description:
          "A smoothing conditioner to reduce frizz and control unruly hair, while providing humidity protection",
        imageUrl:
          "https://www.evohair.com/contentassets/9680851788ef41f4863413577da18fdd/39884_evo_mane-tamer-smoothing-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
      {
        id: "f901a60d-1a3a-4cf2-93d0-caff3155428a",
        name: "Normal Persons Daily Conditioner",
        brand: "Evo",
        description:
          "A lightweight daily conditioner to improve hair manageability while refreshing the scalp",
        imageUrl:
          "https://www.evohair.com/contentassets/3fa52054ed994419a43191b977d1bc8c/39224_evo_normal-persons-daily-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
      {
        id: "d99e2046-49cb-4138-90dd-e71ce47fe108",
        name: "Mane Tamer Smoothing Conditioner",
        brand: "Evo",
        description:
          "A smoothing conditioner to reduce frizz and control unruly hair, while providing humidity protection",
        imageUrl:
          "https://www.evohair.com/contentassets/9680851788ef41f4863413577da18fdd/39884_evo_mane-tamer-smoothing-conditioner_300ml_front.jpg",
        price: 35,
        quantity: 10,
      },
    ],
  },
  {
    title: "Treatments",
    items: [
      {
        id: "da838c4c-9c9e-4cc6-a344-718586019a29",
        name: "Killer Twirls",
        brand: "Kevin Murphy",
        description: "Nourishing curl refining air-dry creme",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwa345eaee/images/large/killer.twirls%20150ml_.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "fb2e7a4e-a57d-42ce-b426-2b7779bde095",
        name: "Body Mass",
        brand: "Kevin Murphy",
        description: "Leave-in plumping conditioning treatment",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwccff54cf/images/large/body.mass%20100ml-%20Shdw2.png?sw=800&sh=1108&strip=false",
        price: 50,
        quantity: 10,
      },
      {
        id: "370cc363-30a1-4fcb-a6dd-eb1d7be2998a",
        name: "Angel Masque",
        brand: "Kevin Murphy",
        description:
          "Strengthening and thickening masque for fine, colored hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwd8dd3791/images/large/angel.masque%20200mlShdw.png?sw=800&sh=1108&strip=false",
        price: 90,
        quantity: 10,
      },
      {
        id: "fb829b13-e37c-4fb0-9bfc-304577cddf9b",
        name: "Young Again",
        brand: "Kevin Murphy",
        description: "Anti-aging leave-in treatment oil",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw332bb6d2/images/large/young.again%20%20100ml%20resized.png?sw=800&sh=1108&strip=false",
        price: 50,
        quantity: 10,
      },
      {
        id: "addc69b2-dbd7-4f9a-90b8-7db73ccdb0df",
        name: "Heated Defense",
        brand: "Kevin Murphy",
        description: "Leave-in heat protection for all hair types",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw63110a8d/images/large/heated.defense%20150ml.png?sw=800&sh=1108&strip=false",
        price: 33,
        quantity: 10,
      },
      {
        id: "40ed8a77-a674-464b-9a49-6997bcb0b6a8",
        name: "Leave-In Repair",
        brand: "Kevin Murphy",
        description:
          "Nourishing, restorative leave-in treatment for damaged hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw29e399b1/images/large/leave.in%20repair%20200ml.png?sw=800&sh=1108&strip=false",
        price: 41,
        quantity: 10,
      },
      {
        id: "1fab19e1-3cbc-4376-875a-0bdb9c46d582",
        name: "Smooth Again",
        brand: "Kevin Murphy",
        description: "Smoothing, anti-frizz leave-in treatment",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw5192eeb1/images/large/smooth.again%20200ml.png?sw=800&sh=1108&strip=false",
        price: 41,
        quantity: 10,
      },
      {
        id: "58df798f-8111-4c5c-afa0-341dd1730f36",
        name: "Everlasting Color Treatment",
        brand: "Kevin Murphy",
        description: "Bond building, nourishing, restorative treatment",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw773a7c04/images/large/Ever.lasting.colour.treatment%20bottleShdw.png?sw=800&sh=1108&strip=false",
        price: 49,
        quantity: 10,
      },
      {
        id: "7927b23f-348d-467d-9146-4093e93e50ec",
        name: "The Great Hydrator Moisture Mask",
        brand: "Evo",
        description:
          "An intense moisture-rich hair mask to deeply hydrate, strengthen and improve manageability and shine of dry hair",
        imageUrl:
          "https://www.evohair.com/contentassets/4c122b9987d44c5eab3d8487ac0f8c7f/39267_evo_the-great-hyrator-moisture-mask_150ml_front.jpg",
        price: 37,
        quantity: 10,
      },
      {
        id: "3f8b5705-44ad-45f9-aad5-927d2552a688",
        name: "Happy Campers Wearable Treatment",
        brand: "Evo",
        description:
          "A lightweight daily styling treatment to moisturise, strengthen and protect, while adding style support",
        imageUrl:
          "https://www.evohair.com/contentassets/86ca29d4c9b145b09662990ab8a536b1/39251_evo_happy-campers-wearable-treatment_200ml_front.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "39097a25-d29f-4810-9a62-270c82cf67d7",
        name: "Mane Attention Protein Treatment",
        brand: "Evo",
        description:
          "An intense protein-rich hair treatment to repair, deeply moisturise and improve condition and shine of damaged, color-treated hair",
        imageUrl:
          "https://www.evohair.com/contentassets/559ee2b2e1f340a0b7694d155ff35ff7/39228_evo_mane20attention20protein20treatment_150ml_contents.jpg",
        price: 37,
        quantity: 10,
      },
      {
        id: "f32907db-6e48-4aa3-93ee-42f6949c17a5",
        name: "Baby Got Bounce Curl Treatment",
        brand: "Evo",
        description:
          "An intense rinse-out treatment that moisturizes and repairs hair to improve manageability, support curl pattern and prepare curls for easier styling",
        imageUrl:
          "https://www.evohair.com/contentassets/ed991b1e7e9d4ee3a8e82bc8381430e8/38834_evo_baby-got-bounce-curl-treatment_200ml_front.jpg",
        price: 37,
        quantity: 10,
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        id: "ff7d1004-eb91-4fa3-989f-5af1943ab384",
        name: "Ever Bounce",
        brand: "Kevin Murphy",
        description: "Lasting hold heat-activated style extender",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw7fa85c47/images/large/blow.dry%20ever%20bounce%20150mlShdw.png?sw=800&sh=1108&strip=false",
        price: 40,
        quantity: 10,
      },
      {
        id: "ac745ce4-9d79-4dcc-8dc6-91c5722a0156",
        name: "Rough Rider",
        brand: "Kevin Murphy",
        description: "Strong hold, moldable styling clay",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw22a8a925/images/large/rough.rider%20100g_-%20Shdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "e56c2139-19c9-4409-b2c4-27669e830811",
        name: "Motion Lotion",
        brand: "Kevin Murphy",
        description: "Curl enhancing lotion for fine hair",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw98c0c21d/images/large/motion.lotion%20150ml.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "6f4ebf87-3253-47a5-8947-560c376e61b7",
        name: "Full Again",
        brand: "Kevin Murphy",
        description: "Repairing thickening lotion",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw59bbcac1/images/large/full.again%20150ml-%20Shdw.png?sw=800&sh=1108&strip=false",
        price: 35,
        quantity: 10,
      },
      {
        id: "fce1301b-1f13-4ac7-8074-f07b0c1ace8e",
        name: "Doo Over",
        brand: "Kevin Murphy",
        description: "Dry powder finishing hairspray",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dweb381ee3/images/large/doo.over%20250ml%20NA-%20Shdw2.png?sw=800&sh=1108&strip=false",
        price: 37,
        quantity: 10,
      },
      {
        id: "1840ec32-704b-4c2c-80db-407f6001022d",
        name: "Water Killer Dry Shampoo",
        brand: "Evo",
        description:
          "A two-in-one dry shampoo and styling spray that refreshes hair, while replacing excess oil with volume and texture",
        imageUrl:
          "https://www.evohair.com/contentassets/28be00e7b0a84530971d903e898e8e12/39109_evo_water-killer-dry-shampoo_200ml_front.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "e384f7f8-f865-4aca-80d7-2f67589c5040",
        name: "Day of Grace Pre-Style Primer",
        brand: "Evo",
        description:
          "A lightweight leave-in primer that prepares hair for styling by detangling and improving condition while protecting against heat and uv damage",
        imageUrl:
          "https://www.evohair.com/contentassets/9c1184e5070341f1bd1b34c05d57afd3/39260_evo_day-of-grace-pre-style-primer_200ml_front.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "0188c980-a838-47fc-9a16-1793d02aa14a",
        name: "Salty Dog Salt Spray",
        brand: "Evo",
        description:
          "A salt spray that gives hair touchable beachy texture and volume with a natural matte finish",
        imageUrl:
          "https://www.evohair.com/contentassets/b216b3eedddb42fbb8eba6a5799ed6b3/39263_evo_salty-dog-salt-spray_200ml_front.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "10fe0dc2-d230-4d53-a7da-ec9c6d37ad7d",
        name: "Haze Styling Powder",
        brand: "Evo",
        description:
          "A super-lightweight styling powder that provides matte texture and volume to hair without residue",
        imageUrl:
          "https://www.evohair.com/contentassets/6dc635564b8f4216b31adeba64da11b4/39105_evo_haze20styling20powder_50ml_contents.jpg?",
        price: 35,
        quantity: 10,
      },
      {
        id: "22ebdeb3-e767-46b1-b38b-501f91e9ae33",
        name: "The Shag Beach Paste",
        brand: "Evo",
        description:
          "A hair styling paste that creates beachy, lived-in texture with a matte finish",
        imageUrl:
          "https://www.evohair.com/contentassets/0cd75280478c42a7a7d522a139151308/39908_evo_the20shag20beach20paste_50ml_frontpng.jpg",
        price: 32,
        quantity: 10,
      },
      {
        id: "aaee6f7a-230f-4555-8372-c28dc1143243",
        name: "Cassius Styling Clay",
        brand: "Evo",
        description:
          "A strong hold hair styling clay that provides definition, texture and malleable style control with a matte finish",
        imageUrl:
          "https://www.evohair.com/contentassets/3a326153beb241c3882cb72d5359cbab/39905_evo_cassius20clay_90g_contents.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "1017f85e-a3ae-4a7c-af79-d6629ca7194d",
        name: "Macgyver Multi-Use Mousse",
        brand: "Evo",
        description:
          "A multi-purpose hair styling mousse that can be used with or without heat to create volume, separation and texture",
        imageUrl:
          "https://www.evohair.com/contentassets/aca8b23882604878b3563574ffddc913/39510_evo_macgyver20multi20use20mousse_200ml_contents.jpg",
        price: 34,
        quantity: 10,
      },
      {
        id: "92c3713f-f581-4990-94b3-3d72c8896dc2",
        name: "Builders Paradise Working Spray",
        brand: "Evo",
        description:
          "A medium hold, lightweight hairspray that builds style and shape control with a re-workable, brushable finish",
        imageUrl:
          "https://www.evohair.com/contentassets/88430640f3b94f7c827a576106113a06/39103_evo_builders20paradise20working20spray_300ml_contents.jpg",
        price: 36,
        quantity: 10,
      },
    ],
  },
  {
    title: "Color Care",
    items: [
      {
        id: "70bf84f9-cfde-4b1e-b483-edf9f17c6b00",
        name: "Crystal Angel",
        brand: "Kevin Murphy",
        description: "Illuminating gloss colour enhancing shine treatment",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw8beacefd/images/large/crystal.angel%20250ml.png?sw=800&sh=1108&strip=false",
        price: 34,
        quantity: 10,
      },
      {
        id: "8d61a834-cf44-4f6d-bae9-3443467a31f6",
        name: "Cool Angel",
        brand: "Kevin Murphy",
        description: "Cool ash colour enhancing shine treatment",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwe64c71d5/images/stylized/32.png?sw=400&sh=554&strip=false",
        price: 34,
        quantity: 10,
      },
      {
        id: "780a84f3-3a3c-4323-ae4d-54d62c43ea15",
        name: "Fabuloso Platinum Blonde Toning Shampoo",
        brand: "Evo",
        description:
          "A strong toning shampoo that gently cleanses while neutralising unwanted brassy, yellow tones in color-treated blonde hair to leave it toned, cleansed and revived",
        imageUrl:
          "https://www.evohair.com/contentassets/624937c7d0bf438e801192de2f0197ee/24098_evo_fabuloso20platinum20blonde20toning20shampoo_250ml_front.jpeg",
        price: 35,
        quantity: 10,
      },
      {
        id: "9f5a76ee-0de1-4f2d-9168-033a5742a5b2",
        name: "Fabuloso Platinum Blonde Color Boosting Treatment",
        brand: "Evo",
        description:
          "A nourishing treatment that reduces unwanted brassy tones in color-treated blonde hair to leave it refreshed and revived with added shine",
        imageUrl:
          "https://www.evohair.com/contentassets/5ff1af34c9b249f992d3eeb496374e9e/24080_evo_fabuloso20colour20boosting20treatment20platinum20blonde_220ml_front.jpeg",
        price: 38,
        quantity: 10,
      },
      {
        id: "c94bd07f-fbc9-482b-a102-f193163a6d86",
        name: "Fabuloso Light Beige Color Boosting Treatment",
        brand: "Evo",
        description:
          "A color boosting treatment that provides an instant color boost, combined with a nourishing treatment to refresh or tone color, revive and add shine in just 3 minutes",
        imageUrl:
          "https://www.evohair.com/contentassets/06af53996cae498e9e82cedbe11421b6/24078_evo_fabuloso20colour20boosting20treatment20light20beige_220ml_front.jpeg",
        price: 38,
        quantity: 10,
      },
      {
        id: "e10a7a48-7472-4fa6-911b-a1b4e0869e98",
        name: "Fabuloso Caramel Color Boosting Treatment",
        brand: "Evo",
        description:
          "a color boosting treatment that provides an instant color boost, combined with a nourishing treatment to refresh or tone color, revive and add shine in just 3 minutes",
        imageUrl:
          "https://www.evohair.com/contentassets/0e0665dcd6dc4f39a38db585b06c2ca8/24076_evo_fabuloso20caramel20colour20boosting20treatment_220ml_contents.jpg",
        price: 38,
        quantity: 10,
      },
      {
        id: "a192b1c0-4620-4f4f-9670-f1188a49bfdd",
        name: "Fabuloso Copper Color Boosting Treatment",
        brand: "Evo",
        description:
          "a color boosting treatment that provides an instant color boost, combined with a nourishing treatment to refresh or tone color, revive and add shine in just 3 minutes",
        imageUrl:
          "https://www.evohair.com/contentassets/afab2922dc494479abf227d5535b5e1e/24082_evo_fabuloso20colour20boosting20treatment20copper_220ml_front.jpeg",
        price: 38,
        quantity: 10,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "8922858a-3199-40f5-a9ee-26b091295e2c",
        name: "Texture Comb",
        brand: "Kevin Murphy",
        description:
          "Neatens your style while helping to tame flyaways and control frizz",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwd3032c00/images/large/texture.comb.png?sw=800&sh=1108&strip=false",
        price: 20,
        quantity: 10,
      },
      {
        id: "f428bbd0-1609-4c33-b4c0-a1a2e5ca4787",
        name: "Small Thermal Round Brush",
        brand: "Kevin Murphy",
        description: "Achieve brilliant blow out results",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw034685cb/images/large/small_thermal_round_brush.jpg?sw=800&sh=1108&strip=false",
        price: 39,
        quantity: 10,
      },
      {
        id: "394faffc-9118-4268-84e1-4dca0d4212cd",
        name: "Scalp Spa Brush",
        brand: "Kevin Murphy",
        description:
          "Gently massages and exfoliates the scalp with an ergonomic design",
        imageUrl:
          "https://kevinmurphy.com.au/dw/image/v2/BFSC_PRD/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwd5bc3df5/images/large/scalp.spa.brush.png?sw=800&sh=1108&strip=false",
        price: 20,
        quantity: 10,
      },
      {
        id: "58f12d63-bb8a-4bea-8c7b-b2e969f9e90b",
        name: "Roy Detangling Comb",
        brand: "Evo",
        description:
          "A detangling comb made from anti-static wood that can be used to detangle and evenly distribute product",
        imageUrl:
          "https://www.evohair.com/contentassets/99d72020bf6e45acac634be1394b45b3/39766_evo_roy20wide20tooth20comb_os_contents.jpg",
        price: 27,
        quantity: 10,
      },
      {
        id: "254d9785-2840-4250-b994-160ab29ab16f",
        name: "Tyler Natural Bristle Teasing Brush",
        brand: "Evo",
        description:
          "A brush for sectioning, detailing and teasing when dressing hair. natural boar bristles help to smooth and add shine",
        imageUrl:
          "https://www.evohair.com/contentassets/54d510c7fd3c4a859060033d21895100/39780_evo_tyler20teasing20brush_os_front.jpg",
        price: 44,
        quantity: 10,
      },
      {
        id: "7d7d7e44-ed7f-4a78-aa95-8854c102989a",
        name: "Pete Ionic Paddle Brush",
        brand: "Evo",
        description:
          "A multi-purpose styling brush well-suited for smoothing and detangling hair. anti-static ionic nylon pins help reduce frizz for healthy, more manageable hair",
        imageUrl:
          "https://www.evohair.com/contentassets/c014156d388f4dd6954ffbc5b930062c/39793_evo_pete20paddle20brush_os_contents.jpg",
        price: 55,
        quantity: 10,
      },
      {
        id: "a9943e80-a580-4fbe-b7f4-aae0fd672de0",
        name: "Bruce 28 Natural Bristle Radial Brush",
        brand: "Evo",
        description:
          "A styling brush for blow-drying longer hair. boar bristles distribute natural oils and polish hair smooth",
        imageUrl:
          "https://www.evohair.com/contentassets/cbf0712e6fb14411b79238f9cc239490/39776_evo_bruce20radial20brush20box202_2820inch_contents.jpg",
        price: 66,
        quantity: 10,
      },
    ],
  },
];

export default SHOP_DATA;
