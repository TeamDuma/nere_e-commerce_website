import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    return {
        title: `${slug}`,
        description: `${slug}. Buy the best products from the best brands at the best prices on Nere through the power of group buying. Shop now!`,
        keywords: `Product Detail, ${slug}, Nere, E-commerce, Shopping, Group Buying, Group Shopping, Nere Group Buying Platform, Deals, Discounts, Offers, Nere Offers, Nere Deals, Nere Discounts, Nere Baby Tuesday, Group Buying Sites`,
    };
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}