"use client";
import React, { useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";
import {
  ChevronUpIcon,
  ChartBarIcon,
  WrenchIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

const Filters = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <List>
      <Accordion defaultExpanded open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionSummary expandIcon={<ChevronUpIcon className="h-5" />}>
          <ListItemIcon>
            <ChartBarIcon className="h-5 ml-5 mt-1" />
          </ListItemIcon>
          <ListItemText primary="Plant Size" />
          <Chip
            label="3"
            className="rounded-full bg-blue-500 text-white mr-2"
            size="small"
          />
        </AccordionSummary>
        <AccordionDetails>
          <List component="div" disablePadding>
            <ListItem>
              <Checkbox label="size" />
              <ListItemText primary="Small" />
            </ListItem>
            <ListItem>
              <Checkbox label="size" />
              <ListItemText primary="Medium" />
            </ListItem>
            <ListItem>
              <Checkbox label="size" />
              <ListItemText primary="Large" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionSummary expandIcon={<ChevronUpIcon className="h-5" />}>
          <ListItemIcon>
            <WrenchIcon className="h-5 ml-5 mt-1" />
          </ListItemIcon>
          <ListItemText primary="Dificulty" />
          <Chip
            label="3"
            className="rounded-full bg-blue-500 text-white mr-2"
            size="small"
          />
        </AccordionSummary>
        <AccordionDetails>
          <List component="div" disablePadding>
            <ListItem>
              <Checkbox label="diff" />
              <ListItemText primary="No-Fuss" />
            </ListItem>
            <ListItem>
              <Checkbox label="diff" />
              <ListItemText primary="Easy" />
            </ListItem>
            <ListItem>
              <Checkbox label="diff" />
              <ListItemText primary="Moderate" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionSummary expandIcon={<ChevronUpIcon className="h-5" />}>
          <ListItemIcon>
            <CircleStackIcon className="h-5 ml-5 mt-1" />
          </ListItemIcon>
          <ListItemText primary="Expandable Item" />
          <Chip
            label="5"
            className="rounded-full bg-blue-500 text-white mr-2"
            size="small"
          />
        </AccordionSummary>
        <AccordionDetails>
          <List component="div" disablePadding>
            <ListItem>
              <Checkbox label="price" />
              <ListItemText primary="Under $50" />
            </ListItem>
            <ListItem>
              <Checkbox label="price" />
              <ListItemText primary="$50-$100" />
            </ListItem>
            <ListItem>
              <Checkbox label="price" />
              <ListItemText primary="$100-$200" />
            </ListItem>
            <ListItem>
              <Checkbox label="price" />
              <ListItemText primary="$200-$300" />
            </ListItem>
            <ListItem>
              <Checkbox label="price" />
              <ListItemText primary="$300 & Above" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </List>
  );
};

export default Filters;
