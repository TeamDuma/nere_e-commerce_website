 interface ContainerProps{
    children :React.ReactNode
 }

const Container :React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div
        className="
        max-w-screen-2xl
        mx-auto
        xl:px-20
        md:px-4
        sm:px-2
        px-4
        backgroundColor:'#FAFAFA'
        "
        >
{children}
        </div>
     );
}
 
export default Container;