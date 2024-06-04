import React from "react";
import { Typography } from "@mui/material";
import { EmailOutlined, LocalPhoneOutlined, LocationCityOutlined, LocationOn, PhoneAndroidOutlined } from "@mui/icons-material";

const About = () => {
  return (
    <div className="">
      <div className="w-full relative h-[500px]">
        <img
          className="absolute top-0 left-0 z-0 static object-cover h-full w-full"
          src="https://images6.alphacoders.com/109/1098127.jpg"
          alt="nature image"
        />
        <Typography
          variant="h1"
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-orange-100 font-[cursive]"
        >
          ABOUT US
        </Typography>
      </div>
      <div className="w-full h-[x] ">
        <Typography
          variant="h4"
          className=" mt-16 italic text-center font-[cursive] text-amber-900"
        >
          Everyone should live with a little more green!
        </Typography>
        <p className="mx-24 text-center font-[cursive] text-xl leading-9 mt-8 text-amber-900">
          {
            "HL-Plants is here to help strengthen your relationship with plants. We make buying plants easy by delivering healthy, ready-to-go plants to your door and setting you up with the tips and tricks you need to help your plants thrive. Plants make life better. We make plants easy."
          }
        </p>
      </div>
      <div className="mt-12 w-full h-[1080px] bg-gray-300">
        <div className="flex justify-between mt-16  items-center w-full">
          <img
            className="h-[480px] mx-24 mt-16"
            src="https://bloomscape.com/wp-content/uploads/2020/05/about-from-greenhouse.png?ver=205033"
            alt="nature image"
          />
          <div className="flex flex-col mr-24 mt-16 w-full">
            <h2 className="text-2xl font-bold font-[cursive]">
              Direct From the Greenhouse
            </h2>
            <p className="font-[cursive] text-xl text-left leading-9 mt-4">
              When you buy a houseplant from a box store or nursery, it probably
              spends an average of four weeks traveling from a greenhouse to a
              drafty warehouse on a hot or cold truck. Then, it’s shipped to a
              store where it likely isn’t getting the water, light, or care it
              needs to thrive. With HL-Plants, our plants are cared for by plant
              experts and kept in optimal conditions at our greenhouse where
              they’re shipped directly to you. So instead of your plant spending
              4 weeks in an uncontrolled environment, it spends 3-4 days going
              from our greenhouse to your front door. This means your plants
              arrive healthy and already thriving.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-16 items-center">
          <div className="flex flex-col mx-24">
            <h2 className="text-2xl font-bold font-[cursive]">
              Shipped to Your Door
            </h2>
            <p className="font-[cursive] text-xl text-left leading-9 mt-4">
              Our plants are shipped with care and experience. We’ve learned how
              to keep plants at the right temperature, protect their roots, and
              keep them healthy while they travel from our greenhouse to your
              home. Our innovative packaging holds plants securely in place,
              preventing damage and decreasing soil spillage. Most shipments
              will arrive in under a week and all plants will be healthy,
              undamaged, and ready for you to enjoy.
            </p>
          </div>
          <img
            className="h-[400px] mr-24"
            src="https://cdn.redstagfulfillment.com/wp-content/uploads/plant-and-box-1140x760.jpeg"
            alt="nature image"
          />
        </div>
      </div>
      <div className="w-full">
        <section className="bg-cover z-10 bg-no-repeat bg-center">
          <div className="container mx-auto px-4 z-10 my-10 flex flex-col items-start">
            <Typography
              variant="h4"
              className="text-center z-10 font-[cursive] text-teal-950 mb-4"
            >
              Contact us
            </Typography>

            <div className="flex items-center gap-2">
              <EmailOutlined />
              <Typography
                variant="h6"
                className="text-center z-10 font-[cursive] text-teal-950"
              >
                Email: support@hl-plants.com
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <LocalPhoneOutlined />
              <Typography
                variant="h6"
                className="text-center z-10 font-[cursive] text-teal-950"
              >
                Phone: 0339 144 556
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <LocationOn />
              <Typography
                variant="h6"
                className="text-center z-10 font-[cursive] text-teal-950"
              >
                Address: Ta Quang Buu st., Dong Hoa district , Di An city, Binh Duong province.
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
