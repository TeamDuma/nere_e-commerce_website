import Link from "next/link";
import Container from "../Container";

const Header = () =>{
    return(<div className="
    sticky
    top-0
    w-full
    bg-slate-400
    shadow-sm
    ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex 
                item-center
                justify-between
                gab-3
                md:gap-0
                ">
                    <Link href="/">Nere</Link>
        
                <div className="hidden md:block ">
                    Search
    
                </div>
                <div className="flex item-center gap-8 md:gap-12">
                    Login/Registeration
        
                </div>
                <div>
                    Cart
        
                </div>
                </div>

                
            </Container>


        </div>
    </div>);

}
 export default Header 