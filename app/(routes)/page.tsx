import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("1d6bfd5e-a43c-4e89-a6bb-36650ba8d675");
    
    return (
       <Container>
        <div className="space-y-10 pb-10">
            {/* Yazı rengini turuncu yapmak için Tailwind CSS kullanımı */}
            <div className="text-black-200">
                <Billboard data={billboard} />
            </div>
       
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
         </div>
       </Container>
    );
}

export default HomePage;
