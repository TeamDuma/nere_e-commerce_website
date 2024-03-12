import { GetGroupResponse } from "@/types/group";
import axios from "axios";
import { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { id } = params;
        const response = await axios.get<GetGroupResponse>(`${process.env.NEXT_PUBLIC_API_URL}/groups/${id}`);
        const { group } = response.data.data;
        return {
            title: `${group.product?.name} - ${group.join_code}`,
            description: `Group ${group.join_code} buying ${group.product?.name}. Buy the best products from the best brands at the best prices on Nere through the power of group buying. Shop now!`,
            keywords: `Product Detail, ${group.product?.name}, ${group.product?.slug}, Nere, E-commerce, Shopping, Group Buying, Group Shopping, Nere Group Buying Platform, Deals, Discounts, Offers, Nere Offers, Nere Deals, Nere Discounts, Nere Baby Tuesday, Group Buying Sites`,
        };
    } catch (error) {
        console.error("Error fetching group data:", error);
        // Handle the error or throw it to be caught by the caller
        throw error;
    }
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}