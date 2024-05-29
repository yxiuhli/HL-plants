import React from 'react';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className="text-center">
      <div className="w-full relative h-[960px]">
        <img
          className="absolute top-0 left-0 z-0 static object-cover h-full w-full"
          src="/about1.jpeg"
          alt="nature image"
        />
        <Typography
          variant="h1"
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-[cursive]"
        >
          We come from
          HCMUT
        </Typography>
      </div>
      <div className="w-full relative h-[960px] ">
        <Typography variant="h3" className="absolute z-10 top-1/5 left-1/3 font-bold text-center font-[cursive] ml-12">WE BELIEVE</Typography>
        <img className="absolute mt-24 h-1/3 left-1/3" src="/about.jpeg" alt="About" />
        <Typography variant="p" className="absolute z-10 top-1/2 left-1/3 right-1/3 body1 text-center font-[cursive]">
          Everyone should live with a little more green.
          HL-Plants is here to help strengthen your relationship with plants. We make buying plants easy by delivering healthy, ready-to-go plants to your door and setting you up with the tips and tricks you need to help your plants thrive. Plants make life better. We make plants easy.
        </Typography>
        <Typography variant="h3" className="absolute z-10 top-2/3 left-1/3 font-bold text-center font-[cursive] ml-12">We Go Way Back</Typography>
        <Typography variant="p" className="absolute z-10 top-2/3 left-1/3 right-1/3 body1 text-center font-[cursive] mt-16">
          We come from five generations of greenhouse growers and floral industry innovators, and our roots go all the way back to ancestors who were pioneers in the Netherlands’ horticulture industry.
          Our founder, Phan Quang Hien, grew up in his parents’ greenhouse learning while they built their business supplying young plants to greenhouses across the United States. During this time, they perfected how to keep plants healthy during shipment by developing a deep understanding of the horticulture supply chain.
          Hien took the knowledge and experience he gained from the family business and combined it with his passion for plants to deliver ready-to-go plants direct to your door from the greenhouse.
        </Typography>
      </div>
      <div className="mt-12 w-full relative h-[960px] bg-gray-300">
        <div className="flex justify-between mt-16">
          <img
            className="h-[300px] mt-24 mx-48"
            src="/about-from-greenhouse.png"
            alt="nature image"
            />
          <div className="flex flex-col mr-96 mt-36">
            <h2 className="text-lg font-bold font-[cursive]">Direct From the Greenhouse</h2>
            <p className="font-[cursive]">
              When you buy a houseplant from a box store or nursery, it probably spends an average of four weeks traveling from a greenhouse to a drafty warehouse on a hot or cold truck. Then, it’s shipped to a store where it likely isn’t getting the water, light, or care it needs to thrive. With HL-Plants, our plants are cared for by plant experts and kept in optimal conditions at our greenhouse where they’re shipped directly to you. So instead of your plant spending 4 weeks in an uncontrolled environment, it spends 3-4 days going from our greenhouse to your front door. This means your plants arrive healthy and already thriving.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-60">
          <div className="flex flex-col mx-48">
            <h2 className="text-lg font-bold font-[cursive]">Shipped to Your Door</h2>
            <p className="font-[cursive]">
              Our plants are shipped with care and experience. We’ve learned how to keep plants at the right temperature, protect their roots, and keep them healthy while they travel from our greenhouse to your home. Our innovative packaging holds plants securely in place, preventing damage and decreasing soil spillage. Most shipments will arrive in under a week and all plants will be healthy, undamaged, and ready for you to enjoy.
            </p>
          </div>
          <img
            className="h-[260px] mr-96"
            // src='/about-to-your-door-opt.jpg'
            src="/hometitle.jpg"
            alt="nature image"
          />
        </div>
      </div>
      <div className="w-full relative h-[960px] ">
      {/* <img
          className="absolute top-0 left-0 z-0 static object-cover h-full w-full"
          src="/hometitle.jpg"
          alt="nature image"
        /> */}
        <section className="bg-cover z-10 bg-no-repeat bg-center py-24" >
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-4xl font-bold text-center my-24 z-10">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
              <p className="text-xl leading-loose">
                "Offering up high quality plants is just the beginning... Maintaining an indoor garden has never been easier! All you'll have to do is open the box, pull the plant out, and enjoy it."
              </p>
              <p className="text-xl leading-loose">
                "This is an amazing company! They have a wide variety of plants to choose from, and their customer service is top-notch. I would highly recommend them to anyone looking for high-quality plants."
              </p>
            </div>
            <div className="flex justify-between my-48">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-500">Interior Design Experts</p>
                <Button variant="outlined" className="text-lg font-bold rounded-full">Apartment Therapy</Button>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-500">Decluttering and Organization Tips</p>
                <Button variant="outlined" className="text-lg font-bold rounded-full">Real Simple</Button>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-500">Luxury Home Design Magazine</p>
                <Button variant="outlined" className="text-lg font-bold rounded-full">Architectural Digest</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;