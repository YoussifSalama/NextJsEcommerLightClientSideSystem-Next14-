"use client";

import { useState, useCallback } from "react";
import CustomersCard from "../common/CustomersCard";
import SectionHead from "../common/SectionHead";
import customerOpinions from "@/data/customers.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const CustomersSection = () => {
  const [api, setApi] = useState(null);

  const handleNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const handlePrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
      <SectionHead title="Our Happy Customers" className="text-start" />
      <div className="flex gap-2 ">
        <ArrowRightCircle className="cursor-pointer" onClick={handleNext}/>
        <ArrowLeftCircle className="cursor-pointer" onClick={handlePrev}/>
      </div>
      </div>
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {customerOpinions?.map((opinion, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CustomersCard data={opinion} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </div>
  );
};

export default CustomersSection;
