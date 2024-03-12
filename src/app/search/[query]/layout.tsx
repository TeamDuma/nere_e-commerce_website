import { Metadata } from "next";

type Props = {
    params: {
        query: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { query } = params;

    return {
        title: `Search Results for ${query}`,
        description: `Buy the best products from the best brands at the best prices on Nere through the power of group buying. Shop now!`,
        keywords: `Product Detail, ${query}, Nere, E-commerce, Shopping, Group Buying, Group Shopping, Nere Group Buying Platform, Deals, Discounts, Offers, Nere Offers, Nere Deals, Nere Discounts, Nere Baby Tuesday, Group Buying Sites`,
    };
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}