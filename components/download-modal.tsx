import Image from "next/image";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Playstore from "@/public/icons/playstore-icon.svg";
import Appstore from "@/public/icons/appstore-icon.svg";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const DownloadDialog = () => {
  return (
    <DialogRoot size={{ base: "xs", lg: "lg" }}>
      <DialogTrigger asChild>
        <Button className="group bg-[#222222] text-white font-bold px-4 md:px-6 py-5 md:py-7 text-[18px] md:text-[20px] leading-[34px] rounded-[10px] flex items-center justify-center lg:mr-10">
          Download Driver&#39;s App
          <Image
            src={ArrowRight}
            alt="arrow-right"
            className="w-6 h-6 ml-1 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[20px]">
        <DialogCloseTrigger />

        <DialogBody className="flex justify-center items-center flex-col pt-20 pb-5 lg:pb-10 gap-5 rounded-[20px]">
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
            lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
          >
            Download Monapp App for Free!
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize={{ base: "12px", md: "1.125rem", lg: "1.25rem" }}
            lineHeight={{ base: "17px", md: "1.75rem", lg: "1.80625rem" }}
          >
            Get Access to exclusive offers
          </Text>

          <Box className="flex justify-between items-center gap-3 lg:gap-10 mt-5">
            <Link
              href={""}
              className="rounded-[20px] flex border text-white border-white py-2 px-3 items-center justify-center"
            >
              <Image
                src={Appstore}
                alt="arrow-right"
                className="w-6 h-6 lg:w-8 lg:h-10 mr-2"
              />

              <p className="text-xs lg:text-base">
                Download On The
                <br />
                <span className="text-sm lg:text-lg">App Store</span>{" "}
              </p>
            </Link>

            <Link
              href={""}
              className="rounded-[20px] flex border text-white border-white py-2 px-3 items-center justify-center"
            >
              <Image
                src={Playstore}
                alt="arrow-right"
                className="w-6 h-6 lg:w-8 lg:h-10 mr-2"
              />

              <p className="text-xs lg:text-base">
                Get It On
                <br /> <span className="text-sm lg:text-lg">
                  Google Play
                </span>{" "}
              </p>
            </Link>
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default DownloadDialog;
