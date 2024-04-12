import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import ProductsPanel from "@/components/productsPanel/ProductsPanel";
import { getPlants } from "@/lib/data";

const PlantsPage = async () => {
  const plants = await getPlants();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-10 py-6">
        <Typography variant="h3">Plants</Typography>
        <Accordion className="w-1/4">
          <AccordionSummary
            expandIcon={<ChevronDownIcon className="text-blue-700"/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex gap-10 px-10 mt-4">
        <div className="w-1/5 bg-blue-300">Filter</div>
        <div className="w-4/5 bg-yellow-300"><ProductsPanel products={plants}/></div>
      </div>
    </div>
  );
};

export default PlantsPage;
