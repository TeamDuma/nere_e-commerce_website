"use client";

import Categories from "@/app/categories/Page";
import CategoriesCards from "@/categories/components/CategoriesCards";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import OngoingRow from "@/components/OngoingRow";
import Search from "@/components/Search";
import Title from "@/components/Title";
import TwoBannerLayout from "@/components/TwoBannerLayout";
import OngoingPurchases from "@/app/groups/ongoingPurchases/page";
import Link from "next/link";

import Container from "@/components/common/Container";
import EntertainmentSection from "@/components/common/EntertainmentSection";
import { useState } from "react";

export default function Home() {
  return (
    <Container>
    <OngoingRow />
      <Banner />
      <EntertainmentSection />
      <Categories />
      <Title text={"Ongoing Groups"} />
      <OngoingPurchases />
   <TwoBannerLayout /> 
      <FeaturedProducts /> 
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Link href="/products">
            <div
              className="rounded-lg shadow text-center text-white text-base font-semibold py-3"
              style={{
                background: "#298592",
                width: "150px",
                marginTop: "9px",
              }}
            >
              View All Items
            </div>
          </Link>
        </div>
      </Container>
  );
}
