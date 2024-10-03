import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { cn } from "@/lib/utils";
import { Button } from "../ui";

export default function ControlledDoc() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const handleIndexChange = (index: number) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  return (
    <div className="card">
      <div className="flex flex-wrap justify-content-end gap-2 mb-3">
        {[0, 1, 2].map((index) => (
          <Button
            key={index}
            onClick={() => handleIndexChange(index)}
            className={cn(
              "py-2 px-3 rounded-full hover:bg-white hover:text-black bg-secondary",
              activeIndex.includes(index) ? "" : ""
            )}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <Accordion
        multiple
        activeIndex={activeIndex}
        onTabChange={(e) => {
          const newIndex = Array.isArray(e.index) ? e.index : [e.index];
          setActiveIndex(newIndex);
        }}
        style={{ backgroundColor: "red !important" }}
      >
        <AccordionTab header={<div className="p-3 bg-tertiary">walaooo</div>}>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab
          header={<div className=" p-3">Header II</div>}
          className="!bg-tertiary"
        >
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab
          header={<div className=" p-3">Header III</div>}
          className="!bg-tertiary"
        >
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
